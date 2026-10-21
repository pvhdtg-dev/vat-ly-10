/**
 * Main Controller for Vật Lí 10 Application
 */

// Simple Web Audio API Synthesizer
const SoundEffects = {
  ctx: null,
  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  },
  playTone(freq, type, duration, delay = 0) {
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();

      setTimeout(() => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      }, delay * 1000);
    } catch (e) {
      // Audio might be blocked until user interaction
    }
  },
  correct() {
    this.playTone(523.25, 'sine', 0.12, 0);       // C5
    this.playTone(659.25, 'sine', 0.12, 0.08);    // E5
    this.playTone(783.99, 'sine', 0.25, 0.16);    // G5
  },
  wrong() {
    this.playTone(220, 'sawtooth', 0.25, 0);      // A3
    this.playTone(196, 'sawtooth', 0.35, 0.15);   // G3
  },
  fanfare() {
    this.playTone(523.25, 'triangle', 0.15, 0);
    this.playTone(659.25, 'triangle', 0.15, 0.12);
    this.playTone(783.99, 'triangle', 0.15, 0.24);
    this.playTone(1046.50, 'triangle', 0.45, 0.36);
  }
};

// Confetti Effect
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const particles = [];
  const colors = ['#4f46e5', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];
  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height * 0.4,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.8) * 12,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      dr: (Math.random() - 0.5) * 10
    });
  }

  let frames = 0;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // gravity
      p.rotation += p.dr;
      if (p.y < canvas.height) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    frames++;
    if (alive && frames < 180) {
      requestAnimationFrame(animate);
    } else {
      canvas.style.display = 'none';
    }
  }
  animate();
}

// App Controller State
const App = {
  activeTab: 'theory',
  selectedLessonId: 'bai-4',
  
  // Practice state
  quiz: {
    mode: 'practice', // 'practice' | 'exam'
    lessonFilter: 'all',
    levelFilter: 'all',
    questions: [],
    currentIndex: 0,
    userAnswers: {},  // questionId => answer
    checkedQuestions: {}, // questionId => boolean (for instant feedback)
    timerSeconds: 900, // 15 mins for exam
    timerInterval: null,
    isSubmitted: false
  },

  // Storage
  progress: {
    readLessons: {},
    answeredQuestions: {}, // qId => { correct: bool }
    examScores: []
  },

  init() {
    this.loadProgress();
    this.initTheme();
    this.initTabs();
    this.renderLessonNav();
    this.showLesson(this.selectedLessonId);
    this.initPracticeFilters();
    this.setupQuiz();
    this.renderFormulas();
    this.renderStats();

    if (window.PhysicsSims) {
      window.PhysicsSims.init();
    }

    this.renderMath();
    setTimeout(() => this.renderMath(), 400);
  },

  loadProgress() {
    try {
      const saved = localStorage.getItem('vatly10_kntt_progress');
      if (saved) {
        this.progress = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Storage error', e);
    }
  },

  saveProgress() {
    try {
      localStorage.setItem('vatly10_kntt_progress', JSON.stringify(this.progress));
    } catch (e) {}
  },

  initTheme() {
    const isDark = localStorage.getItem('vatly10_theme') === 'dark' || 
      (!localStorage.getItem('vatly10_theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
    const themeBtn = document.getElementById('btn-toggle-theme');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const nowDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('vatly10_theme', nowDark ? 'dark' : 'light');
      });
    }
  },

  initTabs() {
    const tabBtns = document.querySelectorAll('[data-tab-target]');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab-target');
        this.switchTab(target);
      });
    });
  },

  switchTab(tabId) {
    this.activeTab = tabId;
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    const targetContent = document.getElementById(`tab-${tabId}`);
    if (targetContent) targetContent.classList.add('active');

    // Update Nav buttons styling
    document.querySelectorAll('[data-tab-target]').forEach(btn => {
      const active = btn.getAttribute('data-tab-target') === tabId;
      if (active) {
        btn.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      } else {
        btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
        btn.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:bg-slate-100', 'dark:hover:bg-slate-800');
      }
    });

    if (tabId === 'simulations') {
      setTimeout(() => {
        if (window.PhysicsSims) {
          if (window.PhysicsSims.motion) window.PhysicsSims.motion.draw();
          if (window.PhysicsSims.freefall) window.PhysicsSims.freefall.draw();
          if (window.PhysicsSims.projectile) window.PhysicsSims.projectile.draw();
        }
      }, 50);
    } else if (tabId === 'stats') {
      this.renderStats();
    }

    this.renderMath();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  renderLessonNav() {
    const navContainer = document.getElementById('lessons-nav-list');
    if (!navContainer) return;

    navContainer.innerHTML = LESSONS_DATA.map(lesson => {
      const isRead = !!this.progress.readLessons[lesson.id];
      const isSelected = lesson.id === this.selectedLessonId;
      return `
        <button onclick="App.showLesson('${lesson.id}')"
          class="w-full text-left p-3 rounded-xl transition-all flex items-start space-x-3 mb-2 border ${
            isSelected 
              ? 'bg-indigo-50 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-600 font-semibold' 
              : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 border-slate-200 dark:border-slate-800'
          }">
          <div class="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
            isRead ? 'bg-emerald-500 text-white' : (isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300')
          }">
            ${lesson.number}
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Bài ${lesson.number} · ${lesson.pageRange}</div>
            <div class="text-sm font-semibold truncate text-slate-900 dark:text-slate-100">${lesson.title}</div>
          </div>
          ${isRead ? '<span class="text-emerald-500 text-xs shrink-0">✓</span>' : ''}
        </button>
      `;
    }).join('');
  },

  showLesson(lessonId) {
    this.selectedLessonId = lessonId;
    const lesson = LESSONS_DATA.find(l => l.id === lessonId);
    if (!lesson) return;

    // Mark as read
    this.progress.readLessons[lessonId] = true;
    this.saveProgress();
    this.renderLessonNav();

    const container = document.getElementById('lesson-detail-container');
    if (!container) return;

    container.innerHTML = `
      <div class="glass-card rounded-2xl p-6 sm:p-8 shadow-sm">
        <!-- Header -->
        <div class="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div class="flex items-center space-x-2">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                ${lesson.badge}
              </span>
              <span class="text-xs text-slate-500 dark:text-slate-400">
                ${lesson.pageRange} SGK KNTT
              </span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              Bài ${lesson.number}: ${lesson.title}
            </h1>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">${lesson.description}</p>
          </div>
          <button onclick="App.startPracticeForLesson('${lesson.id}')"
            class="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-sm transition flex items-center space-x-2">
            <span>Luyện bài tập ngay</span>
            <span>→</span>
          </button>
        </div>

        <!-- Objectives -->
        <div class="my-6 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-200 dark:border-blue-900">
          <h3 class="text-sm font-bold text-blue-900 dark:text-blue-300 flex items-center mb-2">
            <span class="mr-2">🎯</span> Mục tiêu bài học (Em sẽ học được)
          </h3>
          <ul class="list-disc list-inside text-sm text-slate-700 dark:text-slate-300 space-y-1">
            ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
          </ul>
        </div>

        <!-- Theory Sections -->
        <div class="space-y-8 my-6 text-slate-800 dark:text-slate-200 leading-relaxed">
          ${lesson.sections.map(sec => `
            <div class="theory-section">
              <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center">
                <span class="w-2 h-6 bg-indigo-600 rounded-full mr-2.5"></span>
                ${sec.title}
              </h3>
              <div class="text-sm sm:text-base">${sec.content}</div>
            </div>
          `).join('')}
        </div>

        <!-- Key Formulas Callout -->
        <div class="my-6 p-5 rounded-2xl bg-slate-900 text-white dark:bg-slate-800/90 border border-slate-700 shadow-inner">
          <h4 class="font-bold text-amber-400 mb-3 text-base flex items-center">
            <span class="mr-2">⚡</span> Bộ công thức trọng tâm cần nhớ - Bài ${lesson.number}
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${lesson.formulas.map(f => `
              <div class="bg-slate-800/80 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                <div class="text-xs text-indigo-300 font-semibold mb-1">${f.name}</div>
                <div class="text-base font-bold text-emerald-400 my-1"><span class="katex-display">${f.latex}</span></div>
                <div class="text-xs text-slate-400">${f.note}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- SGK Highlights / Traps -->
        <div class="my-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900">
          <h4 class="font-bold text-amber-900 dark:text-amber-300 text-sm mb-2 flex items-center">
            <span class="mr-2">💡</span> Ví dụ thực tế & Bài toán vận dụng trong SGK
          </h4>
          <ul class="list-disc list-inside text-sm text-amber-900 dark:text-amber-200 space-y-1.5">
            ${lesson.sgkHighlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <!-- Footer Next/Prev -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
          ${this.getPrevLessonBtn(lesson.number)}
          ${this.getNextLessonBtn(lesson.number)}
        </div>
      </div>
    `;

    this.renderMath();
  },

  getPrevLessonBtn(currentNum) {
    const prev = LESSONS_DATA.find(l => l.number === currentNum - 1);
    if (!prev) return '<div></div>';
    return `
      <button onclick="App.showLesson('${prev.id}')"
        class="px-4 py-2 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl text-sm font-medium transition">
        ← Bài ${prev.number}: ${prev.title}
      </button>
    `;
  },

  getNextLessonBtn(currentNum) {
    const next = LESSONS_DATA.find(l => l.number === currentNum + 1);
    if (!next) return '<div></div>';
    return `
      <button onclick="App.showLesson('${next.id}')"
        class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-medium transition">
        Bài ${next.number}: ${next.title} →
      </button>
    `;
  },

  startPracticeForLesson(lessonId) {
    this.quiz.lessonFilter = lessonId;
    const filterSelect = document.getElementById('quiz-filter-lesson');
    if (filterSelect) filterSelect.value = lessonId;
    this.switchTab('practice');
    this.setupQuiz();
  },

  // PRACTICE & QUIZ SYSTEM
  initPracticeFilters() {
    const lessonFilter = document.getElementById('quiz-filter-lesson');
    const levelFilter = document.getElementById('quiz-filter-level');
    const modePractice = document.getElementById('mode-practice-btn');
    const modeExam = document.getElementById('mode-exam-btn');

    if (lessonFilter) {
      lessonFilter.innerHTML = `
        <option value="all">Tất cả bài học (Toàn chương II)</option>
        ${LESSONS_DATA.map(l => `<option value="${l.id}">Bài ${l.number}: ${l.title}</option>`).join('')}
      `;
      lessonFilter.addEventListener('change', (e) => {
        this.quiz.lessonFilter = e.target.value;
        this.setupQuiz();
      });
    }

    if (levelFilter) {
      levelFilter.addEventListener('change', (e) => {
        this.quiz.levelFilter = e.target.value;
        this.setupQuiz();
      });
    }

    if (modePractice) {
      modePractice.addEventListener('click', () => {
        this.quiz.mode = 'practice';
        modePractice.classList.add('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-white');
        modeExam.classList.remove('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-white');
        document.getElementById('exam-timer-box')?.classList.add('hidden');
        this.setupQuiz();
      });
    }

    if (modeExam) {
      modeExam.addEventListener('click', () => {
        this.quiz.mode = 'exam';
        modeExam.classList.add('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-white');
        modePractice.classList.remove('bg-white', 'dark:bg-slate-700', 'shadow-sm', 'text-indigo-600', 'dark:text-white');
        document.getElementById('exam-timer-box')?.classList.remove('hidden');
        this.setupQuiz();
      });
    }
  },

  setupQuiz() {
    // Filter questions
    let list = [...QUESTIONS_BANK];
    if (this.quiz.lessonFilter !== 'all') {
      list = list.filter(q => q.lessonId === this.quiz.lessonFilter);
    }
    if (this.quiz.levelFilter !== 'all') {
      list = list.filter(q => q.level === this.quiz.levelFilter);
    }

    // If exam mode, pick random 15 questions
    if (this.quiz.mode === 'exam') {
      list = list.sort(() => Math.random() - 0.5).slice(0, 15);
      this.startExamTimer();
    } else {
      clearInterval(this.quiz.timerInterval);
    }

    this.quiz.questions = list;
    this.quiz.currentIndex = 0;
    this.quiz.userAnswers = {};
    this.quiz.checkedQuestions = {};
    this.quiz.isSubmitted = false;

    this.renderQuestion();
  },

  startExamTimer() {
    clearInterval(this.quiz.timerInterval);
    this.quiz.timerSeconds = 900; // 15 mins
    const timerEl = document.getElementById('exam-timer-display');

    const updateTimer = () => {
      const min = Math.floor(this.quiz.timerSeconds / 60);
      const sec = this.quiz.timerSeconds % 60;
      if (timerEl) {
        timerEl.textContent = `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
      }
      if (this.quiz.timerSeconds <= 0) {
        clearInterval(this.quiz.timerInterval);
        alert('Hết giờ làm bài kiểm tra! Hệ thống sẽ tự động thu bài.');
        this.submitQuiz();
      }
      this.quiz.timerSeconds--;
    };

    updateTimer();
    this.quiz.timerInterval = setInterval(updateTimer, 1000);
  },

  renderQuestion() {
    const area = document.getElementById('quiz-render-area');
    if (!area) return;

    if (this.quiz.questions.length === 0) {
      area.innerHTML = `
        <div class="text-center py-12 glass-card rounded-2xl p-8">
          <div class="text-4xl mb-3">🔍</div>
          <h3 class="text-lg font-bold text-slate-800 dark:text-slate-100">Không tìm thấy câu hỏi phù hợp bộ lọc</h3>
          <p class="text-sm text-slate-500 mt-1">Vui lòng chọn bộ lọc "Tất cả bài học" hoặc mức độ khác để tiếp tục làm bài.</p>
        </div>
      `;
      return;
    }

    const q = this.quiz.questions[this.quiz.currentIndex];
    const total = this.quiz.questions.length;
    const isAnswered = this.quiz.userAnswers[q.id] !== undefined;
    const isChecked = this.quiz.checkedQuestions[q.id];

    const levelBadges = {
      nhan_biet: '<span class="px-2 py-0.5 rounded text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">Nhận biết</span>',
      thong_hieu: '<span class="px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">Thông hiểu</span>',
      van_dung: '<span class="px-2 py-0.5 rounded text-xs font-semibold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">Vận dụng</span>',
      van_dung_cao: '<span class="px-2 py-0.5 rounded text-xs font-semibold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300">Vận dụng cao</span>'
    };

    const typeBadges = {
      mcq: '<span class="text-xs text-slate-500">Trắc nghiệm 4 lựa chọn</span>',
      true_false: '<span class="text-xs text-purple-600 dark:text-purple-400 font-medium">Trắc nghiệm Đúng / Sai (Đề mới 2025)</span>',
      short_answer: '<span class="text-xs text-indigo-600 dark:text-indigo-400 font-medium">Trả lời ngắn / Điền số (Đề mới 2025)</span>'
    };

    area.innerHTML = `
      <div class="glass-card rounded-2xl p-6 sm:p-8 shadow-sm">
        <!-- Top status -->
        <div class="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div class="flex items-center space-x-2">
            <span class="font-bold text-sm text-indigo-600 dark:text-indigo-400">Câu ${this.quiz.currentIndex + 1} / ${total}</span>
            ${levelBadges[q.level] || ''}
            ${typeBadges[q.type] || ''}
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400">
            ${LESSONS_DATA.find(l => l.id === q.lessonId)?.title || ''}
          </div>
        </div>

        <!-- Question text -->
        <div class="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 mb-6 leading-relaxed">
          ${q.question}
        </div>

        <!-- Input by question type -->
        <div class="mb-6">
          ${this.renderQuestionInput(q, isChecked)}
        </div>

        <!-- Explanation box (Practice mode or after check) -->
        ${(isChecked || this.quiz.isSubmitted) ? `
          <div class="p-4 rounded-xl mb-6 ${
            this.isQuestionCorrect(q) 
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200' 
              : 'bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
          }">
            <div class="font-bold text-sm flex items-center mb-1">
              ${this.isQuestionCorrect(q) ? '✅ Chính xác!' : '❌ Chưa chính xác!'}
              <span class="ml-2 font-semibold text-slate-800 dark:text-slate-200">Lời giải chi tiết:</span>
            </div>
            <div class="text-sm mt-1 leading-relaxed text-slate-800 dark:text-slate-200">${q.explanation}</div>
          </div>
        ` : ''}

        <!-- Bottom controls -->
        <div class="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
          <button onclick="App.prevQuestion()" ${this.quiz.currentIndex === 0 ? 'disabled' : ''}
            class="px-4 py-2 rounded-xl text-sm font-semibold border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40 transition">
            ← Câu trước
          </button>

          <div class="flex items-center space-x-2">
            ${(this.quiz.mode === 'practice' && !isChecked) ? `
              <button onclick="App.checkCurrentQuestion()" ${!isAnswered ? 'disabled' : ''}
                class="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white rounded-xl text-sm font-semibold shadow-sm transition">
                Kiểm tra đáp án
              </button>
            ` : ''}

            ${this.quiz.currentIndex === total - 1 ? `
              <button onclick="App.submitQuiz()"
                class="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-semibold shadow-md transition flex items-center space-x-1.5">
                <span>Nộp bài & Chấm điểm</span>
                <span>✓</span>
              </button>
            ` : `
              <button onclick="App.nextQuestion()"
                class="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white dark:bg-slate-700 dark:hover:bg-slate-600 rounded-xl text-sm font-semibold transition">
                Câu tiếp →
              </button>
            `}
          </div>
        </div>

        <!-- Quick Question Navigator Grid -->
        <div class="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div class="text-xs font-semibold text-slate-500 mb-2">Bảng điều hướng câu hỏi:</div>
          <div class="flex flex-wrap gap-1.5">
            ${this.quiz.questions.map((item, idx) => {
              const ans = this.quiz.userAnswers[item.id];
              const checked = this.quiz.checkedQuestions[item.id];
              let colorClass = 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
              if (idx === this.quiz.currentIndex) {
                colorClass = 'ring-2 ring-indigo-500 font-bold';
              }
              if (checked || this.quiz.isSubmitted) {
                colorClass = this.isQuestionCorrect(item) 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-rose-500 text-white';
              } else if (ans !== undefined) {
                colorClass = 'bg-indigo-500 text-white';
              }
              return `
                <button onclick="App.jumpToQuestion(${idx})"
                  class="w-7 h-7 rounded-lg text-xs font-semibold transition flex items-center justify-center ${colorClass}">
                  ${idx + 1}
                </button>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;

    this.renderMath();
  },

  renderQuestionInput(q, isChecked) {
    if (q.type === 'mcq') {
      const userChoice = this.quiz.userAnswers[q.id];
      return `
        <div class="space-y-2.5">
          ${q.options.map((opt, optIdx) => {
            let optionClass = 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/60';
            if (isChecked || this.quiz.isSubmitted) {
              if (optIdx === q.correctIndex) {
                optionClass = 'correct font-semibold';
              } else if (userChoice === optIdx) {
                optionClass = 'wrong font-semibold';
              }
            } else if (userChoice === optIdx) {
              optionClass = 'border-indigo-600 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-medium ring-1 ring-indigo-500';
            }

            return `
              <div onclick="App.selectMcqOption(${optIdx})"
                class="quiz-option p-3.5 rounded-xl border flex items-center space-x-3 text-sm sm:text-base ${optionClass}">
                <div class="w-6 h-6 rounded-full border border-slate-400 dark:border-slate-600 flex items-center justify-center font-bold text-xs shrink-0 ${
                  userChoice === optIdx ? 'bg-indigo-600 border-indigo-600 text-white' : ''
                }">
                  ${String.fromCharCode(65 + optIdx)}
                </div>
                <div class="flex-1">${opt}</div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    if (q.type === 'true_false') {
      const userAnswers = this.quiz.userAnswers[q.id] || {};
      return `
        <div class="space-y-3">
          ${q.subQuestions.map((sub, sIdx) => {
            const userChoice = userAnswers[sIdx];
            return `
              <div class="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
                <div class="flex-1 font-medium text-slate-800 dark:text-slate-200">
                  <span class="font-bold text-indigo-600 mr-1.5">${String.fromCharCode(97 + sIdx)})</span>
                  ${sub.text}
                </div>
                <div class="flex items-center space-x-2 shrink-0">
                  <button onclick="App.selectTrueFalseOption(${sIdx}, true)" ${isChecked ? 'disabled' : ''}
                    class="px-3 py-1.5 rounded-lg font-semibold text-xs transition border ${
                      userChoice === true 
                        ? (isChecked ? (sub.correct ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') : 'bg-indigo-600 text-white')
                        : 'border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }">
                    ĐÚNG
                  </button>
                  <button onclick="App.selectTrueFalseOption(${sIdx}, false)" ${isChecked ? 'disabled' : ''}
                    class="px-3 py-1.5 rounded-lg font-semibold text-xs transition border ${
                      userChoice === false 
                        ? (isChecked ? (!sub.correct ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white') : 'bg-indigo-600 text-white')
                        : 'border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }">
                    SAI
                  </button>
                  ${isChecked ? `
                    <span class="text-xs font-bold ${sub.correct === userChoice ? 'text-emerald-500' : 'text-rose-500'}">
                      (${sub.correct ? 'Đúng' : 'Sai'})
                    </span>
                  ` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    if (q.type === 'short_answer') {
      const userVal = this.quiz.userAnswers[q.id] || '';
      return `
        <div class="max-w-md">
          <label class="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5">
            Nhập kết quả tính toán của em (kèm đơn vị ${q.unit}):
          </label>
          <div class="flex items-center space-x-2">
            <input type="number" step="any" id="short-answer-input"
              value="${userVal}" ${isChecked ? 'disabled' : ''}
              onchange="App.setShortAnswer(this.value)"
              placeholder="Ví dụ: 10, 2.5..."
              class="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-mono text-base focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            <span class="font-bold text-slate-600 dark:text-slate-300 text-sm">${q.unit}</span>
          </div>
          ${isChecked ? `
            <div class="mt-2 text-xs font-bold ${Math.abs(parseFloat(userVal) - q.correctValue) < 0.05 ? 'text-emerald-600' : 'text-rose-600'}">
              Đáp án chuẩn: ${q.correctValue} ${q.unit}
            </div>
          ` : ''}
        </div>
      `;
    }

    return '';
  },

  selectMcqOption(optIdx) {
    const q = this.quiz.questions[this.quiz.currentIndex];
    if (this.quiz.checkedQuestions[q.id] || this.quiz.isSubmitted) return;
    this.quiz.userAnswers[q.id] = optIdx;
    this.renderQuestion();
  },

  selectTrueFalseOption(subIdx, value) {
    const q = this.quiz.questions[this.quiz.currentIndex];
    if (this.quiz.checkedQuestions[q.id] || this.quiz.isSubmitted) return;
    if (!this.quiz.userAnswers[q.id]) {
      this.quiz.userAnswers[q.id] = {};
    }
    this.quiz.userAnswers[q.id][subIdx] = value;
    this.renderQuestion();
  },

  setShortAnswer(val) {
    const q = this.quiz.questions[this.quiz.currentIndex];
    if (this.quiz.checkedQuestions[q.id] || this.quiz.isSubmitted) return;
    this.quiz.userAnswers[q.id] = parseFloat(val);
  },

  checkCurrentQuestion() {
    const q = this.quiz.questions[this.quiz.currentIndex];
    if (this.quiz.userAnswers[q.id] === undefined) return;

    this.quiz.checkedQuestions[q.id] = true;
    const isCorrect = this.isQuestionCorrect(q);

    if (isCorrect) {
      SoundEffects.correct();
    } else {
      SoundEffects.wrong();
    }

    // Save stats
    this.progress.answeredQuestions[q.id] = { correct: isCorrect };
    this.saveProgress();

    this.renderQuestion();
  },

  isQuestionCorrect(q) {
    const ans = this.quiz.userAnswers[q.id];
    if (ans === undefined) return false;

    if (q.type === 'mcq') {
      return ans === q.correctIndex;
    }
    if (q.type === 'true_false') {
      return q.subQuestions.every((sub, sIdx) => ans[sIdx] === sub.correct);
    }
    if (q.type === 'short_answer') {
      return Math.abs(parseFloat(ans) - q.correctValue) < 0.05;
    }
    return false;
  },

  prevQuestion() {
    if (this.quiz.currentIndex > 0) {
      this.quiz.currentIndex--;
      this.renderQuestion();
    }
  },

  nextQuestion() {
    if (this.quiz.currentIndex < this.quiz.questions.length - 1) {
      this.quiz.currentIndex++;
      this.renderQuestion();
    }
  },

  jumpToQuestion(index) {
    if (index >= 0 && index < this.quiz.questions.length) {
      this.quiz.currentIndex = index;
      this.renderQuestion();
    }
  },

  submitQuiz() {
    clearInterval(this.quiz.timerInterval);
    this.quiz.isSubmitted = true;

    // Calculate score
    let correctCount = 0;
    this.quiz.questions.forEach(q => {
      this.quiz.checkedQuestions[q.id] = true;
      if (this.isQuestionCorrect(q)) {
        correctCount++;
        this.progress.answeredQuestions[q.id] = { correct: true };
      } else {
        this.progress.answeredQuestions[q.id] = { correct: false };
      }
    });

    const total = this.quiz.questions.length;
    const score10 = ((correctCount / (total || 1)) * 10).toFixed(1);

    this.progress.examScores.push({
      date: new Date().toLocaleDateString('vi-VN'),
      score: score10,
      total,
      correctCount
    });
    this.saveProgress();

    if (score10 >= 8.0) {
      SoundEffects.fanfare();
      launchConfetti();
    }

    this.renderExamResultModal(score10, correctCount, total);
  },

  renderExamResultModal(score10, correctCount, total) {
    const area = document.getElementById('quiz-render-area');
    if (!area) return;

    let evaluation = 'Cần nỗ lực ôn tập lại thêm!';
    let badgeColor = 'text-rose-600 bg-rose-50 dark:bg-rose-950/40';
    if (score10 >= 9.0) {
      evaluation = 'Xuất sắc! Nắm vững hoàn hảo kiến thức chương Động học!';
      badgeColor = 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40';
    } else if (score10 >= 7.0) {
      evaluation = 'Khá giỏi! Cần chú ý thêm một số bẫy lý thuyết và bài tập ném.';
      badgeColor = 'text-indigo-600 bg-indigo-50 dark:bg-indigo-950/40';
    } else if (score10 >= 5.0) {
      evaluation = 'Đạt yêu cầu! Hãy ôn lại các công thức trong Sổ tay công thức.';
      badgeColor = 'text-amber-600 bg-amber-50 dark:bg-amber-950/40';
    }

    area.innerHTML = `
      <div class="glass-card rounded-2xl p-8 text-center max-w-xl mx-auto shadow-lg">
        <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center text-3xl font-extrabold ${badgeColor} mb-4">
          ${score10}
        </div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-1">Kết Quả Bài Làm</h2>
        <p class="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">${evaluation}</p>
        
        <div class="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl mb-6 text-sm">
          <div>
            <span class="text-slate-500 block text-xs">Số câu đúng:</span>
            <span class="font-bold text-emerald-600 text-lg">${correctCount} / ${total} câu</span>
          </div>
          <div>
            <span class="text-slate-500 block text-xs">Tỉ lệ chính xác:</span>
            <span class="font-bold text-indigo-600 text-lg">${((correctCount / total) * 100).toFixed(0)}%</span>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row gap-3 justify-center">
          <button onclick="App.renderQuestion()"
            class="px-5 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-xl text-sm font-semibold transition">
            Xem lại bài làm & Lời giải
          </button>
          <button onclick="App.setupQuiz()"
            class="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition">
            Làm bài mới
          </button>
        </div>
      </div>
    `;
  },

  // FORMULA SHEET RENDERER
  renderFormulas() {
    const container = document.getElementById('formula-sheet-container');
    if (!container) return;

    container.innerHTML = FORMULA_SHEET.map(cat => `
      <div class="glass-card rounded-2xl p-6 shadow-sm mb-6">
        <h3 class="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-4 flex items-center">
          <span class="w-2.5 h-2.5 rounded-full bg-indigo-600 mr-2"></span>
          ${cat.category}
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${cat.items.map(item => `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700">
              <div class="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">${item.name}</div>
              <div class="text-lg font-bold text-indigo-700 dark:text-indigo-300 my-1">
                <span class="katex-display">${item.formula}</span>
              </div>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-2">${item.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  },

  // STATS & MISTAKE NOTEBOOK
  renderStats() {
    const container = document.getElementById('stats-container');
    if (!container) return;

    const readCount = Object.keys(this.progress.readLessons).length;
    const answeredCount = Object.keys(this.progress.answeredQuestions).length;
    let correctCount = 0;
    const wrongQuestions = [];

    Object.entries(this.progress.answeredQuestions).forEach(([qId, val]) => {
      if (val.correct) {
        correctCount++;
      } else {
        const found = QUESTIONS_BANK.find(q => q.id === qId);
        if (found) wrongQuestions.push(found);
      }
    });

    const accuracy = answeredCount > 0 ? ((correctCount / answeredCount) * 100).toFixed(0) : 0;

    container.innerHTML = `
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div class="glass-card rounded-2xl p-5 shadow-sm border-l-4 border-indigo-500">
          <div class="text-xs text-slate-500 font-medium">Tiến độ lý thuyết</div>
          <div class="text-2xl font-extrabold text-indigo-600 mt-1">${readCount} / ${LESSONS_DATA.length} bài</div>
          <div class="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full mt-3 overflow-hidden">
            <div class="bg-indigo-600 h-2 rounded-full" style="width: ${(readCount / LESSONS_DATA.length) * 100}%"></div>
          </div>
        </div>

        <div class="glass-card rounded-2xl p-5 shadow-sm border-l-4 border-emerald-500">
          <div class="text-xs text-slate-500 font-medium">Số câu đã luyện tập</div>
          <div class="text-2xl font-extrabold text-emerald-600 mt-1">${answeredCount} câu</div>
          <div class="text-xs text-slate-400 mt-2">Đúng: ${correctCount} · Sai: ${wrongQuestions.length}</div>
        </div>

        <div class="glass-card rounded-2xl p-5 shadow-sm border-l-4 border-purple-500">
          <div class="text-xs text-slate-500 font-medium">Tỉ lệ chính xác</div>
          <div class="text-2xl font-extrabold text-purple-600 mt-1">${accuracy}%</div>
          <div class="text-xs text-slate-400 mt-2">${accuracy >= 80 ? 'Phong độ rất tốt 🚀' : 'Cố gắng cải thiện thêm 💪'}</div>
        </div>
      </div>

      <!-- Sổ tay câu sai (Mistake Notebook) -->
      <div class="glass-card rounded-2xl p-6 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white flex items-center">
            <span class="mr-2">📕</span> Sổ tay câu hỏi sai (${wrongQuestions.length})
          </h3>
          ${wrongQuestions.length > 0 ? `
            <button onclick="App.clearMistakes()" class="text-xs text-rose-500 hover:underline">
              Xóa lịch sử sai
            </button>
          ` : ''}
        </div>

        ${wrongQuestions.length === 0 ? `
          <div class="text-center py-8 text-slate-400 text-sm">
            Tuyệt vời! Hiện tại bạn không có câu hỏi nào bị sai hoặc chưa làm bài tập.
          </div>
        ` : `
          <div class="space-y-4">
            ${wrongQuestions.map(wq => `
              <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                <div class="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
                  ${LESSONS_DATA.find(l => l.id === wq.lessonId)?.title}
                </div>
                <div class="font-medium text-sm text-slate-800 dark:text-slate-100 mb-2">${wq.question}</div>
                <div class="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-800">
                  <strong class="text-indigo-600">Lời giải:</strong> ${wq.explanation}
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;

    this.renderMath();
  },

  clearMistakes() {
    Object.keys(this.progress.answeredQuestions).forEach(k => {
      if (!this.progress.answeredQuestions[k].correct) {
        delete this.progress.answeredQuestions[k];
      }
    });
    this.saveProgress();
    this.renderStats();
  },

  renderMath() {
    if (window.katex) {
      document.querySelectorAll('.katex-inline').forEach(el => {
        if (!el.dataset.rendered) {
          try {
            katex.render(el.textContent.trim(), el, { displayMode: false, throwOnError: false });
            el.dataset.rendered = 'true';
          } catch(e) {}
        }
      });
      document.querySelectorAll('.katex-display').forEach(el => {
        if (!el.dataset.rendered) {
          try {
            katex.render(el.textContent.trim(), el, { displayMode: true, throwOnError: false });
            el.dataset.rendered = 'true';
          } catch(e) {}
        }
      });
    }
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(document.body, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ],
          throwOnError: false
        });
      } catch (e) {}
    }
  }
};

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

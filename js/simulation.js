/**
 * Interactive Physics Simulations for Grade 10 Kinematics
 * 1. Straight Line Motion with Real-time Graphs
 * 2. Free Fall & Newton's Tube (Air vs Vacuum)
 * 3. Projectile Motion (Horizontal & Angled Launch)
 */

class MotionSimulation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.v0 = 5;      // m/s
    this.a = 1.5;     // m/s^2
    this.t = 0;       // seconds
    this.maxT = 10;
    this.isRunning = false;
    this.lastFrameTime = 0;
    
    this.history = []; // {t, x, v}
    this.initEvents();
    this.reset();
  }

  initEvents() {
    const v0Slider = document.getElementById('sim1-v0');
    const aSlider = document.getElementById('sim1-a');
    const v0Val = document.getElementById('sim1-v0-val');
    const aVal = document.getElementById('sim1-a-val');

    if (v0Slider && v0Val) {
      v0Slider.addEventListener('input', (e) => {
        this.v0 = parseFloat(e.target.value);
        v0Val.textContent = this.v0.toFixed(1) + ' m/s';
        if (!this.isRunning) this.reset();
      });
    }

    if (aSlider && aVal) {
      aSlider.addEventListener('input', (e) => {
        this.a = parseFloat(e.target.value);
        aVal.textContent = this.a.toFixed(1) + ' m/s²';
        if (!this.isRunning) this.reset();
      });
    }

    const btnStart = document.getElementById('sim1-start');
    const btnReset = document.getElementById('sim1-reset');

    if (btnStart) {
      btnStart.addEventListener('click', () => {
        if (this.isRunning) {
          this.pause();
          btnStart.innerHTML = '<i class="lucide-play mr-1"></i> Tiếp tục';
        } else {
          this.start();
          btnStart.innerHTML = '<i class="lucide-pause mr-1"></i> Tạm dừng';
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.reset();
        if (btnStart) btnStart.innerHTML = '<i class="lucide-play mr-1"></i> Bắt đầu chạy';
      });
    }

    window.addEventListener('resize', () => this.draw());
  }

  start() {
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    requestAnimationFrame((ts) => this.loop(ts));
  }

  pause() {
    this.isRunning = false;
  }

  reset() {
    this.isRunning = false;
    this.t = 0;
    this.history = [{ t: 0, x: 0, v: this.v0 }];
    this.updateReadouts(0, 0, this.v0);
    this.draw();
  }

  loop(timestamp) {
    if (!this.isRunning) return;
    const dt = (timestamp - this.lastFrameTime) / 1000;
    this.lastFrameTime = timestamp;

    if (dt > 0 && dt < 0.1) {
      this.t += dt;
      const curV = this.v0 + this.a * this.t;
      const curX = this.v0 * this.t + 0.5 * this.a * this.t * this.t;
      
      this.history.push({ t: this.t, x: Math.max(0, curX), v: curV });
      this.updateReadouts(this.t, curX, curV);

      if (curV <= 0 && this.a < 0 && this.v0 > 0) {
        // Stopped after decelerating
        this.pause();
        const btnStart = document.getElementById('sim1-start');
        if (btnStart) btnStart.innerHTML = '<i class="lucide-rotate-ccw mr-1"></i> Đã dừng lại';
      }

      if (this.t >= this.maxT) {
        this.pause();
      }
    }

    this.draw();
    if (this.isRunning) {
      requestAnimationFrame((ts) => this.loop(ts));
    }
  }

  updateReadouts(t, x, v) {
    const tEl = document.getElementById('sim1-t-disp');
    const xEl = document.getElementById('sim1-x-disp');
    const vEl = document.getElementById('sim1-v-disp');
    if (tEl) tEl.textContent = t.toFixed(2) + ' s';
    if (xEl) xEl.textContent = Math.max(0, x).toFixed(1) + ' m';
    if (vEl) vEl.textContent = Math.max(0, v).toFixed(2) + ' m/s';
  }

  draw() {
    if (!this.canvas) return;
    const w = this.canvas.width = this.canvas.clientWidth;
    const h = this.canvas.height = this.canvas.clientHeight || 280;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    // Track lane
    const laneY = 90;
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(0, laneY - 40, w, 70);

    // Track line & ruler marks
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(20, laneY + 20);
    ctx.lineTo(w - 20, laneY + 20);
    ctx.stroke();

    const curX = this.history[this.history.length - 1]?.x || 0;
    const maxVisibleX = Math.max(100, curX * 1.25);
    const pxPerMeter = (w - 80) / maxVisibleX;

    // Tick marks
    ctx.fillStyle = '#64748b';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    const step = maxVisibleX > 200 ? 50 : (maxVisibleX > 80 ? 20 : 10);
    for (let meter = 0; meter <= maxVisibleX; meter += step) {
      const rx = 40 + meter * pxPerMeter;
      ctx.beginPath();
      ctx.moveTo(rx, laneY + 15);
      ctx.lineTo(rx, laneY + 25);
      ctx.stroke();
      ctx.fillText(meter + 'm', rx, laneY + 38);
    }

    // Car representation
    const carPx = 40 + curX * pxPerMeter;
    this.drawCar(ctx, carPx, laneY);

    // Mini Real-time Graph at bottom
    this.drawMiniGraph(ctx, w, h);
  }

  drawCar(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);

    // Car Body
    ctx.fillStyle = '#4f46e5';
    ctx.beginPath();
    ctx.roundRect(-22, -22, 44, 20, [4, 4, 2, 2]);
    ctx.fill();

    // Car Roof
    ctx.fillStyle = '#6366f1';
    ctx.beginPath();
    ctx.roundRect(-12, -34, 24, 14, [4, 4, 0, 0]);
    ctx.fill();

    // Window
    ctx.fillStyle = '#c7d2fe';
    ctx.fillRect(-8, -31, 16, 9);

    // Wheels
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(-14, 0, 6, 0, Math.PI * 2);
    ctx.arc(14, 0, 6, 0, Math.PI * 2);
    ctx.fill();

    // Hubcaps
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.arc(-14, 0, 2.5, 0, Math.PI * 2);
    ctx.arc(14, 0, 2.5, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  drawMiniGraph(ctx, w, h) {
    const graphY = 160;
    const graphH = h - graphY - 25;
    const graphW = (w - 70) / 2;

    // Graph 1: v - t
    this.plotCurve(ctx, 40, graphY, graphW, graphH, 'Đồ thị v - t', 'v (m/s)', 't (s)', 
      this.history.map(p => ({ x: p.t, y: p.v })), '#0284c7', 0, this.maxT, 0, Math.max(25, this.v0 + Math.max(0, this.a * this.maxT)));

    // Graph 2: d - t
    this.plotCurve(ctx, 60 + graphW, graphY, graphW, graphH, 'Đồ thị d - t', 'd (m)', 't (s)', 
      this.history.map(p => ({ x: p.t, y: p.x })), '#10b981', 0, this.maxT, 0, Math.max(100, (this.history[this.history.length-1]?.x || 50) * 1.2));
  }

  plotCurve(ctx, ox, oy, gw, gh, title, yLabel, xLabel, points, color, xMin, xMax, yMin, yMax) {
    ctx.save();
    // Background box
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(ox, oy, gw, gh);
    ctx.strokeStyle = '#e2e8f0';
    ctx.strokeRect(ox, oy, gw, gh);

    // Title
    ctx.fillStyle = '#334155';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(title, ox + 6, oy + 14);

    // Axes
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(ox, oy + gh);
    ctx.lineTo(ox + gw, oy + gh);
    ctx.moveTo(ox, oy);
    ctx.lineTo(ox, oy + gh);
    ctx.stroke();

    if (points.length < 2) {
      ctx.restore();
      return;
    }

    // Plot Points
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    points.forEach((p, idx) => {
      const px = ox + ((p.x - xMin) / (xMax - xMin || 1)) * gw;
      const py = oy + gh - ((p.y - yMin) / (yMax - yMin || 1)) * gh;
      if (idx === 0) ctx.moveTo(px, Math.min(oy + gh, Math.max(oy, py)));
      else ctx.lineTo(px, Math.min(oy + gh, Math.max(oy, py)));
    });
    ctx.stroke();

    ctx.restore();
  }
}

class FreeFallSimulation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.height = 30; // meters
    this.g = 9.8;     // m/s^2
    this.environment = 'air'; // 'air' or 'vacuum'
    this.t = 0;
    this.isRunning = false;
    this.lastFrameTime = 0;

    // Objects: Ball (steel) and Feather
    this.ball = { y: 0, v: 0, m: 0.1, cd: 0.47, r: 0.02, hitTime: null };
    this.feather = { y: 0, v: 0, m: 0.005, cd: 1.2, r: 0.05, hitTime: null };

    this.initEvents();
    this.reset();
  }

  initEvents() {
    const hSlider = document.getElementById('sim2-h');
    const hVal = document.getElementById('sim2-h-val');
    const envSelect = document.getElementById('sim2-env');

    if (hSlider && hVal) {
      hSlider.addEventListener('input', (e) => {
        this.height = parseFloat(e.target.value);
        hVal.textContent = this.height + ' m';
        if (!this.isRunning) this.reset();
      });
    }

    if (envSelect) {
      envSelect.addEventListener('change', (e) => {
        this.environment = e.target.value;
        if (!this.isRunning) this.reset();
      });
    }

    const btnDrop = document.getElementById('sim2-drop');
    const btnReset = document.getElementById('sim2-reset');

    if (btnDrop) {
      btnDrop.addEventListener('click', () => {
        if (!this.isRunning) {
          this.reset();
          this.start();
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.reset();
      });
    }

    window.addEventListener('resize', () => this.draw());
  }

  start() {
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    requestAnimationFrame((ts) => this.loop(ts));
  }

  reset() {
    this.isRunning = false;
    this.t = 0;
    this.ball = { y: 0, v: 0, hitTime: null, hitSpeed: null };
    this.feather = { y: 0, v: 0, hitTime: null, hitSpeed: null };
    this.updateStats();
    this.draw();
  }

  loop(timestamp) {
    if (!this.isRunning) return;
    const dt = Math.min((timestamp - this.lastFrameTime) / 1000, 0.03);
    this.lastFrameTime = timestamp;

    this.t += dt;

    // Simulate Ball
    if (this.ball.y < this.height) {
      const dragAcc = this.environment === 'vacuum' ? 0 : 0.02 * this.ball.v * this.ball.v;
      const a = Math.max(0, this.g - dragAcc);
      this.ball.v += a * dt;
      this.ball.y += this.ball.v * dt;
      if (this.ball.y >= this.height) {
        this.ball.y = this.height;
        this.ball.hitTime = this.t;
        this.ball.hitSpeed = this.ball.v;
      }
    }

    // Simulate Feather
    if (this.feather.y < this.height) {
      const dragAcc = this.environment === 'vacuum' ? 0 : 1.6 * this.feather.v * this.feather.v;
      const a = Math.max(0, this.g - dragAcc);
      this.feather.v += a * dt;
      this.feather.y += this.feather.v * dt;
      if (this.feather.y >= this.height) {
        this.feather.y = this.height;
        this.feather.hitTime = this.t;
        this.feather.hitSpeed = this.feather.v;
      }
    }

    this.updateStats();
    this.draw();

    if (this.ball.y >= this.height && this.feather.y >= this.height) {
      this.isRunning = false;
    } else {
      requestAnimationFrame((ts) => this.loop(ts));
    }
  }

  updateStats() {
    const ballTimeEl = document.getElementById('sim2-ball-time');
    const featherTimeEl = document.getElementById('sim2-feather-time');
    const theoreticalTimeEl = document.getElementById('sim2-theory-time');

    const theoryT = Math.sqrt((2 * this.height) / this.g);
    if (theoreticalTimeEl) theoreticalTimeEl.textContent = theoryT.toFixed(3) + ' s';

    if (ballTimeEl) {
      ballTimeEl.textContent = this.ball.hitTime ? this.ball.hitTime.toFixed(3) + ' s' : this.t.toFixed(3) + ' s';
    }
    if (featherTimeEl) {
      featherTimeEl.textContent = this.feather.hitTime ? this.feather.hitTime.toFixed(3) + ' s' : this.t.toFixed(3) + ' s';
    }
  }

  draw() {
    if (!this.canvas) return;
    const w = this.canvas.width = this.canvas.clientWidth;
    const h = this.canvas.height = this.canvas.clientHeight || 280;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    const tubeW = 80;
    const tubeH = h - 60;
    const startY = 30;

    // Tube 1: Ball
    const x1 = w * 0.3 - tubeW / 2;
    this.drawTube(ctx, x1, startY, tubeW, tubeH, 'Viên bi thép');

    // Tube 2: Feather
    const x2 = w * 0.7 - tubeW / 2;
    this.drawTube(ctx, x2, startY, tubeW, tubeH, 'Lông chim');

    // Draw objects inside tubes
    const ballProgress = Math.min(1, this.ball.y / this.height);
    const ballPx = startY + ballProgress * (tubeH - 30);
    this.drawBall(ctx, x1 + tubeW / 2, ballPx);

    const featherProgress = Math.min(1, this.feather.y / this.height);
    const featherPx = startY + featherProgress * (tubeH - 30);
    this.drawFeather(ctx, x2 + tubeW / 2, featherPx);
  }

  drawTube(ctx, x, y, w, h, label) {
    ctx.save();
    // Glass tube effect
    ctx.fillStyle = this.environment === 'vacuum' ? 'rgba(224, 242, 254, 0.4)' : 'rgba(241, 245, 249, 0.6)';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(x, y, w, h, 8);
    ctx.fill();
    ctx.stroke();

    // Floor
    ctx.fillStyle = '#64748b';
    ctx.fillRect(x - 5, y + h, w + 10, 8);

    // Label
    ctx.fillStyle = '#1e293b';
    ctx.font = '12px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(label, x + w / 2, y + h + 22);

    ctx.restore();
  }

  drawBall(ctx, cx, cy) {
    ctx.save();
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(cx, cy, 11, 0, Math.PI * 2);
    ctx.fill();

    // Highlight
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.arc(cx - 3, cy - 3, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  drawFeather(ctx, cx, cy) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.strokeStyle = '#ef4444';
    ctx.fillStyle = '#f87171';
    ctx.lineWidth = 1.5;

    // Feather quill & vane
    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.quadraticCurveTo(8, 0, 0, 14);
    ctx.quadraticCurveTo(-8, 0, 0, -12);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, -12);
    ctx.lineTo(0, 16);
    ctx.strokeStyle = '#b91c1c';
    ctx.stroke();

    ctx.restore();
  }
}

class ProjectileSimulation {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.v0 = 25;       // m/s
    this.angle = 45;    // degrees (0 for horizontal)
    this.h0 = 10;       // initial height (m)
    this.g = 9.8;       // m/s^2

    this.t = 0;
    this.isRunning = false;
    this.lastFrameTime = 0;
    this.trajectory = [];

    this.initEvents();
    this.calculateTheoretical();
    this.reset();
  }

  initEvents() {
    const v0Slider = document.getElementById('sim3-v0');
    const angleSlider = document.getElementById('sim3-angle');
    const h0Slider = document.getElementById('sim3-h0');

    const v0Val = document.getElementById('sim3-v0-val');
    const angleVal = document.getElementById('sim3-angle-val');
    const h0Val = document.getElementById('sim3-h0-val');

    if (v0Slider && v0Val) {
      v0Slider.addEventListener('input', (e) => {
        this.v0 = parseFloat(e.target.value);
        v0Val.textContent = this.v0 + ' m/s';
        this.calculateTheoretical();
        if (!this.isRunning) this.reset();
      });
    }

    if (angleSlider && angleVal) {
      angleSlider.addEventListener('input', (e) => {
        this.angle = parseFloat(e.target.value);
        angleVal.textContent = this.angle + '°' + (this.angle === 0 ? ' (Ném ngang)' : (this.angle === 45 ? ' (Tầm xa max)' : ''));
        this.calculateTheoretical();
        if (!this.isRunning) this.reset();
      });
    }

    if (h0Slider && h0Val) {
      h0Slider.addEventListener('input', (e) => {
        this.h0 = parseFloat(e.target.value);
        h0Val.textContent = this.h0 + ' m';
        this.calculateTheoretical();
        if (!this.isRunning) this.reset();
      });
    }

    const btnFire = document.getElementById('sim3-fire');
    const btnReset = document.getElementById('sim3-reset');

    if (btnFire) {
      btnFire.addEventListener('click', () => {
        this.reset();
        this.start();
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        this.reset();
      });
    }

    window.addEventListener('resize', () => this.draw());
  }

  calculateTheoretical() {
    const rad = (this.angle * Math.PI) / 180;
    const v0x = this.v0 * Math.cos(rad);
    const v0y = this.v0 * Math.sin(rad);

    // Max height H above ground
    const hMax = this.h0 + (v0y > 0 ? (v0y * v0y) / (2 * this.g) : 0);

    // Time to land: y = h0 + v0y*t - 0.5*g*t^2 = 0 => 0.5*g*t^2 - v0y*t - h0 = 0
    const a = 0.5 * this.g;
    const b = -v0y;
    const c = -this.h0;
    const delta = b * b - 4 * a * c;
    const tFlight = delta >= 0 ? (-b + Math.sqrt(delta)) / (2 * a) : 0;
    const lMax = v0x * tFlight;

    const hMaxEl = document.getElementById('sim3-hmax');
    const lMaxEl = document.getElementById('sim3-lmax');
    const tFlightEl = document.getElementById('sim3-tflight');

    if (hMaxEl) hMaxEl.textContent = hMax.toFixed(2) + ' m';
    if (lMaxEl) lMaxEl.textContent = lMax.toFixed(2) + ' m';
    if (tFlightEl) tFlightEl.textContent = tFlight.toFixed(2) + ' s';
  }

  start() {
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    requestAnimationFrame((ts) => this.loop(ts));
  }

  reset() {
    this.isRunning = false;
    this.t = 0;
    this.trajectory = [];
    this.draw();
  }

  loop(timestamp) {
    if (!this.isRunning) return;
    const dt = Math.min((timestamp - this.lastFrameTime) / 1000, 0.04);
    this.lastFrameTime = timestamp;

    this.t += dt * 1.2; // slight speedup for smooth view

    const rad = (this.angle * Math.PI) / 180;
    const v0x = this.v0 * Math.cos(rad);
    const v0y = this.v0 * Math.sin(rad);

    const x = v0x * this.t;
    const y = this.h0 + v0y * this.t - 0.5 * this.g * this.t * this.t;

    if (y <= 0 && this.t > 0.05) {
      // Impact
      this.trajectory.push({ x, y: 0 });
      this.isRunning = false;
    } else {
      this.trajectory.push({ x, y: Math.max(0, y) });
      requestAnimationFrame((ts) => this.loop(ts));
    }

    this.draw();
  }

  draw() {
    if (!this.canvas) return;
    const w = this.canvas.width = this.canvas.clientWidth;
    const h = this.canvas.height = this.canvas.clientHeight || 300;
    const ctx = this.ctx;

    ctx.clearRect(0, 0, w, h);

    const groundY = h - 35;
    const originX = 40;

    // Auto-scale
    const rad = (this.angle * Math.PI) / 180;
    const estL = Math.max(40, this.v0 * Math.cos(rad) * 4);
    const estH = Math.max(20, this.h0 + 25);
    const scaleX = (w - 80) / estL;
    const scaleY = (groundY - 30) / estH;
    const scale = Math.min(scaleX, scaleY);

    // Ground line
    ctx.fillStyle = '#e2e8f0';
    ctx.fillRect(0, groundY, w, 35);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, groundY);
    ctx.lineTo(w, groundY);
    ctx.stroke();

    // Launcher cliff / pedestal
    const cliffH = this.h0 * scale;
    if (this.h0 > 0) {
      ctx.fillStyle = '#cbd5e1';
      ctx.fillRect(originX - 15, groundY - cliffH, 25, cliffH);
      ctx.strokeStyle = '#64748b';
      ctx.strokeRect(originX - 15, groundY - cliffH, 25, cliffH);
    }

    // Cannon / Launcher
    const launchX = originX + 5;
    const launchY = groundY - cliffH;

    ctx.save();
    ctx.translate(launchX, launchY);
    ctx.rotate((-this.angle * Math.PI) / 180);
    ctx.fillStyle = '#334155';
    ctx.fillRect(-6, -6, 26, 12);
    ctx.restore();

    // Draw Trajectory curve
    if (this.trajectory.length > 0) {
      ctx.strokeStyle = '#6366f1';
      ctx.lineWidth = 2.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      this.trajectory.forEach((p, idx) => {
        const px = launchX + p.x * scale;
        const py = groundY - p.y * scale;
        if (idx === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      });
      ctx.stroke();
      ctx.setLineDash([]);

      // Current projectile position
      const curr = this.trajectory[this.trajectory.length - 1];
      const curPx = launchX + curr.x * scale;
      const curPy = groundY - curr.y * scale;

      ctx.fillStyle = '#e11d48';
      ctx.beginPath();
      ctx.arc(curPx, curPy, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }
}

// Global instances holder
window.PhysicsSims = {
  motion: null,
  freefall: null,
  projectile: null,
  init() {
    this.motion = new MotionSimulation('canvas-motion');
    this.freefall = new FreeFallSimulation('canvas-freefall');
    this.projectile = new ProjectileSimulation('canvas-projectile');
  }
};

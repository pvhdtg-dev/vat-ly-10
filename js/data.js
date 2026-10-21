/**
 * Dữ liệu Lý thuyết & Ngân hàng bài tập Vật Lí 10 - Chương II: Động Học
 * Sách giáo khoa: Kết Nối Tri Thức Với Cuộc Sống (Trang 20 - 54)
 */

const LESSONS_DATA = [
  {
    id: "bai-4",
    number: 4,
    title: "Độ dịch chuyển và quãng đường đi được",
    badge: "Kiến thức nền tảng",
    pageRange: "Trang 21 - 25",
    description: "Khái niệm chất điểm, hệ quy chiếu, sự khác biệt giữa độ dịch chuyển và quãng đường, quy tắc tổng hợp vectơ độ dịch chuyển.",
    objectives: [
      "Xác định được vị trí của một vật chuyển động trên hệ tọa độ và hệ quy chiếu.",
      "Phân biệt được độ dịch chuyển và quãng đường đi được.",
      "Biết cách tính độ dịch chuyển tổng hợp bằng quy tắc cộng vectơ.",
      "Vận dụng tính quãng đường và độ dịch chuyển trong các tình huống thực tiễn."
    ],
    sections: [
      {
        title: "I. Vị trí của vật chuyển động tại các thời điểm",
        content: `
          <p class="mb-3">Khi một vật chuyển động, vị trí của vật so với vật được chọn làm mốc thay đổi theo thời gian.</p>
          <div class="bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
            <h4 class="font-bold text-blue-900 dark:text-blue-300">1. Khái niệm Chất điểm:</h4>
            <p class="text-sm mt-1 text-blue-800 dark:text-blue-200">Một vật chuyển động được coi là <strong>chất điểm</strong> nếu kích thước của nó rất nhỏ so với quãng đường đi được hoặc khoảng cách mà ta xét.</p>
          </div>
          <div class="bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 p-4 rounded-r-lg mb-4">
            <h4 class="font-bold text-amber-900 dark:text-amber-300">2. Hệ quy chiếu bao gồm:</h4>
            <ul class="list-disc list-inside text-sm mt-1 space-y-1 text-amber-800 dark:text-amber-200">
              <li><strong>Vật mốc</strong> và một <strong>hệ tọa độ</strong> gắn với vật mốc (thường dùng hệ tọa độ vuông góc Oxy hoặc tọa độ địa lí Bắc - Nam - Đông - Tây).</li>
              <li><strong>Mốc thời gian</strong> (thời điểm t = 0) và một chiếc <strong>đồng hồ</strong> để đo khoảng thời gian trôi qua.</li>
            </ul>
          </div>
        `
      },
      {
        title: "II. Độ dịch chuyển là gì?",
        content: `
          <p class="mb-3">Độ dịch chuyển là một đại lượng vectơ, ký hiệu là <span data-math="inline">\\vec{d}</span>:</p>
          <ul class="list-disc list-inside space-y-2 mb-4 text-slate-700 dark:text-slate-300">
            <li><strong>Gốc:</strong> Đặt tại vị trí ban đầu của vật.</li>
            <li><strong>Ngọn (mũi tên):</strong> Hướng tới vị trí cuối cùng của vật.</li>
            <li><strong>Độ dài (độ lớn):</strong> Tỉ lệ với khoảng cách thẳng nối điểm đầu và điểm cuối.</li>
            <li><strong>Ý nghĩa:</strong> Cho biết cả độ dài và hướng của sự thay đổi vị trí của vật.</li>
          </ul>
        `
      },
      {
        title: "III. So sánh Phân biệt: Quãng đường (s) và Độ dịch chuyển (d)",
        content: `
          <div class="overflow-x-auto my-4">
            <table class="w-full text-sm border-collapse border border-slate-300 dark:border-slate-700">
              <thead>
                <tr class="bg-indigo-100 dark:bg-indigo-950 text-indigo-950 dark:text-indigo-200">
                  <th class="border border-slate-300 dark:border-slate-700 p-3 text-left">Đặc điểm</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-3 text-left">Quãng đường đi được (s)</th>
                  <th class="border border-slate-300 dark:border-slate-700 p-3 text-left">Độ dịch chuyển (d)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="font-medium p-3">Bản chất vật lý</td>
                  <td class="p-3">Đại lượng <strong>vô hướng</strong></td>
                  <td class="p-3">Đại lượng <strong>vectơ</strong> (<span data-math="inline">\\vec{d}</span>)</td>
                </tr>
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="font-medium p-3">Định nghĩa</td>
                  <td class="p-3">Độ dài toàn bộ quỹ đạo thực tế vật đã đi qua</td>
                  <td class="p-3">Vectơ nối vị trí đầu và vị trí cuối</td>
                </tr>
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="font-medium p-3">Dấu và độ lớn</td>
                  <td class="p-3">Luôn dương hoặc bằng 0 (<span data-math="inline">s \\ge 0</span>)</td>
                  <td class="p-3">Có thể <strong>dương, âm hoặc bằng 0</strong> tuỳ trục tọa độ</td>
                </tr>
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="font-medium p-3">Khi nào <span data-math="inline">d = s</span>?</td>
                  <td colspan="2" class="p-3 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 font-semibold">
                    Khi và chỉ khi vật <strong>chuyển động thẳng</strong> và <strong>không đổi chiều</strong>.
                  </td>
                </tr>
                <tr class="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td class="font-medium p-3">Vật quay lại điểm xuất phát</td>
                  <td class="p-3"><span data-math="inline">s > 0</span> (tổng vòng đi)</td>
                  <td class="p-3 font-bold text-rose-600"><span data-math="inline">d = 0</span> (vị trí đầu trùng vị trí cuối)</td>
                </tr>
              </tbody>
            </table>
          </div>
        `
      },
      {
        title: "IV. Tổng hợp độ dịch chuyển",
        content: `
          <p class="mb-3">Khi một vật thực hiện liên tiếp các độ dịch chuyển <span data-math="inline">\\vec{d}_1, \\vec{d}_2</span>, độ dịch chuyển tổng hợp là:</p>
          <div class="text-center my-3 p-3 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-lg font-bold text-indigo-700 dark:text-indigo-300">
            <span data-math="display">\\vec{d} = \\vec{d}_1 + \\vec{d}_2</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <span class="font-bold text-emerald-600">Cùng hướng:</span>
              <p class="text-sm mt-1"><span data-math="inline">d = d_1 + d_2</span></p>
            </div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <span class="font-bold text-rose-600">Ngược hướng:</span>
              <p class="text-sm mt-1"><span data-math="inline">d = |d_1 - d_2|</span></p>
            </div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
              <span class="font-bold text-indigo-600">Vuông góc:</span>
              <p class="text-sm mt-1"><span data-math="inline">d = \\sqrt{d_1^2 + d_2^2}</span></p>
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Độ dịch chuyển tổng hợp (vectơ)", latex: "\\vec{d} = \\vec{d}_1 + \\vec{d}_2", note: "Quy tắc tam giác hoặc hình bình hành" },
      { name: "Hai độ dịch chuyển vuông góc", latex: "d = \\sqrt{d_1^2 + d_2^2}", note: "Theo định lí Pythagore" },
      { name: "Góc phương vị", latex: "\\tan\\alpha = \\frac{d_2}{d_1}", note: "Góc lệch so với phương ban đầu" }
    ],
    sgkHighlights: [
      "Bài toán ngã tư đường: Ô tô đi 10s với v = 36 km/h = 10 m/s => Quãng đường s = 100 m. Nếu rẽ Bắc thì vị trí ở điểm B cách O 100m.",
      "Bài toán bạn A đi học: Đi từ nhà (0m) qua trạm xăng (400m), đến siêu thị (800m), rồi quay về nhà cất đồ, sau đó mới đi đến trường (1200m). Quãng đường và độ dịch chuyển khác nhau rõ rệt.",
      "Bài toán bơi qua sông: Người bơi vuông góc bờ rộng 50m, nước trôi 50m xuôi dòng => Độ dịch chuyển là d = √(50² + 50²) = 70,7m theo hướng đông nam."
    ]
  },
  {
    id: "bai-5",
    number: 5,
    title: "Tốc độ và vận tốc",
    badge: "Trọng tâm thi",
    pageRange: "Trang 26 - 29",
    description: "Tốc độ trung bình, tốc độ tức thời, vận tốc trung bình, vectơ vận tốc và công thức cộng vận tốc.",
    objectives: [
      "Định nghĩa được tốc độ trung bình và tốc độ tức thời.",
      "Hiểu rõ sự khác biệt giữa tốc độ và vận tốc.",
      "Nắm vững tính chất vectơ của vận tốc.",
      "Vận dụng thành thạo công thức cộng vận tốc trong chuyển động tương đối."
    ],
    sections: [
      {
        title: "I. Tốc độ",
        content: `
          <div class="space-y-3">
            <p><strong>1. Tốc độ trung bình:</strong> Là thương số giữa quãng đường đi được và thời gian dùng để đi hết quãng đường đó.</p>
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-center font-bold">
              <span data-math="display">v = \\frac{s}{t} = \\frac{\\Delta s}{\\Delta t}</span>
            </div>
            <p class="text-sm text-slate-600 dark:text-slate-400">Đặc trưng cho mức độ nhanh hay chậm của chuyển động. Luôn mang giá trị dương.</p>
            <p><strong>2. Tốc độ tức thời:</strong> Là tốc độ tại một thời điểm xác định. Dụng cụ đo trực tiếp trên xe là <strong>tốc kế</strong> (đồng hồ tốc độ).</p>
          </div>
        `
      },
      {
        title: "II. Vận tốc",
        content: `
          <div class="space-y-3">
            <p><strong>1. Vận tốc trung bình:</strong> Là đại lượng vectơ được xác định bằng thương số giữa độ dịch chuyển và khoảng thời gian thực hiện độ dịch chuyển đó:</p>
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg text-center font-bold">
              <span data-math="display">\\vec{v} = \\frac{\\vec{d}}{t} = \\frac{\\Delta \\vec{d}}{\\Delta t}</span>
            </div>
            <p><strong>2. Vectơ vận tốc:</strong></p>
            <ul class="list-disc list-inside text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Gốc đặt trên vật chuyển động.</li>
              <li>Hướng trùng với hướng của vectơ độ dịch chuyển.</li>
              <li>Độ dài tỉ lệ với độ lớn của vận tốc.</li>
            </ul>
            <div class="bg-amber-50 dark:bg-amber-950/40 p-3 rounded-lg border-l-4 border-amber-500 text-sm">
              <strong>Lưu ý cốt lõi:</strong> Khi vật chuyển động thẳng không đổi chiều theo chiều dương, tốc độ trung bình và vận tốc có độ lớn bằng nhau: <span data-math="inline">v = |\\vec{v}|</span>. Khi vật đi ngược chiều dương, vận tốc mang giá trị âm (<span data-math="inline">v < 0</span>).
            </div>
          </div>
        `
      },
      {
        title: "III. Tổng hợp vận tốc (Công thức cộng vận tốc)",
        content: `
          <p class="mb-3">Xét vật (1) chuyển động so với hệ quy chiếu chuyển động (2), và (2) chuyển động so với hệ quy chiếu đứng yên (3):</p>
          <div class="p-4 bg-purple-50 dark:bg-purple-950/40 rounded-lg text-center font-bold text-lg text-purple-900 dark:text-purple-200">
            <span data-math="display">\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}</span>
          </div>
          <ul class="list-disc list-inside text-sm space-y-2 mt-3 text-slate-700 dark:text-slate-300">
            <li><span data-math="inline">\\vec{v}_{1,3}</span>: Vận tốc <strong>tuyệt đối</strong> (vật đối với hệ đứng yên, ví dụ: thuyền đối với bờ).</li>
            <li><span data-math="inline">\\vec{v}_{1,2}</span>: Vận tốc <strong>tương đối</strong> (vật đối với hệ chuyển động, ví dụ: thuyền đối với dòng nước).</li>
            <li><span data-math="inline">\\vec{v}_{2,3}</span>: Vận tốc <strong>kéo theo</strong> (hệ chuyển động đối với hệ đứng yên, ví dụ: dòng nước đối với bờ).</li>
          </ul>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-3 text-sm">
            <div class="p-2.5 bg-slate-100 dark:bg-slate-800 rounded">
              <strong>Xuôi dòng / Cùng hướng:</strong><br><span data-math="inline">v_{1,3} = v_{1,2} + v_{2,3}</span>
            </div>
            <div class="p-2.5 bg-slate-100 dark:bg-slate-800 rounded">
              <strong>Ngược dòng / Ngược hướng:</strong><br><span data-math="inline">v_{1,3} = |v_{1,2} - v_{2,3}|</span>
            </div>
            <div class="p-2.5 bg-slate-100 dark:bg-slate-800 rounded">
              <strong>Vuông góc:</strong><br><span data-math="inline">v_{1,3} = \\sqrt{v_{1,2}^2 + v_{2,3}^2}</span>
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Tốc độ trung bình", latex: "v = \\frac{s}{t}", note: "s là quãng đường (m), t là thời gian (s)" },
      { name: "Vận tốc trung bình", latex: "\\vec{v} = \\frac{\\vec{d}}{t}", note: "d là độ dịch chuyển (m)" },
      { name: "Đổi đơn vị tốc độ", latex: "1\\text{ m/s} = 3,6\\text{ km/h}", note: "Nhân 3,6 khi đổi từ m/s sang km/h" },
      { name: "Công thức cộng vận tốc", latex: "\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}", note: "Quy tắc cộng vectơ trong hệ quy chiếu" }
    ],
    sgkHighlights: [
      "Kỉ lục chạy của VĐV Nam Phi: cự li 100m mất 9,98s; 200m mất 19,94s; 400m mất 43,45s.",
      "Bài toán hành khách đi trên tàu hoả đang chạy 36 km/h (= 10 m/s), người đi với v = 1 m/s về phía đầu tàu thì v so với đường ray = 10 + 1 = 11 m/s; nếu đi về cuối tàu thì v = 10 - 1 = 9 m/s.",
      "Ca nô chạy trên sông: ca nô đi xuôi dòng hết 1 giờ, đi ngược dòng hết 2 giờ; vận tốc ca nô đối với nước là 21,5 km/h."
    ]
  },
  {
    id: "bai-6",
    number: 6,
    title: "Thực hành: Đo tốc độ của vật chuyển động",
    badge: "Thực hành thí nghiệm",
    pageRange: "Trang 30 - 33",
    description: "Sử dụng đồng hồ hiện số MC-964, cổng quang điện, máng nghiêng và xử lý sai số thí nghiệm.",
    objectives: [
      "Mô tả và sử dụng được đồng hồ đo thời gian hiện số MC-964 và cổng quang điện.",
      "Thiết kế và thực hiện được phương án đo tốc độ trung bình và tốc độ tức thời.",
      "Biết lập bảng số liệu, tính giá trị trung bình và sai số của phép đo."
    ],
    sections: [
      {
        title: "I. Thiết bị thí nghiệm chính",
        content: `
          <ul class="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Đồng hồ hiện số MC-964:</strong> Có độ chính xác đến 0,001 s. Các chế độ hoạt động:
              <ul class="list-circle list-inside ml-5 mt-1 space-y-1">
                <li><code>MODE A</code>: Đo thời gian chắn cổng quang A (dùng đo tốc độ tức thời).</li>
                <li><code>MODE A ↔ B</code>: Đo khoảng thời gian vật đi từ cổng A đến cổng B (dùng đo tốc độ trung bình).</li>
                <li><code>RESET</code>: Đặt lại chỉ số đồng hồ về 0.000.</li>
              </ul>
            </li>
            <li><strong>Cổng quang điện:</strong> Phát chùm tia hồng ngoại. Khi vật đi qua chắn tia sáng, tín hiệu điện báo cho đồng hồ đếm hoặc dừng đếm.</li>
            <li><strong>Máng nghiêng hợp kim nhôm:</strong> Có thước đo chia độ chính xác (ĐCNN = 1 mm).</li>
            <li><strong>Thước kẹp:</strong> Dùng để đo đường kính d của viên bi thép.</li>
          </ul>
        `
      },
      {
        title: "II. Phương pháp đo và Xử lý số liệu",
        content: `
          <div class="space-y-3">
            <div class="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-indigo-600 dark:text-indigo-400">1. Đo tốc độ trung bình qua 2 cổng quang E và F:</h5>
              <p class="text-sm mt-1">Đo khoảng cách <span data-math="inline">s = EF</span> bằng thước trên máng. Đo thời gian <span data-math="inline">t</span> từ E sang F (chế độ A ↔ B).</p>
              <p class="text-sm font-semibold mt-1">Công thức: <span data-math="inline">v_{tb} = \\frac{s}{t}</span></p>
            </div>
            <div class="p-3 bg-slate-50 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700">
              <h5 class="font-bold text-indigo-600 dark:text-indigo-400">2. Đo tốc độ tức thời tại một cổng quang:</h5>
              <p class="text-sm mt-1">Dùng thước kẹp đo đường kính viên bi <span data-math="inline">d</span>. Cho bi qua cổng quang ở chế độ MODE A đo thời gian chắn sáng <span data-math="inline">\\Delta t</span>.</p>
              <p class="text-sm font-semibold mt-1">Công thức: <span data-math="inline">v_t = \\frac{d}{\\Delta t}</span></p>
            </div>
            <div class="p-3 bg-amber-50 dark:bg-amber-950/40 rounded-lg border border-amber-200 dark:border-amber-800 text-sm">
              <h5 class="font-bold text-amber-800 dark:text-amber-300">3. Công thức sai số phép đo:</h5>
              <p class="mt-1">Sai số tỉ đối: <span data-math="inline">\\delta v = \\frac{\\Delta v}{\\bar{v}} = \\frac{\\Delta s}{\\bar{s}} + \\frac{\\Delta t}{\\bar{t}}</span></p>
              <p class="mt-1">Sai số tuyệt đối: <span data-math="inline">\\Delta v = \\bar{v} \\times \\delta v</span></p>
              <p class="mt-1">Kết quả đo: <span data-math="inline">v = \\bar{v} \\pm \\Delta v</span> (kèm đơn vị).</p>
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Tốc độ trung bình thực hành", latex: "\\bar{v} = \\frac{\\bar{s}}{\\bar{t}}", note: "Giá trị trung bình nhiều lần đo" },
      { name: "Tốc độ tức thời thực hành", latex: "v_t = \\frac{d}{\\Delta t}", note: "d là đường kính vật chắn, Δt là thời gian chắn sáng" },
      { name: "Sai số tỉ đối của tốc độ", latex: "\\delta v = \\frac{\\Delta s}{\\bar{s}} + \\frac{\\Delta t}{\\bar{t}}", note: "Quy tắc cộng sai số tỉ đối đối với phép chia" }
    ],
    sgkHighlights: [
      "Đồng hồ cần rung (đồng hồ chấm kim): rung đều đặn 50 lần/giây, tạo ra các dấu chấm cách nhau 0,02s trên dải băng giấy.",
      "Sử dụng camera điện thoại thông minh quay video (30-60 hình/giây) và dùng phần mềm tracker phân tích toạ độ vật theo thời gian."
    ]
  },
  {
    id: "bai-7",
    number: 7,
    title: "Đồ thị độ dịch chuyển – thời gian",
    badge: "Phân tích đồ thị",
    pageRange: "Trang 34 - 36",
    description: "Cách vẽ và khai thác thông tin từ đồ thị d - t, xác định chiều chuyển động và tính vận tốc từ độ dốc.",
    objectives: [
      "Vẽ được đồ thị độ dịch chuyển - thời gian (d - t) cho chuyển động thẳng đều.",
      "Khai thác đồ thị d - t: nhận biết vị trí, thời điểm, chiều chuyển động và trạng thái dừng.",
      "Tính được vận tốc từ hệ số góc (độ dốc) của đồ thị d - t."
    ],
    sections: [
      {
        title: "I. Dạng đồ thị d - t trong chuyển động thẳng đều",
        content: `
          <p class="mb-3">Phương trình độ dịch chuyển: <span data-math="inline">d = v \\cdot t</span> (hàm bậc nhất dạng <span data-math="inline">y = ax</span>).</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg">
              <strong class="text-emerald-700 dark:text-emerald-300">Đường dốc lên (độ dốc > 0):</strong>
              <p class="mt-1">Vật chuyển động thẳng đều theo chiều dương (<span data-math="inline">v > 0</span>).</p>
            </div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg">
              <strong class="text-slate-700 dark:text-slate-300">Đoạn nằm ngang (độ dốc = 0):</strong>
              <p class="mt-1">Vị trí không thay đổi theo thời gian <span data-math="inline">\\implies</span> Vật đang <strong>đứng yên</strong> (<span data-math="inline">v = 0</span>).</p>
            </div>
            <div class="p-3 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-lg">
              <strong class="text-rose-700 dark:text-rose-300">Đường dốc xuống (độ dốc < 0):</strong>
              <p class="mt-1">Vật chuyển động thẳng đều theo chiều âm (<span data-math="inline">v < 0</span>, quay về gốc).</p>
            </div>
          </div>
        `
      },
      {
        title: "II. Vận tốc và Độ dốc (Hệ số góc)",
        content: `
          <p class="mb-3">Độ dốc của đường thẳng trên đồ thị độ dịch chuyển - thời gian chính là <strong>vận tốc</strong> của vật:</p>
          <div class="p-4 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-center font-bold text-lg text-indigo-800 dark:text-indigo-300">
            <span data-math="display">v = \\text{Độ dốc} = \\frac{\\Delta d}{\\Delta t} = \\frac{d_2 - d_1}{t_2 - t_1}</span>
          </div>
          <p class="text-sm mt-3 text-slate-700 dark:text-slate-300">
            Đường biểu diễn càng dốc đứng thì độ lớn vận tốc của vật càng lớn (chuyển động càng nhanh).
          </p>
        `
      }
    ],
    formulas: [
      { name: "Phương trình độ dịch chuyển thẳng đều", latex: "d = v \\cdot t", note: "Đồ thị qua gốc tọa độ O" },
      { name: "Tính vận tốc từ độ dốc đồ thị d-t", latex: "v = \\frac{d_2 - d_1}{t_2 - t_1}", note: "Δd chia cho Δt" }
    ],
    sgkHighlights: [
      "Bài toán người bơi trong bể bơi dài 50m (Hình 7.2 SGK): Trong 25s đầu bơi từ 0 đến 50m (v = 2 m/s); từ 25s đến 35s nghỉ (v = 0); từ 35s đến 60s bơi quay lại về 25m (v = -1 m/s).",
      "Ô tô đồ chơi chạy bằng pin: Bảng toạ độ theo thời gian và xác định tốc độ qua từng giai đoạn."
    ]
  },
  {
    id: "bai-8",
    number: 8,
    title: "Chuyển động biến đổi. Gia tốc",
    badge: "Khái niệm then chốt",
    pageRange: "Trang 37 - 39",
    description: "Khái niệm chuyển động biến đổi, định nghĩa gia tốc, bản chất vectơ của gia tốc và quy tắc dấu a và v.",
    objectives: [
      "Hiểu được thế nào là chuyển động biến đổi.",
      "Nêu được định nghĩa, công thức và đơn vị đo của gia tốc.",
      "Xác định được mối quan hệ giữa dấu của gia tốc a và vận tốc v trong chuyển động nhanh dần và chậm dần."
    ],
    sections: [
      {
        title: "I. Chuyển động biến đổi",
        content: `
          <p class="mb-2">Trong thực tế, rất ít khi vật thể giữ nguyên vận tốc. Một đoàn tàu khi khởi hành chạy nhanh dần, khi sắp vào ga chuyển động chậm dần. Một chuyển động có vận tốc thay đổi theo thời gian gọi là <strong>chuyển động biến đổi</strong>.</p>
        `
      },
      {
        title: "II. Khái niệm Gia tốc",
        content: `
          <p class="mb-3">Gia tốc là đại lượng vật lý đặc trưng cho sự <strong>thay đổi nhanh hay chậm của vận tốc</strong> theo thời gian:</p>
          <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg text-center font-bold">
            <span data-math="display">a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_t - v_0}{t - t_0}</span>
          </div>
          <p class="text-sm mt-2 text-slate-700 dark:text-slate-300">
            <strong>Đơn vị đo trong hệ SI:</strong> mét trên giây bình phương, ký hiệu là <span data-math="inline">\\text{m/s}^2</span> (hoặc <span data-math="inline">\\text{m}\\cdot\\text{s}^{-2}</span>).
          </p>
        `
      },
      {
        title: "III. Bản chất vectơ và Quy tắc dấu của Gia tốc",
        content: `
          <p class="mb-2">Gia tốc là một đại lượng vectơ: <span data-math="inline">\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}</span>.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-sm">
            <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg">
              <h5 class="font-bold text-emerald-800 dark:text-emerald-300 text-base mb-1">Chuyển động NHANH DẦN:</h5>
              <p>Vectơ gia tốc <span data-math="inline">\\vec{a}</span> <strong>cùng chiều</strong> với vectơ vận tốc <span data-math="inline">\\vec{v}</span>.</p>
              <div class="mt-2 font-mono font-bold text-emerald-700 dark:text-emerald-300 text-center bg-white dark:bg-slate-900 p-2 rounded">
                a và v CÙNG DẤU: a · v > 0
              </div>
            </div>
            <div class="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-800 rounded-lg">
              <h5 class="font-bold text-rose-800 dark:text-rose-300 text-base mb-1">Chuyển động CHẬM DẦN:</h5>
              <p>Vectơ gia tốc <span data-math="inline">\\vec{a}</span> <strong>ngược chiều</strong> với vectơ vận tốc <span data-math="inline">\\vec{v}</span>.</p>
              <div class="mt-2 font-mono font-bold text-rose-700 dark:text-rose-300 text-center bg-white dark:bg-slate-900 p-2 rounded">
                a và v TRÁI DẤU: a · v < 0
              </div>
            </div>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Công thức định nghĩa gia tốc", latex: "a = \\frac{\\Delta v}{\\Delta t} = \\frac{v_t - v_0}{t - t_0}", note: "Đơn vị: m/s²" },
      { name: "Vectơ gia tốc", latex: "\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}", note: "Cùng hướng với vectơ độ biến thiên vận tốc Δv" }
    ],
    sgkHighlights: [
      "Bài toán xe máy tăng tốc: Đang đi 10 m/s tăng lên 12 m/s sau 5s => a = (12 - 10)/5 = 0,4 m/s².",
      "Thời gian để xe dừng lại khi hãm phanh với gia tốc độ lớn 0,4 m/s²: v' = 0 => t' = (0 - 12)/(-0,4) = 30s.",
      "Con báo săn mồi: đang chạy 30 m/s giảm còn 9 m/s sau 3 giây => a = (9 - 30)/3 = -7 m/s²."
    ]
  },
  {
    id: "bai-9",
    number: 9,
    title: "Chuyển động thẳng biến đổi đều",
    badge: "Bài học cốt lõi",
    pageRange: "Trang 40 - 43",
    description: "Bộ 4 công thức kinh điển của chuyển động thẳng biến đổi đều, phân tích đồ thị v - t và cách giải bài toán chuyển động.",
    objectives: [
      "Nêu được định nghĩa chuyển động thẳng biến đổi đều.",
      "Thuộc và vận dụng linh hoạt 4 công thức cơ bản: vận tốc, độ dịch chuyển, công thức độc lập thời gian.",
      "Vẽ và suy ra thông tin từ đồ thị vận tốc - thời gian (v - t)."
    ],
    sections: [
      {
        title: "I. Định nghĩa",
        content: `
          <p class="mb-3">Chuyển động thẳng biến đổi đều là chuyển động thẳng có <strong>gia tốc không đổi theo thời gian</strong> (<span data-math="inline">a = \\text{hằng số}</span>).</p>
          <ul class="list-disc list-inside text-sm space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Chuyển động thẳng nhanh dần đều:</strong> Vận tốc có độ lớn tăng đều theo thời gian (<span data-math="inline">a \\cdot v > 0</span>).</li>
            <li><strong>Chuyển động thẳng chậm dần đều:</strong> Vận tốc có độ lớn giảm đều theo thời gian (<span data-math="inline">a \\cdot v < 0</span>).</li>
          </ul>
        `
      },
      {
        title: "II. Hệ thống 4 công thức kinh điển",
        content: `
          <div class="space-y-3">
            <div class="p-3 bg-indigo-50 dark:bg-indigo-950/40 rounded-lg flex items-center justify-between">
              <div>
                <span class="text-xs uppercase font-bold text-indigo-600 dark:text-indigo-400">1. Vận tốc tức thời:</span>
                <div class="font-bold text-lg"><span data-math="display">v_t = v_0 + a \\cdot t</span></div>
              </div>
              <span class="text-xs text-slate-500 max-w-xs text-right hidden sm:block">Biết vận tốc tại bất kỳ thời điểm t</span>
            </div>

            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg flex items-center justify-between">
              <div>
                <span class="text-xs uppercase font-bold text-emerald-600 dark:text-emerald-400">2. Độ dịch chuyển:</span>
                <div class="font-bold text-lg"><span data-math="display">d = v_0 t + \\frac{1}{2} a t^2</span></div>
              </div>
              <span class="text-xs text-slate-500 max-w-xs text-right hidden sm:block">Chứng minh từ diện tích hình thang dưới đồ thị v-t</span>
            </div>

            <div class="p-3 bg-rose-50 dark:bg-rose-950/40 rounded-lg flex items-center justify-between">
              <div>
                <span class="text-xs uppercase font-bold text-rose-600 dark:text-rose-400">3. Công thức độc lập thời gian:</span>
                <div class="font-bold text-lg"><span data-math="display">v_t^2 - v_0^2 = 2 a d</span></div>
              </div>
              <span class="text-xs text-slate-500 max-w-xs text-right hidden sm:block">Dùng khi không cho hoặc không cần tìm thời gian t</span>
            </div>

            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-lg flex items-center justify-between">
              <div>
                <span class="text-xs uppercase font-bold text-purple-600 dark:text-purple-400">4. Quãng đường đi được:</span>
                <div class="font-bold text-lg"><span data-math="display">s = |v_0 t + \\frac{1}{2} a t^2|</span></div>
              </div>
              <span class="text-xs text-slate-500 max-w-xs text-right hidden sm:block">Nếu không đổi chiều: s = d</span>
            </div>
          </div>
        `
      },
      {
        title: "III. Đồ thị vận tốc – thời gian (v - t)",
        content: `
          <ul class="list-disc list-inside text-sm space-y-2 text-slate-700 dark:text-slate-300">
            <li>Đồ thị <span data-math="inline">v - t</span> là một đường thẳng xiên góc.</li>
            <li><strong>Độ dốc của đường thẳng:</strong> <span data-math="inline">\\text{Độ dốc} = \\frac{\\Delta v}{\\Delta t} = a</span> (chính là gia tốc).</li>
            <li><strong>Ý nghĩa diện tích:</strong> Diện tích của hình phẳng giới hạn bởi đồ thị vận tốc - thời gian và trục hoành trong khoảng thời gian t chính là <strong>độ dịch chuyển d</strong> của vật.</li>
          </ul>
        `
      }
    ],
    formulas: [
      { name: "Vận tốc tức thời", latex: "v_t = v_0 + at", note: "v₀ là vận tốc ban đầu, a là gia tốc" },
      { name: "Độ dịch chuyển", latex: "d = v_0 t + \\frac{1}{2}at^2", note: "Đơn vị d là mét (m)" },
      { name: "Hệ thức độc lập thời gian", latex: "v_t^2 - v_0^2 = 2ad", note: "Liên hệ trực tiếp giữa v, v₀, a, d" },
      { name: "Gia tốc từ đồ thị v-t", latex: "a = \\frac{v_2 - v_1}{t_2 - t_1}", note: "Hệ số góc của đồ thị v - t" }
    ],
    sgkHighlights: [
      "Vận động viên đua xe đạp vượt qua vạch đích với v = 10 m/s rồi hãm phanh đi thêm 20m mới dừng lại (v = 0) => Gia tốc a = (0 - 10²)/(2 · 20) = -2,5 m/s².",
      "Thời gian hãm phanh: t = (0 - 10) / (-2,5) = 4 giây.",
      "Bài toán chú chó con chạy trong ngõ hẹp (Hình 9.5 SGK): Đồ thị v - t hình tam giác từ 0 lên 2 m/s rồi về 0 và đảo chiều sang âm."
    ]
  },
  {
    id: "bai-10",
    number: 10,
    title: "Sự rơi tự do",
    badge: "Hiện tượng thú vị",
    pageRange: "Trang 44 - 46",
    description: "Thí nghiệm ống hút chân không Newton, định nghĩa rơi tự do, gia tốc g và các phương trình rơi tự do.",
    objectives: [
      "Giải thích được nguyên nhân khiến các vật rơi nhanh chậm khác nhau trong không khí.",
      "Nêu được định nghĩa và các đặc điểm của sự rơi tự do.",
      "Ghi nhớ các công thức tính vận tốc, thời gian và quãng đường trong rơi tự do."
    ],
    sections: [
      {
        title: "I. Sự rơi của các vật trong không khí",
        content: `
          <p class="mb-3">Quan sát đời sống thường thấy hòn đá rơi nhanh hơn chiếc lá, viên bi rơi nhanh hơn mảnh giấy. Nguyên nhân là do <strong>lực cản của không khí</strong> tác dụng lên vật.</p>
          <div class="bg-indigo-50 dark:bg-indigo-950/40 p-4 rounded-lg border-l-4 border-indigo-500 text-sm">
            <strong>Thí nghiệm lịch sử của Newton (Ống chân không):</strong><br>
            Trong một ống thuỷ tinh chứa đầy không khí, viên bi chì rơi nhanh hơn lông chim. Nhưng khi hút hết không khí ra (tạo môi trường chân không), <strong>viên bi chì và chiếc lông chim rơi nhanh như nhau</strong> và chạm đáy ống cùng một lúc!
          </div>
        `
      },
      {
        title: "II. Định nghĩa và Đặc điểm của Sự rơi tự do",
        content: `
          <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg mb-3">
            <h5 class="font-bold text-emerald-800 dark:text-emerald-300">Định nghĩa:</h5>
            <p class="text-sm mt-1">Sự rơi tự do là sự rơi chỉ dưới tác dụng của <strong>trọng lực</strong> (hoặc lực cản không khí rất nhỏ không đáng kể so với trọng lượng của vật).</p>
          </div>
          <h5 class="font-bold text-slate-800 dark:text-slate-200 mb-2">Đặc điểm của chuyển động rơi tự do:</h5>
          <ul class="list-disc list-inside text-sm space-y-1 text-slate-700 dark:text-slate-300">
            <li><strong>Phương:</strong> Thẳng đứng (trùng với phương dây dọi).</li>
            <li><strong>Chiều:</strong> Từ trên xuống dưới.</li>
            <li><strong>Tính chất:</strong> Là chuyển động <strong>thẳng nhanh dần đều</strong> không có vận tốc ban đầu (<span data-math="inline">v_0 = 0</span>).</li>
            <li><strong>Gia tốc:</strong> Mọi vật rơi tự do tại cùng một nơi trên Trái Đất đều có cùng gia tốc trọng trường <span data-math="inline">g</span>. Ở gần mặt đất, thường lấy <span data-math="inline">g \\approx 9,8\\text{ m/s}^2</span> hoặc <span data-math="inline">g = 10\\text{ m/s}^2</span>.</li>
          </ul>
        `
      },
      {
        title: "III. Các công thức rơi tự do (Chọn chiều dương hướng xuống)",
        content: `
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center my-3">
            <div class="p-3 bg-blue-50 dark:bg-blue-950/40 rounded-lg">
              <span class="text-xs text-blue-700 dark:text-blue-300 font-bold block mb-1">VẬN TỐC TỨC THỜI</span>
              <span data-math="display">v = g \\cdot t</span>
            </div>
            <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 rounded-lg">
              <span class="text-xs text-emerald-700 dark:text-emerald-300 font-bold block mb-1">QUÃNG ĐƯỜNG RƠI</span>
              <span data-math="display">h = \\frac{1}{2} g t^2</span>
            </div>
            <div class="p-3 bg-purple-50 dark:bg-purple-950/40 rounded-lg">
              <span class="text-xs text-purple-700 dark:text-purple-300 font-bold block mb-1">HỆ THỨC ĐỘC LẬP t</span>
              <span data-math="display">v^2 = 2 g h</span>
            </div>
          </div>
          <div class="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg text-sm">
            <strong>Hệ quả quan trọng:</strong> Thời gian vật rơi từ độ cao h chạm đất là <span data-math="inline">t = \\sqrt{\\frac{2h}{g}}</span>; vận tốc lúc chạm đất là <span data-math="inline">v = \\sqrt{2gh}</span>.
          </div>
        `
      }
    ],
    formulas: [
      { name: "Thời gian rơi", latex: "t = \\sqrt{\\frac{2h}{g}}", note: "Chỉ phụ thuộc vào độ cao h và gia tốc g" },
      { name: "Vận tốc khi chạm đất", latex: "v = \\sqrt{2gh}", note: "Không phụ thuộc vào khối lượng của vật" },
      { name: "Quãng đường trong giây thứ n", latex: "\\Delta s_n = \\frac{1}{2}g(2n - 1)", note: "Hiệu quãng đường sau n giây và sau (n - 1) giây" }
    ],
    sgkHighlights: [
      "Năm 1971 trên Mặt Trăng, nhà du hành David Scott thả chiếc búa và lông chim cùng lúc, cả hai rơi chạm mặt trăng đồng thời.",
      "Bài toán thả hòn bi từ trên cao xuống đất hết t = 3,1s (lấy g = 9,8 m/s²): Độ cao h = 0,5 · 9,8 · 3,1² ≈ 47,09m; vận tốc chạm đất v = 9,8 · 3,1 ≈ 30,38 m/s.",
      "Quãng đường rơi trong 0,5s cuối trước khi chạm đất = h(3,1) - h(2,6) = 47,09 - 33,12 = 13,97m."
    ]
  },
  {
    id: "bai-11",
    number: 11,
    title: "Thực hành: Đo gia tốc rơi tự do",
    badge: "Thực hành thí nghiệm",
    pageRange: "Trang 47 - 48",
    description: "Bộ thí nghiệm đo gia tốc rơi tự do bằng nam châm điện, trụ thép, cổng quang điện và xử lý đồ thị s - t².",
    objectives: [
      "Thiết kế và lắp đặt thí nghiệm đo thời gian rơi của vật tự do.",
      "Sử dụng công thức s = 0,5.g.t² để tính gia tốc rơi tự do g.",
      "Vẽ và phân tích đồ thị s phụ thuộc vào t² để xác định g và đánh giá sai số."
    ],
    sections: [
      {
        title: "I. Thiết bị và Nguyên tắc đo",
        content: `
          <ul class="list-disc list-inside space-y-2 text-sm text-slate-700 dark:text-slate-300">
            <li><strong>Máng đứng có dây dọi:</strong> Đảm bảo phương rơi của trụ thép hoàn toàn thẳng đứng.</li>
            <li><strong>Nam châm điện:</strong> Giữ trụ thép tại vị trí xuất phát và thả không vận tốc đầu khi ngắt điện.</li>
            <li><strong>Cổng quang điện E:</strong> Đặt ở khoảng cách <span data-math="inline">s</span> bên dưới nam châm điện.</li>
            <li><strong>Đồng hồ hiện số MC-964:</strong> Bắt đầu đếm khi nam châm ngắt điện và dừng đếm khi đáy trụ thép đi qua cổng quang.</li>
          </ul>
        `
      },
      {
        title: "II. Công thức tính và Đồ thị s - t²",
        content: `
          <p class="text-sm mb-2">Vì vật rơi tự do không vận tốc ban đầu nên: <span data-math="inline">s = \\frac{1}{2} g t^2 \\implies g = \\frac{2s}{t^2}</span>.</p>
          <div class="bg-blue-50 dark:bg-blue-950/40 p-4 rounded-lg border-l-4 border-blue-500 text-sm">
            <h5 class="font-bold text-blue-900 dark:text-blue-300 mb-1">Phương pháp xử lý đồ thị s theo t²:</h5>
            <p>Vẽ đồ thị với trục tung là <span data-math="inline">s</span> và trục hoành là <span data-math="inline">t^2</span>. Đồ thị thu được là một <strong>đường thẳng đi qua gốc toạ độ</strong>. Hệ số góc của đường thẳng chính là <span data-math="inline">k = \\frac{g}{2}</span>. Từ đó suy ra <span data-math="inline">g = 2k</span>.</p>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Gia tốc rơi tự do", latex: "g = \\frac{2s}{t^2}", note: "Tính từ quãng đường s và thời gian t đo được" },
      { name: "Sai số gia tốc rơi tự do", latex: "\\frac{\\Delta g}{\\bar{g}} = \\frac{\\Delta s}{\\bar{s}} + 2\\frac{\\Delta t}{\\bar{t}}", note: "Chú ý số mũ 2 của t biến thành hệ số 2" }
    ],
    sgkHighlights: [
      "Tại sao dùng trụ thép mà không dùng viên bi thép? Trụ thép dài có định hướng tốt hơn khi rơi thẳng đứng qua cổng quang.",
      "Lịch sử: Năm 1602, Galilei phát hiện chu kì con lắc tỉ lệ với căn bậc hai chiều dài con lắc, từ đó cũng đo được g."
    ]
  },
  {
    id: "bai-12",
    number: 12,
    title: "Chuyển động ném (Ném ngang & Ném xiên)",
    badge: "Ứng dụng tổng hợp",
    pageRange: "Trang 49 - 54",
    description: "Nguyên lý độc lập của các chuyển động thành phần, khảo sát chuyển động ném ngang và ném xiên trong trường trọng lực.",
    objectives: [
      "Vận dụng phương pháp toạ độ phân tích chuyển động ném thành hai chuyển động thành phần độc lập.",
      "Thiết lập được phương trình quỹ đạo, tính thời gian rơi và tầm xa của chuyển động ném ngang.",
      "Xác định được tầm cao cực đại và tầm bay xa của chuyển động ném xiên."
    ],
    sections: [
      {
        title: "I. Chuyển động ném ngang",
        content: `
          <p class="mb-3">Chọn hệ toạ độ Oxy: gốc O tại điểm ném ở độ cao H, trục Ox nằm ngang theo hướng ném, trục Oy thẳng đứng hướng xuống dưới.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-sm">
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h5 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">1. Theo phương ngang Ox:</h5>
              <p>Không có lực tác dụng (<span data-math="inline">a_x = 0</span>) <span data-math="inline">\\implies</span> Chuyển động thẳng đều:</p>
              <p class="font-mono mt-1"><span data-math="inline">v_x = v_0</span>, <span data-math="inline">x = v_0 \\cdot t</span></p>
            </div>
            <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <h5 class="font-bold text-indigo-600 dark:text-indigo-400 mb-1">2. Theo phương thẳng đứng Oy:</h5>
              <p>Chỉ chịu trọng lực (<span data-math="inline">a_y = g</span>, <span data-math="inline">v_{0y} = 0</span>) <span data-math="inline">\\implies</span> Rơi tự do:</p>
              <p class="font-mono mt-1"><span data-math="inline">v_y = g \\cdot t</span>, <span data-math="inline">y = \\frac{1}{2} g t^2</span></p>
            </div>
          </div>
          <div class="bg-indigo-50 dark:bg-indigo-950/40 p-4 rounded-lg space-y-2 text-sm">
            <p><strong>Quỹ đạo:</strong> Khử thời gian t ta có <span data-math="inline">y = \\frac{g}{2v_0^2} x^2</span> <span data-math="inline">\\implies</span> Quỹ đạo là một nhánh parabol đỉnh O.</p>
            <p><strong>Thời gian rơi chạm đất:</strong> <span data-math="inline">t = \\sqrt{\\frac{2H}{g}}</span> (chỉ phụ thuộc vào độ cao H, không phụ thuộc vào <span data-math="inline">v_0</span>!).</p>
            <p><strong>Tầm ném xa:</strong> <span data-math="inline">L = x_{\\max} = v_0 \\cdot t = v_0 \\sqrt{\\frac{2H}{g}}</span>.</p>
            <p><strong>Vận tốc chạm đất:</strong> <span data-math="inline">v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{v_0^2 + 2gH}</span>.</p>
          </div>
        `
      },
      {
        title: "II. Chuyển động ném xiên (Góc ném α)",
        content: `
          <p class="mb-3">Vật được ném với vận tốc <span data-math="inline">v_0</span> hợp với phương ngang góc <span data-math="inline">\\alpha</span> từ mặt đất:</p>
          <div class="overflow-x-auto my-3">
            <table class="w-full text-sm border-collapse border border-slate-300 dark:border-slate-700">
              <tr class="bg-slate-100 dark:bg-slate-800">
                <th class="p-2 border">Đại lượng</th>
                <th class="p-2 border">Công thức</th>
                <th class="p-2 border">Ghi chú</th>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Vận tốc ban đầu</td>
                <td class="p-2 border"><span data-math="inline">v_{0x} = v_0 \\cos\\alpha</span>; <span data-math="inline">v_{0y} = v_0 \\sin\\alpha</span></td>
                <td class="p-2 border">Chiếu lên 2 trục</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Tầm cao cực đại (H)</td>
                <td class="p-2 border font-bold text-indigo-600"><span data-math="inline">H = \\frac{v_0^2 \\sin^2\\alpha}{2g}</span></td>
                <td class="p-2 border">Khi <span data-math="inline">v_y = 0</span> tại đỉnh parabol</td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Thời gian lên tới đỉnh</td>
                <td class="p-2 border"><span data-math="inline">t_H = \\frac{v_0 \\sin\\alpha}{g}</span></td>
                <td class="p-2 border">Thời gian bay tổng: <span data-math="inline">T = 2 t_H</span></td>
              </tr>
              <tr>
                <td class="p-2 border font-medium">Tầm ném xa (L)</td>
                <td class="p-2 border font-bold text-emerald-600"><span data-math="inline">L = \\frac{v_0^2 \\sin 2\\alpha}{g}</span></td>
                <td class="p-2 border">Đạt cực đại khi <span data-math="inline">\\alpha = 45^\\circ</span> (<span data-math="inline">\\sin 2\\alpha = 1</span>)</td>
              </tr>
            </table>
          </div>
        `
      }
    ],
    formulas: [
      { name: "Thời gian bay ném ngang", latex: "t = \\sqrt{\\frac{2H}{g}}", note: "Bằng thời gian thả rơi tự do từ cùng độ cao" },
      { name: "Tầm xa ném ngang", latex: "L = v_0 \\sqrt{\\frac{2H}{g}}", note: "Tỉ lệ thuận với vận tốc đầu v₀" },
      { name: "Tầm cao ném xiên", latex: "H = \\frac{v_0^2 \\sin^2\\alpha}{2g}", note: "Độ cao cực đại của quỹ đạo" },
      { name: "Tầm xa ném xiên", latex: "L = \\frac{v_0^2 \\sin 2\\alpha}{g}", note: "Tầm xa lớn nhất khi góc ném là 45°" }
    ],
    sgkHighlights: [
      "Thí nghiệm hai viên bi A và B (Hình 12.1 SGK): Dùng búa đập cho bi B rơi tự do và bi A bay ngang cùng lúc -> Cả hai chạm đất cùng một thời điểm!",
      "Máy bay cứu trợ bay ngang ở độ cao H = 490m với tốc độ 100 m/s: Thời gian gói hàng rơi: t = √(2 · 490 / 9,8) = 10s. Tầm xa L = 100 · 10 = 1000m = 1 km.",
      "VĐV nhảy xa: Để nhảy xa tối đa, góc nhảy xấp xỉ 45 độ và vận tốc ban đầu lớn nhất."
    ]
  }
];

// Ngân hàng câu hỏi trắc nghiệm & bài tập phân loại theo bài và chuẩn ma trận đề thi
const QUESTIONS_BANK = [
  // --- BÀI 4 ---
  {
    id: "q4-1",
    lessonId: "bai-4",
    level: "nhan_biet",
    type: "mcq",
    question: "Đại lượng nào sau đây là đại lượng vectơ?",
    options: [
      "Quãng đường đi được.",
      "Độ dịch chuyển.",
      "Thời gian chuyển động.",
      "Tốc độ trung bình."
    ],
    correctIndex: 1,
    explanation: "Độ dịch chuyển là đại lượng vectơ cho biết cả độ dài và hướng của sự thay đổi vị trí của vật. Trong khi đó quãng đường, thời gian và tốc độ là các đại lượng vô hướng luôn không âm."
  },
  {
    id: "q4-2",
    lessonId: "bai-4",
    level: "thong_hieu",
    type: "mcq",
    question: "Trong trường hợp nào sau đây, độ lớn của độ dịch chuyển bằng quãng đường đi được (d = s)?",
    options: [
      "Vật chuyển động tròn đều.",
      "Vật chuyển động thẳng và có đổi chiều chuyển động.",
      "Vật chuyển động thẳng và không đổi chiều chuyển động.",
      "Vật đi một vòng rồi quay về vị trí ban đầu."
    ],
    correctIndex: 2,
    explanation: "Độ lớn độ dịch chuyển chỉ bằng quãng đường đi được khi và chỉ khi vật chuyển động trên một đường thẳng và không hề đổi chiều chuyển động."
  },
  {
    id: "q4-3",
    lessonId: "bai-4",
    level: "van_dung",
    type: "mcq",
    question: "Một người lái xe đi thẳng 6 km theo hướng Tây, sau đó rẽ trái đi thẳng theo hướng Nam 8 km. Độ lớn độ dịch chuyển tổng hợp của người đó là:",
    options: [
      "14 km.",
      "2 km.",
      "10 km.",
      "48 km."
    ],
    correctIndex: 2,
    explanation: "Vì hướng Tây và hướng Nam vuông góc với nhau, độ lớn độ dịch chuyển tổng hợp là: d = √(d₁² + d₂²) = √(6² + 8²) = √(36 + 64) = √100 = 10 km."
  },
  {
    id: "q4-4",
    lessonId: "bai-4",
    level: "thong_hieu",
    type: "true_false",
    question: "Xét các phát biểu sau về quãng đường (s) và độ dịch chuyển (d):",
    subQuestions: [
      { text: "Quãng đường là đại lượng vô hướng luôn dương hoặc bằng 0.", correct: true },
      { text: "Độ dịch chuyển có thể nhận giá trị âm, dương hoặc bằng 0.", correct: true },
      { text: "Một vận động viên bơi một vòng quanh bể rồi về điểm xuất phát thì độ dịch chuyển khác 0.", correct: false },
      { text: "Khi vật chuyển động cong, quãng đường luôn lớn hơn độ lớn độ dịch chuyển.", correct: true }
    ],
    explanation: "Ý 3 sai vì điểm đầu trùng điểm cuối nên độ dịch chuyển d = 0, mặc dù quãng đường s > 0."
  },
  {
    id: "q4-5",
    lessonId: "bai-4",
    level: "van_dung_cao",
    type: "short_answer",
    question: "Một người bơi ngang từ bờ sông bên này sang bờ sông bên kia có chiều rộng 60 m. Do nước chảy nên người đó bị trôi dạt xuôi theo dòng sông một đoạn 80 m mới sang tới bờ bên kia. Tính độ lớn độ dịch chuyển của người đó (theo mét):",
    correctValue: 100,
    unit: "m",
    explanation: "Độ dịch chuyển là vectơ nối điểm xuất phát và điểm cập bờ đối diện: d = √(60² + 80²) = 100 m."
  },
  {
    id: "q4-6",
    lessonId: "bai-4",
    level: "van_dung",
    type: "mcq",
    question: "Bạn A đi xe đạp từ nhà qua trạm xăng (cách nhà 400 m), tới siêu thị mua đồ (cách trạm xăng 400 m theo cùng hướng). Sau đó bạn A quay về nhà cất đồ rồi mới đến trường (cách nhà 1200 m). Toàn bộ hành trình trên một đường thẳng. Quãng đường tổng cộng bạn A đã đi là:",
    options: [
      "1200 m.",
      "2800 m.",
      "1600 m.",
      "2000 m."
    ],
    correctIndex: 1,
    explanation: "Từ nhà đến siêu thị: s₁ = 800 m. Từ siêu thị về lại nhà: s₂ = 800 m. Từ nhà đến trường: s₃ = 1200 m. Tổng quãng đường: s = 800 + 800 + 1200 = 2800 m."
  },

  // --- BÀI 5 ---
  {
    id: "q5-1",
    lessonId: "bai-5",
    level: "nhan_biet",
    type: "mcq",
    question: "Tốc kế trên xe máy hoặc ô tô cho người lái xe biết giá trị của đại lượng nào sau đây?",
    options: [
      "Tốc độ trung bình trên toàn bộ chuyến đi.",
      "Tốc độ tức thời tại thời điểm quan sát.",
      "Vận tốc tức thời bao gồm cả hướng chuyển động.",
      "Gia tốc tức thời của xe."
    ],
    correctIndex: 1,
    explanation: "Tốc kế chỉ hiển thị độ lớn nhanh chậm tại thời điểm đó (tốc độ tức thời), không chỉ ra hướng đi của xe nên không phải vectơ vận tốc."
  },
  {
    id: "q5-2",
    lessonId: "bai-5",
    level: "van_dung",
    type: "mcq",
    question: "Một vận động viên chạy cự li 100 m hết 10 giây. Tốc độ trung bình của vận động viên này tính theo đơn vị km/h là:",
    options: [
      "10 km/h.",
      "36 km/h.",
      "27,8 km/h.",
      "18 km/h."
    ],
    correctIndex: 1,
    explanation: "Tốc độ trung bình: v = s / t = 100 / 10 = 10 m/s. Đổi sang km/h: 10 × 3,6 = 36 km/h."
  },
  {
    id: "q5-3",
    lessonId: "bai-5",
    level: "van_dung",
    type: "mcq",
    question: "Một ca nô chạy xuôi dòng nước từ A đến B mất 2 giờ, sau đó quay lại chạy ngược dòng từ B về A mất 3 giờ. Biết khoảng cách AB = 60 km. Vận tốc của dòng nước đối với bờ sông là:",
    options: [
      "5 km/h.",
      "10 km/h.",
      "25 km/h.",
      "2,5 km/h."
    ],
    correctIndex: 0,
    explanation: "Vận tốc xuôi dòng: v_xuôi = 60 / 2 = 30 km/h = v_canô + v_nước. Vận tốc ngược dòng: v_ngược = 60 / 3 = 20 km/h = v_canô - v_nước. Suy ra v_nước = (v_xuôi - v_ngược) / 2 = (30 - 20) / 2 = 5 km/h."
  },
  {
    id: "q5-4",
    lessonId: "bai-5",
    level: "thong_hieu",
    type: "true_false",
    question: "Xét tính Đúng / Sai của các khẳng định sau về vận tốc và tốc độ:",
    subQuestions: [
      { text: "Vận tốc trung bình được tính bằng độ dịch chuyển chia cho khoảng thời gian.", correct: true },
      { text: "Tốc độ trung bình không bao giờ có giá trị âm.", correct: true },
      { text: "Trong chuyển động thẳng đổi chiều, tốc độ trung bình luôn bằng độ lớn vận tốc trung bình.", correct: false },
      { text: "Công thức cộng vận tốc có dạng: v⃗₁₃ = v⃗₁₂ + v⃗₂₃.", correct: true }
    ],
    explanation: "Ý 3 sai vì khi đổi chiều thì quãng đường s > |d| dẫn tới tốc độ trung bình v_tb > |v_tb|."
  },
  {
    id: "q5-5",
    lessonId: "bai-5",
    level: "van_dung",
    type: "short_answer",
    question: "Một đoàn tàu đang chạy với tốc độ 36 km/h. Một hành khách đi bộ trên tàu về phía đầu tàu với vận tốc 1 m/s so với sàn tàu. Vận tốc của hành khách đối với mặt đường ray là bao nhiêu m/s?",
    correctValue: 11,
    unit: "m/s",
    explanation: "Đổi 36 km/h = 10 m/s. Vì hành khách đi cùng hướng chuyển động của đoàn tàu nên: v₁₃ = v₁₂ + v₂₃ = 1 + 10 = 11 m/s."
  },

  // --- BÀI 6 ---
  {
    id: "q6-1",
    lessonId: "bai-6",
    level: "nhan_biet",
    type: "mcq",
    question: "Khi đo tốc độ tức thời của viên bi lăn qua cổng quang điện, ta cần đo đại lượng nào dưới đây bằng thước kẹp?",
    options: [
      "Quãng đường máng nghiêng.",
      "Đường kính của viên bi thép.",
      "Chiều cao của máng nghiêng.",
      "Khoảng cách giữa hai cổng quang."
    ],
    correctIndex: 1,
    explanation: "Khi viên bi đi qua cổng quang, vật chắn sáng chính là đường kính của viên bi d. Tốc độ tức thời tính bằng v = d / Δt."
  },
  {
    id: "q6-2",
    lessonId: "bai-6",
    level: "van_dung",
    type: "short_answer",
    question: "Một học sinh đo đường kính viên bi là d = 2,0 cm và thời gian bi chắn cổng quang là t = 0,05 s. Tốc độ tức thời của viên bi lúc qua cổng quang là bao nhiêu m/s?",
    correctValue: 0.4,
    unit: "m/s",
    explanation: "Đổi d = 2,0 cm = 0,02 m. Tốc độ tức thời: v = d / t = 0,02 / 0,05 = 0,4 m/s."
  },
  {
    id: "q6-3",
    lessonId: "bai-6",
    level: "thong_hieu",
    type: "mcq",
    question: "Đồng hồ cần rung (đồng hồ chấm kim) rung đều đặn 50 lần trong một giây. Khoảng thời gian giữa hai chấm liên tiếp trên dải băng giấy là:",
    options: [
      "0,01 s.",
      "0,02 s.",
      "0,05 s.",
      "0,5 s."
    ],
    correctIndex: 1,
    explanation: "Khoảng thời gian giữa 2 lần rung liên tiếp là chu kỳ T = 1 / f = 1 / 50 = 0,02 giây."
  },

  // --- BÀI 7 ---
  {
    id: "q7-1",
    lessonId: "bai-7",
    level: "thong_hieu",
    type: "mcq",
    question: "Trên đồ thị độ dịch chuyển - thời gian (d - t), một đoạn thẳng nằm ngang song song với trục thời gian cho biết vật đang:",
    options: [
      "Chuyển động thẳng đều cùng chiều dương.",
      "Chuyển động nhanh dần đều.",
      "Đứng yên không chuyển động.",
      "Chuyển động thẳng đều ngược chiều dương."
    ],
    correctIndex: 2,
    explanation: "Đoạn thẳng nằm ngang nghĩa là độ dịch chuyển d không đổi qua các thời điểm t khác nhau (Δd = 0), do đó vận tốc v = 0, vật đang đứng yên."
  },
  {
    id: "q7-2",
    lessonId: "bai-7",
    level: "van_dung",
    type: "mcq",
    question: "Đồ thị d - t của một vật là đoạn thẳng đi qua hai điểm A(t = 2 s, d = 10 m) và B(t = 6 s, d = 30 m). Vận tốc của vật là:",
    options: [
      "5 m/s.",
      "10 m/s.",
      "4 m/s.",
      "2 m/s."
    ],
    correctIndex: 0,
    explanation: "Hệ số góc (độ dốc) của đồ thị d - t là: v = (d_B - d_A) / (t_B - t_A) = (30 - 10) / (6 - 2) = 20 / 4 = 5 m/s."
  },
  {
    id: "q7-3",
    lessonId: "bai-7",
    level: "van_dung",
    type: "short_answer",
    question: "Một người bơi trong bể dài 50m. Trong 25 giây đầu người đó bơi từ đầu bể (0m) đến cuối bể (50m). Vận tốc của người đó trong 25 giây đầu là bao nhiêu m/s?",
    correctValue: 2,
    unit: "m/s",
    explanation: "v = Δd / Δt = (50 - 0) / (25 - 0) = 50 / 25 = 2 m/s."
  },

  // --- BÀI 8 ---
  {
    id: "q8-1",
    lessonId: "bai-8",
    level: "nhan_biet",
    type: "mcq",
    question: "Đơn vị đo của gia tốc trong hệ thống đơn vị đo lường quốc tế SI là:",
    options: [
      "m/s.",
      "m/s².",
      "km/h.",
      "m²·s."
    ],
    correctIndex: 1,
    explanation: "Gia tốc có đơn vị là mét trên giây bình phương, kí hiệu là m/s²."
  },
  {
    id: "q8-2",
    lessonId: "bai-8",
    level: "thong_hieu",
    type: "mcq",
    question: "Chuyển động thẳng chậm dần đều có đặc điểm nào dưới đây về dấu của gia tốc a và vận tốc v?",
    options: [
      "a > 0 và v > 0.",
      "a < 0 và v < 0.",
      "a · v < 0 (a và v trái dấu).",
      "a · v > 0 (a và v cùng dấu)."
    ],
    correctIndex: 2,
    explanation: "Trong chuyển động chậm dần, vectơ gia tốc ngược chiều với vectơ vận tốc, do đó tích vô hướng hay tích đại số a · v < 0 (a và v trái dấu)."
  },
  {
    id: "q8-3",
    lessonId: "bai-8",
    level: "van_dung",
    type: "short_answer",
    question: "Một ô tô đang chuyển động với vận tốc 15 m/s thì tài xế hãm phanh chuyển động chậm dần đều, sau 5 giây thì dừng hẳn. Độ lớn gia tốc của ô tô là bao nhiêu m/s²?",
    correctValue: 3,
    unit: "m/s²",
    explanation: "a = (v - v₀) / t = (0 - 15) / 5 = -3 m/s². Độ lớn gia tốc là |a| = 3 m/s²."
  },
  {
    id: "q8-4",
    lessonId: "bai-8",
    level: "van_dung",
    type: "mcq",
    question: "Một con báo đang chạy với vận tốc 30 m/s thì chuyển động chậm dần khi tới gần suối. Sau 3 giây, vận tốc giảm còn 9 m/s. Gia tốc của con báo là:",
    options: [
      "-7 m/s².",
      "7 m/s².",
      "-13 m/s².",
      "-3 m/s²."
    ],
    correctIndex: 0,
    explanation: "a = (v_t - v_0) / Δt = (9 - 30) / 3 = -21 / 3 = -7 m/s²."
  },

  // --- BÀI 9 ---
  {
    id: "q9-1",
    lessonId: "bai-9",
    level: "nhan_biet",
    type: "mcq",
    question: "Công thức liên hệ giữa vận tốc tức thời, vận tốc ban đầu, gia tốc và độ dịch chuyển trong chuyển động thẳng biến đổi đều là:",
    options: [
      "v² - v₀² = ad.",
      "v² - v₀² = 2ad.",
      "v - v₀ = 2ad.",
      "v² + v₀² = 2ad."
    ],
    correctIndex: 1,
    explanation: "Công thức độc lập thời gian chuẩn trong SGK là: v² - v₀² = 2ad."
  },
  {
    id: "q9-2",
    lessonId: "bai-9",
    level: "van_dung",
    type: "mcq",
    question: "Một đoàn tàu bắt đầu rời ga (v₀ = 0) chuyển động nhanh dần đều với gia tốc a = 0,5 m/s². Quãng đường tàu đi được sau 20 giây là:",
    options: [
      "100 m.",
      "200 m.",
      "50 m.",
      "10 m."
    ],
    correctIndex: 0,
    explanation: "s = v₀·t + (1/2)·a·t² = 0 + 0,5 · 0,5 · (20)² = 0,25 · 400 = 100 m."
  },
  {
    id: "q9-3",
    lessonId: "bai-9",
    level: "van_dung_cao",
    type: "mcq",
    question: "Một xe ô tô đang chạy với vận tốc 20 m/s thì tắt máy, hãm phanh chuyển động chậm dần đều với gia tốc a = -2 m/s². Quãng đường xe đi được từ lúc hãm phanh đến khi dừng hẳn là:",
    options: [
      "200 m.",
      "100 m.",
      "50 m.",
      "10 m."
    ],
    correctIndex: 1,
    explanation: "Khi dừng hẳn v = 0. Áp dụng công thức độc lập: v² - v₀² = 2as => 0² - 20² = 2 · (-2) · s => -400 = -4s => s = 100 m."
  },
  {
    id: "q9-4",
    lessonId: "bai-9",
    level: "thong_hieu",
    type: "true_false",
    question: "Xét các phát biểu sau về đồ thị vận tốc – thời gian (v - t) trong chuyển động thẳng biến đổi đều:",
    subQuestions: [
      { text: "Đồ thị v - t là một đường thẳng xiên góc.", correct: true },
      { text: "Hệ số góc của đường thẳng trên đồ thị v - t cho biết giá trị gia tốc.", correct: true },
      { text: "Diện tích giới hạn bởi đường đồ thị v - t và trục thời gian bằng độ dịch chuyển của vật.", correct: true },
      { text: "Nếu đồ thị v - t dốc lên thì vật luôn chuyển động thẳng chậm dần đều.", correct: false }
    ],
    explanation: "Ý 4 sai vì đường đồ thị dốc lên biểu thị gia tốc a > 0, nếu v > 0 thì đây là chuyển động nhanh dần đều."
  },
  {
    id: "q9-5",
    lessonId: "bai-9",
    level: "van_dung",
    type: "short_answer",
    question: "Một vận động viên đua xe đạp vượt qua vạch đích với vận tốc 10 m/s, sau đó hãm phanh đi thêm 20 m thì dừng lại hẳn. Tính thời gian kể từ khi cán đích đến lúc dừng hẳn (theo giây):",
    correctValue: 4,
    unit: "giây",
    explanation: "Ta có: v² - v₀² = 2as => 0 - 10² = 2·a·20 => a = -2,5 m/s². Thời gian dừng: t = (v - v₀)/a = (0 - 10)/(-2,5) = 4 giây."
  },

  // --- BÀI 10 ---
  {
    id: "q10-1",
    lessonId: "bai-10",
    level: "nhan_biet",
    type: "mcq",
    question: "Chuyển động nào dưới đây có thể coi là sự rơi tự do?",
    options: [
      "Chiếc lá vàng rơi từ cành cây xuống đất trong gió.",
      "Hạt bụi lơ lửng chuyển động trong không khí.",
      "Viên bi sắt được thả rơi từ trên cao xuống đất trong phòng kín.",
      "Vận động viên đang nhảy dù từ máy bay."
    ],
    correctIndex: 2,
    explanation: "Viên bi sắt có trọng lượng rất lớn so với lực cản không khí, trong phòng kín không gió lực cản không đáng kể nên chuyển động rơi của nó được coi là rơi tự do."
  },
  {
    id: "q10-2",
    lessonId: "bai-10",
    level: "van_dung",
    type: "short_answer",
    question: "Thả một hòn đá rơi tự do từ độ cao h = 45 m xuống đất. Lấy gia tốc rơi tự do g = 10 m/s². Thời gian để hòn đá chạm đất là bao nhiêu giây?",
    correctValue: 3,
    unit: "giây",
    explanation: "Thời gian rơi: t = √(2h / g) = √(2 · 45 / 10) = √9 = 3 giây."
  },
  {
    id: "q10-3",
    lessonId: "bai-10",
    level: "van_dung",
    type: "mcq",
    question: "Một vật rơi tự do từ độ cao h. Khi chạm đất vật đạt vận tốc v = 20 m/s. Lấy g = 10 m/s². Độ cao h thả vật là:",
    options: [
      "10 m.",
      "20 m.",
      "40 m.",
      "2 m."
    ],
    correctIndex: 1,
    explanation: "v² = 2gh => h = v² / (2g) = 20² / (2 · 10) = 400 / 20 = 20 m."
  },
  {
    id: "q10-4",
    lessonId: "bai-10",
    level: "van_dung_cao",
    type: "short_answer",
    question: "Một vật rơi tự do từ độ cao 80 m. Lấy g = 10 m/s². Quãng đường vật rơi được trong 1 giây cuối cùng trước khi chạm đất là bao nhiêu mét?",
    correctValue: 35,
    unit: "m",
    explanation: "Thời gian rơi toàn phần: t = √(2 · 80 / 10) = 4 s. Quãng đường rơi trong 3 giây đầu: s₃ = 0,5 · 10 · 3² = 45 m. Quãng đường rơi trong giây cuối: Δs = 80 - 45 = 35 m."
  },

  // --- BÀI 11 ---
  {
    id: "q11-1",
    lessonId: "bai-11",
    level: "thong_hieu",
    type: "mcq",
    question: "Trong thí nghiệm đo gia tốc rơi tự do, đồ thị biểu diễn mối quan hệ giữa quãng đường rơi s và bình phương thời gian t² có dạng là:",
    options: [
      "Đường cong hyperbol.",
      "Đường thẳng đi qua gốc toạ độ.",
      "Đường parabol đỉnh ở gốc toạ độ.",
      "Đoạn thẳng nằm ngang song song trục hoành."
    ],
    correctIndex: 1,
    explanation: "Vì s = (1/2)g · t² nên s tỉ lệ thuận bậc nhất với t². Đồ thị biểu diễn s theo biến t² là một đường thẳng đi qua gốc toạ độ có hệ số góc k = g/2."
  },
  {
    id: "q11-2",
    lessonId: "bai-11",
    level: "van_dung",
    type: "short_answer",
    question: "Trong thí nghiệm đo g, vật rơi quãng đường s = 0,80 m mất thời gian trung bình t = 0,40 s. Giá trị gia tốc trọng trường g tính được từ số liệu trên là bao nhiêu m/s²?",
    correctValue: 10,
    unit: "m/s²",
    explanation: "g = 2s / t² = (2 · 0,80) / (0,40²) = 1,60 / 0,16 = 10 m/s²."
  },

  // --- BÀI 12 ---
  {
    id: "q12-1",
    lessonId: "bai-12",
    level: "nhan_biet",
    type: "mcq",
    question: "Quỹ đạo chuyển động của một vật ném ngang trong trường trọng lực (bỏ qua sức cản không khí) có dạng là:",
    options: [
      "Một đường thẳng xiên góc.",
      "Một đường tròn.",
      "Một nhánh parabol.",
      "Một đường elip."
    ],
    correctIndex: 2,
    explanation: "Phương trình quỹ đạo của vật ném ngang có dạng y = (g / (2v₀²)) · x² với x ≥ 0, đây là một nhánh của đường parabol có đỉnh tại điểm ném."
  },
  {
    id: "q12-2",
    lessonId: "bai-12",
    level: "thong_hieu",
    type: "mcq",
    question: "Từ cùng một độ cao H, đồng thời thả rơi tự do vật A và ném ngang vật B với vận tốc ban đầu v₀. Bỏ qua sức cản không khí. Kết luận nào sau đây là ĐÚNG?",
    options: [
      "Vật A chạm đất trước vật B.",
      "Vật B chạm đất trước vật A.",
      "Cả hai vật chạm đất cùng một lúc.",
      "Vật nào có khối lượng lớn hơn sẽ chạm đất trước."
    ],
    correctIndex: 2,
    explanation: "Theo phương thẳng đứng Oy, cả hai vật đều chuyển động rơi tự do không vận tốc đầu với cùng gia tốc g từ cùng độ cao H. Do đó thời gian rơi t = √(2H/g) của hai vật là hoàn toàn như nhau."
  },
  {
    id: "q12-3",
    lessonId: "bai-12",
    level: "van_dung",
    type: "short_answer",
    question: "Một máy bay ném hàng cứu trợ bay ngang ở độ cao 500 m với tốc độ 50 m/s. Lấy g = 10 m/s² và bỏ qua sức cản không khí. Tầm xa L của kiện hàng khi tiếp đất là bao nhiêu mét?",
    correctValue: 500,
    unit: "m",
    explanation: "Thời gian rơi: t = √(2H / g) = √(2 · 500 / 10) = √100 = 10 s. Tầm ném xa: L = v₀ · t = 50 · 10 = 500 m."
  },
  {
    id: "q12-4",
    lessonId: "bai-12",
    level: "van_dung_cao",
    type: "mcq",
    question: "Trong chuyển động ném xiên từ mặt đất với vận tốc ban đầu v₀, để vật đạt được tầm bay xa lớn nhất (L_max), góc ném α so với mặt phẳng ngang phải bằng:",
    options: [
      "30°.",
      "45°.",
      "60°.",
      "90°."
    ],
    correctIndex: 1,
    explanation: "Công thức tầm xa trong ném xiên là: L = (v₀² · sin 2α) / g. Để L đạt giá trị lớn nhất thì sin 2α = 1 => 2α = 90° => α = 45°."
  },
  {
    id: "q12-5",
    lessonId: "bai-12",
    level: "van_dung",
    type: "true_false",
    question: "Xét các đặc điểm của chuyển động ném xiên bỏ qua lực cản không khí:",
    subQuestions: [
      { text: "Gia tốc của vật tại điểm cao nhất bằng 0.", correct: false },
      { text: "Chuyển động thành phần theo phương ngang là chuyển động thẳng đều.", correct: true },
      { text: "Vận tốc của vật tại điểm cao nhất có giá trị bằng v₀ · cos α.", correct: true },
      { text: "Thời gian vật bay lên tới đỉnh cao nhất bằng thời gian vật rơi từ đỉnh xuống đất.", correct: true }
    ],
    explanation: "Ý 1 sai vì trong suốt quá trình chuyển động, vật luôn chịu trọng lực và có gia tốc trọng trường g hướng thẳng đứng xuống dưới (kể cả tại điểm cao nhất)."
  },
  {
    id: "q12-6",
    lessonId: "bai-12",
    level: "van_dung_cao",
    type: "short_answer",
    question: "Người ta ném một hòn đá từ một đài quan sát ven biển ở độ cao 40 m theo phương ngang với vận tốc 12 m/s ra biển. Lấy g = 9,8 m/s². Bỏ qua sức cản không khí. Tính tầm xa L của hòn đá rơi xuống biển (làm tròn đến chữ số thập phân thứ nhất, theo mét):",
    correctValue: 34.3,
    unit: "m",
    explanation: "Thời gian rơi: t = √(2 · 40 / 9,8) ≈ 2,86 s. Tầm ném xa: L = v₀ · t = 12 · 2,86 ≈ 34,3 m."
  }
];

// Toàn bộ công thức tra cứu nhanh
const FORMULA_SHEET = [
  {
    category: "Độ dịch chuyển & Tốc độ (Bài 4, 5)",
    items: [
      { name: "Độ dịch chuyển tổng hợp", formula: "\\vec{d} = \\vec{d}_1 + \\vec{d}_2", desc: "Tổng hợp vectơ theo quy tắc hình bình hành hoặc đa giác" },
      { name: "Tốc độ trung bình", formula: "v = \\frac{s}{t}", desc: "s là quãng đường đi được, t là thời gian" },
      { name: "Vận tốc trung bình", formula: "\\vec{v} = \\frac{\\vec{d}}{t}", desc: "d là độ dịch chuyển, có hướng và độ lớn" },
      { name: "Cộng vận tốc", formula: "\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}", desc: "Vận tốc tuyệt đối = Vận tốc tương đối + Vận tốc kéo theo" }
    ]
  },
  {
    category: "Chuyển động biến đổi đều (Bài 8, 9)",
    items: [
      { name: "Gia tốc", formula: "a = \\frac{v_t - v_0}{t - t_0} = \\frac{\\Delta v}{\\Delta t}", desc: "Độ biến thiên vận tốc trong một đơn vị thời gian (m/s²)" },
      { name: "Vận tốc tức thời", formula: "v_t = v_0 + at", desc: "Nhanh dần đều: a.v > 0; Chậm dần đều: a.v < 0" },
      { name: "Độ dịch chuyển", formula: "d = v_0 t + \\frac{1}{2}at^2", desc: "Bằng diện tích dưới đồ thị v - t" },
      { name: "Công thức độc lập t", formula: "v_t^2 - v_0^2 = 2ad", desc: "Hệ thức liên hệ khi không có thời gian t" }
    ]
  },
  {
    category: "Sự rơi tự do (Bài 10, 11)",
    items: [
      { name: "Vận tốc rơi tự do", formula: "v = g \\cdot t", desc: "v₀ = 0, g ≈ 9,8 m/s² hoặc 10 m/s²" },
      { name: "Quãng đường / Độ cao rơi", formula: "h = \\frac{1}{2} g t^2", desc: "Vật rơi nhanh dần đều thẳng đứng" },
      { name: "Thời gian rơi chạm đất", formula: "t = \\sqrt{\\frac{2h}{g}}", desc: "Chỉ phụ thuộc độ cao h và vị trí địa lý (g)" },
      { name: "Vận tốc lúc chạm đất", formula: "v = \\sqrt{2gh}", desc: "Không phụ thuộc vào khối lượng của vật rơi" }
    ]
  },
  {
    category: "Chuyển động ném (Bài 12)",
    items: [
      { name: "Thời gian rơi ném ngang", formula: "t = \\sqrt{\\frac{2H}{g}}", desc: "Bằng thời gian rơi tự do từ cùng độ cao H" },
      { name: "Tầm xa ném ngang", latex: "L = v_0 \\sqrt{\\frac{2H}{g}}", formula: "L = v_0 \\sqrt{\\frac{2H}{g}}", desc: "Tầm xa tỉ lệ thuận với vận tốc ném v₀" },
      { name: "Tầm cao ném xiên", formula: "H = \\frac{v_0^2 \\sin^2\\alpha}{2g}", desc: "Độ cao cực đại tại đỉnh parabol ném xiên" },
      { name: "Tầm xa ném xiên", formula: "L = \\frac{v_0^2 \\sin 2\\alpha}{g}", desc: "Tầm xa lớn nhất khi góc ném α = 45°" }
    ]
  }
];

// ==========================================
// NGÂN HÀNG BÀI TẬP TỰ LUẬN CHƯƠNG II (ĐỘNG HỌC)
// Tuyển tập bài toán chuẩn SGK KNTT kèm lời giải chi tiết
// ==========================================
const ESSAY_PROBLEMS = [
  {
    id: "essay-4-1",
    lessonId: "bai-4",
    lessonNumber: 4,
    lessonTitle: "Độ dịch chuyển và quãng đường đi được",
    title: "Bài 1: Chuyển động bơi dọc theo chiều dài bể bơi",
    difficulty: "Cơ bản",
    problem: "Một vận động viên bơi dọc theo chiều dài 50 m của một bể bơi hết 40 s, sau đó quay đầu bơi trở lại vạch xuất phát hết 60 s.<br>Hãy xác định:<br><strong>a)</strong> Quãng đường bơi được và độ lớn độ dịch chuyển của vận động viên trong 40 s đầu.<br><strong>b)</strong> Quãng đường bơi được và độ dịch chuyển của vận động viên trong cả quá trình bơi đi và về (100 s).",
    given: [
      "Chiều dài bể bơi: <span data-math=\"inline\">L = 50\\text{ m}</span>",
      "Thời gian bơi xuôi: <span data-math=\"inline\">t_1 = 40\\text{ s}</span>",
      "Thời gian bơi về: <span data-math=\"inline\">t_2 = 60\\text{ s}</span>"
    ],
    hints: [
      "Quãng đường s là tổng chiều dài đường đi thực tế của người bơi.",
      "Độ dịch chuyển d là đoạn thẳng nối điểm đầu và điểm cuối kèm theo hướng.",
      "Khi người bơi quay lại điểm xuất phát ban đầu, vị trí đầu và cuối trùng nhau."
    ],
    numericCheck: {
      label: "Nhập tổng quãng đường cả đi và về (m):",
      expected: 100,
      unit: "m"
    },
    solution: {
      steps: [
        {
          title: "a) Trong 40 s đầu (bơi một chiều từ đầu này đến đầu kia bể):",
          content: "Chọn trục tọa độ Ox nằm dọc theo thành bể bơi, gốc O tại vạch xuất phát, chiều dương là chiều bơi ban đầu.<br>• Quãng đường bơi được: <span data-math=\"inline\">s_1 = 50\\text{ m}</span>.<br>• Do người đó bơi thẳng theo một chiều nên độ lớn độ dịch chuyển bằng quãng đường: <span data-math=\"inline\">d_1 = +50\\text{ m}</span> (hướng theo chiều dương)."
        },
        {
          title: "b) Trong cả quá trình bơi đi và về (100 s):",
          content: "• Tổng quãng đường đi được: <span data-math=\"inline\">s = s_1 + s_2 = 50 + 50 = 100\\text{ m}</span>.<br>• Khi quay trở về vạch xuất phát ban đầu, vị trí cuối cùng trùng với vị trí ban đầu (tọa độ <span data-math=\"inline\">x = 0</span>). Do đó độ dịch chuyển tổng hợp là:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">d = x_2 - x_1 = 0\\text{ m}</span></div>"
        }
      ],
      note: "<strong>Quy tắc cần nhớ:</strong> Quãng đường luôn dương và luôn cộng dồn tích lũy, trong khi độ dịch chuyển có thể bằng 0 nếu vật quay lại vị trí xuất phát."
    }
  },
  {
    id: "essay-4-2",
    lessonId: "bai-4",
    lessonNumber: 4,
    lessonTitle: "Độ dịch chuyển và quãng đường đi được",
    title: "Bài 2: Tổng hợp độ dịch chuyển theo hai phương vuông góc",
    difficulty: "Thông hiểu",
    problem: "Một bạn học sinh đi bộ từ cổng trường: đầu tiên đi 4 km về hướng Đông, sau đó rẽ sang hướng Bắc và đi tiếp 3 km đến nhà văn hóa thiếu nhi thành phố.<br><strong>a)</strong> Tính tổng quãng đường bạn học sinh đã đi bộ.<br><strong>b)</strong> Biểu diễn các vectơ độ dịch chuyển và xác định độ lớn, hướng của độ dịch chuyển tổng hợp từ cổng trường đến nhà văn hóa.",
    given: [
      "Độ dịch chuyển hướng Đông: <span data-math=\"inline\">d_1 = 4\\text{ km}</span>",
      "Độ dịch chuyển hướng Bắc: <span data-math=\"inline\">d_2 = 3\\text{ km}</span>",
      "Góc giữa hai phương: <span data-math=\"inline\">\\alpha = 90^\\circ</span>"
    ],
    hints: [
      "Hướng Đông và hướng Bắc vuông góc với nhau (hệ trục tọa độ vuông góc Oxy).",
      "Áp dụng quy tắc cộng vectơ và định lý Pythagore trong tam giác vuông: \\(d = \\sqrt{d_1^2 + d_2^2}\\).",
      "Xác định hướng bằng góc lệch so với hướng Đông: \\(\\tan\\theta = \\frac{d_2}{d_1}\\)."
    ],
    numericCheck: {
      label: "Nhập độ lớn độ dịch chuyển tổng hợp (km):",
      expected: 5,
      unit: "km"
    },
    solution: {
      steps: [
        {
          title: "a) Tổng quãng đường học sinh đã đi bộ:",
          content: "Quãng đường bằng tổng độ dài các đoạn đường thực tế:<br><div class=\"text-center my-2 font-bold\"><span data-math=\"display\">s = d_1 + d_2 = 4 + 3 = 7\\text{ km}</span></div>"
        },
        {
          title: "b) Độ dịch chuyển tổng hợp:",
          content: "Gọi <span data-math=\"inline\">\\vec{d}_1</span> là vectơ độ dịch chuyển về hướng Đông, <span data-math=\"inline\">\\vec{d}_2</span> là vectơ độ dịch chuyển về hướng Bắc.<br>Vectơ độ dịch chuyển tổng hợp: <span data-math=\"inline\">\\vec{d} = \\vec{d}_1 + \\vec{d}_2</span>.<br>Vì hướng Đông vuông góc với hướng Bắc nên áp dụng định lý Pythagore:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">d = \\sqrt{d_1^2 + d_2^2} = \\sqrt{4^2 + 3^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5\\text{ km}</span></div><br>• Góc <span data-math=\"inline\">\\theta</span> hợp bởi <span data-math=\"inline\">\\vec{d}</span> với hướng Đông:<br><div class=\"text-center my-2\"><span data-math=\"display\">\\tan\\theta = \\frac{d_2}{d_1} = \\frac{3}{4} = 0,75 \\implies \\theta \\approx 36^\\circ 52'</span></div><br>Vậy độ dịch chuyển tổng hợp có độ lớn 5 km, hướng Đông - Bắc (lệch 36°52' về phía Bắc so với hướng Đông)."
        }
      ],
      note: "<strong>Nhận xét:</strong> Độ lớn độ dịch chuyển (5 km) luôn nhỏ hơn hoặc bằng quãng đường đi được (7 km). Dấu bằng chỉ xảy ra khi chuyển động thẳng một chiều không đổi hướng."
    }
  },
  {
    id: "essay-5-1",
    lessonId: "bai-5",
    lessonNumber: 5,
    lessonTitle: "Tốc độ và vận tốc",
    title: "Bài 3: Tính tốc độ trung bình trên hai nửa quãng đường",
    difficulty: "Thông hiểu",
    problem: "Một chiếc ô tô di chuyển trên một đoạn đường thẳng AB dài 120 km. Trong nửa quãng đường đầu xe chạy với tốc độ không đổi <span data-math=\"inline\">v_1 = 60\\text{ km/h}</span>. Trong nửa quãng đường còn lại xe chạy với tốc độ không đổi <span data-math=\"inline\">v_2 = 40\\text{ km/h}</span>.<br><strong>a)</strong> Tính thời gian xe đi trong nửa quãng đường đầu và nửa quãng đường sau.<br><strong>b)</strong> Tính tốc độ trung bình của ô tô trên cả chặng đường AB.",
    given: [
      "Tổng quãng đường: <span data-math=\"inline\">s = 120\\text{ km}</span>",
      "Nửa quãng đường đầu: <span data-math=\"inline\">s_1 = \\frac{s}{2} = 60\\text{ km}</span> với tốc độ <span data-math=\"inline\">v_1 = 60\\text{ km/h}</span>",
      "Nửa quãng đường sau: <span data-math=\"inline\">s_2 = \\frac{s}{2} = 60\\text{ km}</span> với tốc độ <span data-math=\"inline\">v_2 = 40\\text{ km/h}</span>"
    ],
    hints: [
      "Tính thời gian \\(t_1 = \\frac{s_1}{v_1}\\) và \\(t_2 = \\frac{s_2}{v_2}\\).",
      "Tốc độ trung bình bằng tổng quãng đường chia cho tổng thời gian: \\(v_{tb} = \\frac{s}{t_1 + t_2}\\).",
      "Tuyệt đối không lấy trung bình cộng \\((60 + 40)/2\\) vì thời gian đi hai đoạn là khác nhau!"
    ],
    numericCheck: {
      label: "Nhập tốc độ trung bình trên cả chặng đường (km/h):",
      expected: 48,
      unit: "km/h"
    },
    solution: {
      steps: [
        {
          title: "a) Thời gian ô tô chạy trên từng đoạn đường:",
          content: "• Thời gian đi nửa quãng đường đầu:<br><div class=\"text-center my-2\"><span data-math=\"display\">t_1 = \\frac{s_1}{v_1} = \\frac{60}{60} = 1\\text{ h}</span></div><br>• Thời gian đi nửa quãng đường sau:<br><div class=\"text-center my-2\"><span data-math=\"display\">t_2 = \\frac{s_2}{v_2} = \\frac{60}{40} = 1,5\\text{ h}</span></div><br>• Tổng thời gian xe chạy hết quãng đường AB:<br><div class=\"text-center my-2\"><span data-math=\"display\">t = t_1 + t_2 = 1 + 1,5 = 2,5\\text{ h}</span></div>"
        },
        {
          title: "b) Tốc độ trung bình trên toàn bộ quãng đường AB:",
          content: "Theo định nghĩa tốc độ trung bình:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">v_{tb} = \\frac{s}{t} = \\frac{s}{t_1 + t_2} = \\frac{120}{2,5} = 48\\text{ km/h}</span></div><br><em>Công thức tổng quát cho bài toán chia nửa quãng đường:</em><br><div class=\"text-center my-2\"><span data-math=\"display\">v_{tb} = \\frac{2v_1 v_2}{v_1 + v_2} = \\frac{2 \\cdot 60 \\cdot 40}{60 + 40} = \\frac{4800}{100} = 48\\text{ km/h}</span></div>"
        }
      ],
      note: "<strong>Cảnh báo bẫy sai lầm:</strong> Rất nhiều học sinh nhầm lẫn tính trung bình cộng <span data-math=\"inline\">\\frac{60 + 40}{2} = 50\\text{ km/h}</span>. Điều này chỉ đúng khi vật chuyển động trong hai khoảng <em>thời gian</em> bằng nhau, còn khi hai <em>quãng đường</em> bằng nhau thì phải dùng công thức điều hòa."
    }
  },
  {
    id: "essay-5-2",
    lessonId: "bai-5",
    lessonNumber: 5,
    lessonTitle: "Tốc độ và vận tốc",
    title: "Bài 4: Chuyển động của ca nô trên sông (Cộng vận tốc)",
    difficulty: "Vận dụng",
    problem: "Một chiếc ca nô chạy xuôi dòng nước từ bến A đến bến B cách nhau 36 km hết 1 giờ. Khi ca nô chạy ngược dòng từ bến B về lại bến A thì hết 1,5 giờ. Coi vận tốc của ca nô đối với nước và vận tốc của nước đối với bờ sông là không đổi.<br><strong>a)</strong> Tính vận tốc của ca nô khi xuôi dòng và khi ngược dòng so với bờ sông.<br><strong>b)</strong> Tính vận tốc riêng của ca nô đối với dòng nước và vận tốc chảy của dòng nước đối với bờ sông.",
    given: [
      "Khoảng cách giữa hai bến: <span data-math=\"inline\">s = 36\\text{ km}</span>",
      "Thời gian xuôi dòng: <span data-math=\"inline\">t_{xuôi} = 1\\text{ h}</span>",
      "Thời gian ngược dòng: <span data-math=\"inline\">t_{ngược} = 1,5\\text{ h}</span>"
    ],
    hints: [
      "Gọi (1) là ca nô, (2) là dòng nước, (3) là bờ sông.",
      "Khi xuôi dòng: \\(v_{xuôi} = v_{1,3} = v_{1,2} + v_{2,3}\\).",
      "Khi ngược dòng: \\(v_{ngược} = v_{1,3}' = v_{1,2} - v_{2,3}\\).",
      "Giải hệ hai phương trình bậc nhất hai ẩn để tìm \\(v_{1,2}\\) và \\(v_{2,3}\\)."
    ],
    numericCheck: {
      label: "Nhập vận tốc riêng của ca nô đối với nước (km/h):",
      expected: 30,
      unit: "km/h"
    },
    solution: {
      steps: [
        {
          title: "a) Vận tốc của ca nô đối với bờ khi xuôi dòng và ngược dòng:",
          content: "• Khi xuôi dòng:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_{xuôi} = \\frac{s}{t_{xuôi}} = \\frac{36}{1} = 36\\text{ km/h}</span></div><br>• Khi ngược dòng:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_{ngược} = \\frac{s}{t_{ngược}} = \\frac{36}{1,5} = 24\\text{ km/h}</span></div>"
        },
        {
          title: "b) Vận tốc của ca nô đối với nước và của nước đối với bờ:",
          content: "Ký hiệu: (1) là ca nô, (2) là dòng nước, (3) là bờ sông.<br>Áp dụng công thức cộng vận tốc: <span data-math=\"inline\">\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}</span>.<br>• Khi xuôi dòng: <span data-math=\"inline\">v_{1,2} + v_{2,3} = 36</span> &nbsp; (1)<br>• Khi ngược dòng: <span data-math=\"inline\">v_{1,2} - v_{2,3} = 24</span> &nbsp; (2)<br><br>Cộng hai vế của (1) và (2):<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">2v_{1,2} = 36 + 24 = 60 \\implies v_{1,2} = 30\\text{ km/h}</span></div><br>Trừ hai vế của (1) và (2):<br><div class=\"text-center my-2 font-bold text-emerald-600 dark:text-emerald-400\"><span data-math=\"display\">2v_{2,3} = 36 - 24 = 12 \\implies v_{2,3} = 6\\text{ km/h}</span></div><br>Vậy vận tốc riêng của ca nô đối với nước là 30 km/h, vận tốc dòng chảy của nước đối với bờ là 6 km/h."
        }
      ],
      note: "<strong>Quy tắc nhớ nhanh:</strong> Vận tốc thuyền đối với nước bằng trung bình cộng vận tốc xuôi và ngược; vận tốc dòng nước bằng nửa hiệu của vận tốc xuôi và ngược."
    }
  },
  {
    id: "essay-7-1",
    lessonId: "bai-7",
    lessonNumber: 7,
    lessonTitle: "Đồ thị độ dịch chuyển – thời gian",
    title: "Bài 5: Khai thác đồ thị d – t của chuyển động thẳng",
    difficulty: "Thông hiểu",
    problem: "Một bạn đi xe đạp từ nhà đến thư viện tỉnh rồi quay về theo đường thẳng. Đồ thị độ dịch chuyển – thời gian (d – t) của chuyến đi gồm 3 giai đoạn:<br>• <strong>Giai đoạn 1:</strong> Từ <span data-math=\"inline\">t = 0</span> đến <span data-math=\"inline\">t = 0,5\\text{ h}</span>, độ dịch chuyển tăng đều từ 0 đến 10 km.<br>• <strong>Giai đoạn 2:</strong> Từ <span data-math=\"inline\">t = 0,5\\text{ h}</span> đến <span data-math=\"inline\">t = 1,5\\text{ h}</span>, đồ thị là đoạn nằm ngang ứng với <span data-math=\"inline\">d = 10\\text{ km}</span>.<br>• <strong>Giai đoạn 3:</strong> Từ <span data-math=\"inline\">t = 1,5\\text{ h}</span> đến <span data-math=\"inline\">t = 2,5\\text{ h}</span>, độ dịch chuyển giảm đều từ 10 km về 0.<br><strong>a)</strong> Mô tả tính chất chuyển động và tính vận tốc của xe trong từng giai đoạn.<br><strong>b)</strong> Tính quãng đường đi được và vận tốc trung bình của bạn đó trong toàn bộ 2,5 h.",
    given: [
      "Giai đoạn 1: <span data-math=\"inline\">\\Delta t_1 = 0,5\\text{ h}, \\Delta d_1 = 10 - 0 = 10\\text{ km}</span>",
      "Giai đoạn 2: <span data-math=\"inline\">\\Delta t_2 = 1,0\\text{ h}, d = 10\\text{ km}\\text{ (không đổi)}</span>",
      "Giai đoạn 3: <span data-math=\"inline\">\\Delta t_3 = 1,0\\text{ h}, \\Delta d_3 = 0 - 10 = -10\\text{ km}</span>"
    ],
    hints: [
      "Hệ số góc của đồ thị d - t biểu thị vận tốc: \\(v = \\frac{\\Delta d}{\\Delta t}\\).",
      "Đoạn nằm ngang biểu thị vật đứng yên.",
      "Vận tốc mang dấu âm khi vật chuyển động theo chiều ngược chiều dương.",
      "Vận tốc trung bình bằng độ dịch chuyển chia thời gian, khác với tốc độ trung bình bằng quãng đường chia thời gian."
    ],
    numericCheck: {
      label: "Nhập tốc độ trung bình cả chuyến đi (km/h):",
      expected: 8,
      unit: "km/h"
    },
    solution: {
      steps: [
        {
          title: "a) Vận tốc trong từng giai đoạn:",
          content: "• <strong>Giai đoạn 1 (0 -> 0,5 h):</strong> Đoạn dốc lên thẳng đều theo chiều dương:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_1 = \\frac{\\Delta d_1}{\\Delta t_1} = \\frac{10 - 0}{0,5 - 0} = +20\\text{ km/h}</span></div><br>• <strong>Giai đoạn 2 (0,5 -> 1,5 h):</strong> Đoạn thẳng nằm ngang song song trục Ot, vị trí không đổi:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_2 = 0\\text{ km/h} \\quad \\text{(xe dừng lại đọc sách tại thư viện)}</span></div><br>• <strong>Giai đoạn 3 (1,5 -> 2,5 h):</strong> Đoạn dốc xuống thẳng đều ngược chiều dương về nhà:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_3 = \\frac{\\Delta d_3}{\\Delta t_3} = \\frac{0 - 10}{2,5 - 1,5} = \\frac{-10}{1} = -20\\text{ km/h}</span></div>(Dấu âm chỉ rõ xe đang chuyển động ngược chiều dương đã chọn)."
        },
        {
          title: "b) Quãng đường và vận tốc trung bình cả chuyến đi (2,5 h):",
          content: "• Tổng quãng đường đi được:<br><div class=\"text-center my-2\"><span data-math=\"display\">s = s_1 + s_2 + s_3 = 10 + 0 + 10 = 20\\text{ km}</span></div><br>• Độ dịch chuyển tổng hợp sau 2,5 h (quay về nhà):<br><div class=\"text-center my-2\"><span data-math=\"display\">d = x_{cuối} - x_{đầu} = 0 - 0 = 0\\text{ km}</span></div><br>• Tốc độ trung bình:<br><div class=\"text-center my-2 font-bold text-emerald-600 dark:text-emerald-400\"><span data-math=\"display\">v = \\frac{s}{t} = \\frac{20}{2,5} = 8\\text{ km/h}</span></div><br>• Vận tốc trung bình:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">v_{tb} = \\frac{d}{t} = \\frac{0}{2,5} = 0\\text{ km/h}</span></div>"
        }
      ],
      note: "<strong>Điểm mấu chốt:</strong> Vận tốc là đại lượng vectơ có thể mang giá trị âm hoặc bằng 0, còn tốc độ trung bình là đại lượng vô hướng luôn dương."
    }
  },
  {
    id: "essay-8-1",
    lessonId: "bai-8",
    lessonNumber: 8,
    lessonTitle: "Chuyển động biến đổi. Gia tốc",
    title: "Bài 6: Xác định gia tốc của xe máy khi hãm phanh",
    difficulty: "Cơ bản",
    problem: "Một người điều khiển xe máy đang chuyển động thẳng đều với vận tốc 54 km/h thì nhìn thấy chướng ngại vật phía trước và hãm phanh. Sau 10 s kể từ lúc hãm phanh, vận tốc xe giảm xuống còn 18 km/h.<br><strong>a)</strong> Đổi các giá trị vận tốc ra đơn vị chuẩn SI (m/s).<br><strong>b)</strong> Tính gia tốc của xe máy trong quá trình hãm phanh.<br><strong>c)</strong> Nhận xét về hướng của vectơ gia tốc so với hướng của vectơ vận tốc.",
    given: [
      "Vận tốc ban đầu: <span data-math=\"inline\">v_0 = 54\\text{ km/h}</span>",
      "Thời gian hãm phanh: <span data-math=\"inline\">t = 10\\text{ s}</span>",
      "Vận tốc sau 10 s: <span data-math=\"inline\">v = 18\\text{ km/h}</span>"
    ],
    hints: [
      "Chia cho 3,6 để đổi từ km/h sang m/s: \\(1\\text{ m/s} = 3,6\\text{ km/h}\\).",
      "Công thức tính gia tốc: \\(a = \\frac{v - v_0}{t}\\).",
      "Trong chuyển động chậm dần đều, tích \\(a \\cdot v < 0\\), vectơ gia tốc ngược chiều vectơ vận tốc."
    ],
    numericCheck: {
      label: "Nhập độ lớn gia tốc của xe (m/s²):",
      expected: 1,
      unit: "m/s²"
    },
    solution: {
      steps: [
        {
          title: "a) Đổi đơn vị vận tốc sang chuẩn SI (m/s):",
          content: "• <span data-math=\"inline\">v_0 = 54\\text{ km/h} = \\frac{54}{3,6} = 15\\text{ m/s}</span><br>• <span data-math=\"inline\">v = 18\\text{ km/h} = \\frac{18}{3,6} = 5\\text{ m/s}</span>"
        },
        {
          title: "b) Tính gia tốc của xe máy:",
          content: "Chọn chiều dương là chiều chuyển động của xe máy.<br>Gia tốc của xe:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">a = \\frac{v - v_0}{t} = \\frac{5 - 15}{10} = \\frac{-10}{10} = -1\\text{ m/s}^2</span></div>"
        },
        {
          title: "c) Nhận xét về vectơ gia tốc:",
          content: "Vì <span data-math=\"inline\">a = -1\\text{ m/s}^2 < 0</span> và <span data-math=\"inline\">v > 0</span> nên tích <span data-math=\"inline\">a \\cdot v = (-1) \\cdot 5 = -5 < 0</span>.<br>Do đó, xe chuyển động chậm dần đều, vectơ gia tốc <span data-math=\"inline\">\\vec{a}</span> ngược chiều với vectơ vận tốc <span data-math=\"inline\">\\vec{v}</span> (ngược chiều chuyển động)."
        }
      ],
      note: "<strong>Lưu ý dấu:</strong> Gia tốc âm không có nghĩa là vật chuyển động lùi lại, mà nó thể hiện gia tốc có chiều ngược với chiều dương đã chọn. Khi vật chuyển động chậm dần đều theo chiều dương thì a luôn âm."
    }
  },
  {
    id: "essay-9-1",
    lessonId: "bai-9",
    lessonNumber: 9,
    lessonTitle: "Chuyển động thẳng biến đổi đều",
    title: "Bài 7: Chuyển động chậm dần đều và quãng đường hãm phanh",
    difficulty: "Vận dụng",
    problem: "Một đoàn tàu hỏa chở khách đang chạy với vận tốc 72 km/h thì người lái tàu phát hiện tín hiệu đèn đỏ phía trước và bắt đầu hãm phanh. Tàu chuyển động chậm dần đều với gia tốc có độ lớn 0,5 m/s² cho đến khi dừng lại hẳn.<br><strong>a)</strong> Tính thời gian kể từ thời điểm hãm phanh đến khi đoàn tàu dừng lại hẳn.<br><strong>b)</strong> Tính quãng đường đoàn tàu còn đi thêm được trong thời gian hãm phanh.<br><strong>c)</strong> Tính vận tốc của đoàn tàu sau khi hãm phanh được một nửa quãng đường dừng.",
    given: [
      "Vận tốc đầu: <span data-math=\"inline\">v_0 = 72\\text{ km/h} = 20\\text{ m/s}</span>",
      "Vận tốc cuối khi dừng hẳn: <span data-math=\"inline\">v = 0\\text{ m/s}</span>",
      "Gia tốc: <span data-math=\"inline\">a = -0,5\\text{ m/s}^2</span> (chậm dần đều)"
    ],
    hints: [
      "Áp dụng phương trình vận tốc \\(v = v_0 + at \\implies t = \\frac{v - v_0}{a}\\).",
      "Áp dụng công thức độc lập thời gian: \\(v^2 - v_0^2 = 2as \\implies s = \\frac{v^2 - v_0^2}{2a}\\).",
      "Để tính vận tốc tại nửa quãng đường \\(s' = s/2\\), dùng lại công thức độc lập: \\(v'^2 - v_0^2 = 2as'\\)."
    ],
    numericCheck: {
      label: "Nhập quãng đường tàu đi được từ khi phanh đến khi dừng (m):",
      expected: 400,
      unit: "m"
    },
    solution: {
      steps: [
        {
          title: "a) Thời gian từ khi phanh đến khi tàu dừng lại hẳn:",
          content: "Chọn chiều dương là chiều chuyển động của đoàn tàu.<br>Đổi <span data-math=\"inline\">v_0 = 72\\text{ km/h} = \\frac{72}{3,6} = 20\\text{ m/s}</span>.<br>Vì tàu chuyển động chậm dần đều nên <span data-math=\"inline\">a = -0,5\\text{ m/s}^2</span>. Khi tàu dừng hẳn thì <span data-math=\"inline\">v = 0</span>.<br>Áp dụng công thức vận tốc:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">v = v_0 + at \\implies t = \\frac{v - v_0}{a} = \\frac{0 - 20}{-0,5} = 40\\text{ s}</span></div>"
        },
        {
          title: "b) Quãng đường hãm phanh của đoàn tàu:",
          content: "Áp dụng hệ thức liên hệ độc lập với thời gian:<br><div class=\"text-center my-2 font-bold text-emerald-600 dark:text-emerald-400\"><span data-math=\"display\">v^2 - v_0^2 = 2as \\implies s = \\frac{v^2 - v_0^2}{2a} = \\frac{0^2 - 20^2}{2 \\cdot (-0,5)} = \\frac{-400}{-1} = 400\\text{ m}</span></div><br><em>Cách khác:</em> Dùng công thức <span data-math=\"inline\">s = v_0 t + \\frac{1}{2}at^2 = 20 \\cdot 40 + \\frac{1}{2}(-0,5)(40)^2 = 800 - 400 = 400\\text{ m}</span>."
        },
        {
          title: "c) Vận tốc của tàu sau khi đi được nửa quãng đường hãm phanh (s' = 200 m):",
          content: "Áp dụng công thức liên hệ khi <span data-math=\"inline\">s' = 200\\text{ m}</span>:<br><div class=\"text-center my-2\"><span data-math=\"display\">v'^2 - v_0^2 = 2as' \\implies v'^2 = v_0^2 + 2as' = 20^2 + 2(-0,5)(200) = 400 - 200 = 200</span></div><br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">v' = \\sqrt{200} \\approx 14,14\\text{ m/s} \\approx 50,9\\text{ km/h}</span></div>"
        }
      ],
      note: "<strong>Nhận xét:</strong> Sau khi đi hết 1/2 quãng đường hãm phanh, vận tốc tàu chỉ giảm từ 20 m/s xuống 14,14 m/s (chứ không phải giảm về 10 m/s), vì giai đoạn đầu tàu chạy với tốc độ cao hơn giai đoạn sau."
    }
  },
  {
    id: "essay-9-2",
    lessonId: "bai-9",
    lessonNumber: 9,
    lessonTitle: "Chuyển động thẳng biến đổi đều",
    title: "Bài 8: Quãng đường đi được trong giây thứ n",
    difficulty: "Vận dụng",
    problem: "Một chiếc xe ô tô xuất phát từ trạng thái nghỉ (<span data-math=\"inline\">v_0 = 0</span>), chuyển động thẳng nhanh dần đều trên một đường thẳng với gia tốc không đổi <span data-math=\"inline\">a = 2\\text{ m/s}^2</span>.<br><strong>a)</strong> Tính vận tốc và quãng đường xe đi được sau 4 giây đầu tiên.<br><strong>b)</strong> Tính quãng đường xe đi được sau 5 giây đầu tiên.<br><strong>c)</strong> Từ đó tính quãng đường xe đi được riêng trong giây thứ 5.",
    given: [
      "Vận tốc khởi hành: <span data-math=\"inline\">v_0 = 0</span>",
      "Gia tốc: <span data-math=\"inline\">a = 2\\text{ m/s}^2</span>",
      "Thời điểm xét: <span data-math=\"inline\">t_1 = 4\\text{ s}</span> và <span data-math=\"inline\">t_2 = 5\\text{ s}</span>"
    ],
    hints: [
      "Quãng đường đi trong t giây: \\(s = \\frac{1}{2} a t^2\\).",
      "Quãng đường đi trong giây thứ 5 là hiệu quãng đường đi sau 5 giây và sau 4 giây: \\(\\Delta s_5 = s_5 - s_4\\)."
    ],
    numericCheck: {
      label: "Nhập quãng đường đi được riêng trong giây thứ 5 (m):",
      expected: 9,
      unit: "m"
    },
    solution: {
      steps: [
        {
          title: "a) Vận tốc và quãng đường sau 4 giây đầu tiên:",
          content: "• Vận tốc sau 4 s:<br><div class=\"text-center my-2\"><span data-math=\"display\">v_4 = at_1 = 2 \\cdot 4 = 8\\text{ m/s}</span></div><br>• Quãng đường đi được trong 4 s đầu:<br><div class=\"text-center my-2\"><span data-math=\"display\">s_4 = \\frac{1}{2} a t_1^2 = \\frac{1}{2} \\cdot 2 \\cdot 4^2 = 16\\text{ m}</span></div>"
        },
        {
          title: "b) Quãng đường sau 5 giây đầu tiên:",
          content: "Áp dụng công thức quãng đường với <span data-math=\"inline\">t_2 = 5\\text{ s}</span>:<br><div class=\"text-center my-2\"><span data-math=\"display\">s_5 = \\frac{1}{2} a t_2^2 = \\frac{1}{2} \\cdot 2 \\cdot 5^2 = 25\\text{ m}</span></div>"
        },
        {
          title: "c) Quãng đường đi được riêng trong giây thứ 5:",
          content: "Quãng đường vật đi được trong giây thứ 5 chính là phần quãng đường đi thêm từ thời điểm <span data-math=\"inline\">t = 4\\text{ s}</span> đến <span data-math=\"inline\">t = 5\\text{ s}</span>:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">\\Delta s_5 = s_5 - s_4 = 25 - 16 = 9\\text{ m}</span></div><br><em>Công thức nhanh cho giây thứ n (khi v₀ = 0):</em><br><div class=\"text-center my-2\"><span data-math=\"display\">\\Delta s_n = a\\left(n - \\frac{1}{2}\\right) = 2 \\cdot \\left(5 - 0,5\\right) = 9\\text{ m}</span></div>"
        }
      ],
      note: "<strong>Phân biệt quan trọng:</strong> 'Quãng đường trong 5 giây' là <span data-math=\"inline\">s_5 = 25\\text{ m}</span> (tính từ t = 0 đến t = 5 s). Còn 'Quãng đường trong giây thứ 5' là <span data-math=\"inline\">\\Delta s_5 = 9\\text{ m}</span> (chỉ tính trong khoảng thời gian từ t = 4 s đến t = 5 s, độ dài 1 s)."
    }
  },
  {
    id: "essay-10-1",
    lessonId: "bai-10",
    lessonNumber: 10,
    lessonTitle: "Sự rơi tự do",
    title: "Bài 9: Thả rơi tự do và quãng đường trong giây cuối",
    difficulty: "Vận dụng",
    problem: "Thả rơi tự do một hòn sỏi từ đỉnh một tòa tháp cao 80 m so với mặt đất. Lấy gia tốc rơi tự do <span data-math=\"inline\">g = 10\\text{ m/s}^2</span>. Bỏ qua mọi sức cản của không khí.<br><strong>a)</strong> Tính thời gian hòn sỏi rơi chạm đất.<br><strong>b)</strong> Tính vận tốc của hòn sỏi ngay trước khi chạm đất.<br><strong>c)</strong> Tính quãng đường hòn sỏi rơi được trong 1 giây cuối cùng trước khi chạm đất.",
    given: [
      "Độ cao thả rơi: <span data-math=\"inline\">h = 80\\text{ m}</span>",
      "Gia tốc trọng trường: <span data-math=\"inline\">g = 10\\text{ m/s}^2</span>",
      "Vận tốc đầu: <span data-math=\"inline\">v_0 = 0</span>"
    ],
    hints: [
      "Thời gian rơi: \\(t = \\sqrt{\\frac{2h}{g}}\\).",
      "Vận tốc chạm đất: \\(v = gt = \\sqrt{2gh}\\).",
      "Quãng đường trong 1 s cuối bằng tổng độ cao trừ đi quãng đường rơi trong (t - 1) giây đầu."
    ],
    numericCheck: {
      label: "Nhập quãng đường rơi trong giây cuối cùng (m):",
      expected: 35,
      unit: "m"
    },
    solution: {
      steps: [
        {
          title: "a) Thời gian rơi của hòn sỏi chạm đất:",
          content: "Chọn trục Oy thẳng đứng hướng xuống, gốc O tại vị trí thả.<br>Áp dụng công thức tính thời gian rơi tự do:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{2 \\cdot 80}{10}} = \\sqrt{16} = 4\\text{ s}</span></div>"
        },
        {
          title: "b) Vận tốc của hòn sỏi ngay trước khi chạm đất:",
          content: "Áp dụng công thức vận tốc rơi tự do:<br><div class=\"text-center my-2 font-bold text-emerald-600 dark:text-emerald-400\"><span data-math=\"display\">v = g \\cdot t = 10 \\cdot 4 = 40\\text{ m/s}</span></div><br><em>Hoặc tính qua hệ thức độc lập:</em><br><div class=\"text-center my-2\"><span data-math=\"display\">v = \\sqrt{2gh} = \\sqrt{2 \\cdot 10 \\cdot 80} = \\sqrt{1600} = 40\\text{ m/s}</span></div>"
        },
        {
          title: "c) Quãng đường rơi trong 1 giây cuối cùng trước khi chạm đất:",
          content: "Tổng thời gian rơi là <span data-math=\"inline\">t = 4\\text{ s}</span>. Vậy 1 giây cuối cùng là khoảng thời gian từ <span data-math=\"inline\">t_1 = 3\\text{ s}</span> đến <span data-math=\"inline\">t_2 = 4\\text{ s}</span>.<br>• Quãng đường hòn sỏi rơi trong 3 s đầu:<br><div class=\"text-center my-2\"><span data-math=\"display\">h_3 = \\frac{1}{2} g t_1^2 = \\frac{1}{2} \\cdot 10 \\cdot 3^2 = 45\\text{ m}</span></div><br>• Quãng đường rơi trong 1 giây cuối cùng:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">\\Delta h_{cuối} = h - h_3 = 80 - 45 = 35\\text{ m}</span></div>"
        }
      ],
      note: "<strong>Nhận xét:</strong> Quãng đường rơi trong các giây liên tiếp của vật rơi tự do tuân theo tỉ lệ các số lẻ liên tiếp: 5m, 15m, 25m, 35m... Vì vậy trong giây thứ 4, quãng đường rơi đúng bằng 35m."
    }
  },
  {
    id: "essay-12-1",
    lessonId: "bai-12",
    lessonNumber: 12,
    lessonTitle: "Chuyển động ném",
    title: "Bài 10: Chuyển động ném ngang từ đỉnh vách đá",
    difficulty: "Vận dụng cao",
    problem: "Từ đỉnh một vách đá cao 45 m so với mặt biển, một người ném một hòn đá nhỏ theo phương nằm ngang với vận tốc ban đầu <span data-math=\"inline\">v_0 = 20\\text{ m/s}</span>. Lấy <span data-math=\"inline\">g = 10\\text{ m/s}^2</span> và bỏ qua sức cản của không khí.<br><strong>a)</strong> Viết phương trình quỹ đạo của hòn đá.<br><strong>b)</strong> Tính thời gian chuyển động và tầm bay xa L của hòn đá khi vừa chạm mặt biển.<br><strong>c)</strong> Tính độ lớn vận tốc và góc chạm mặt biển của hòn đá.",
    given: [
      "Độ cao ném: <span data-math=\"inline\">H = 45\\text{ m}</span>",
      "Vận tốc ném ngang: <span data-math=\"inline\">v_0 = 20\\text{ m/s}</span>",
      "Gia tốc trọng trường: <span data-math=\"inline\">g = 10\\text{ m/s}^2</span>"
    ],
    hints: [
      "Chọn hệ trục tọa độ Oxy: O tại vị trí ném, Ox nằm ngang theo chiều \\(v_0\\), Oy thẳng đứng hướng xuống.",
      "Phương trình quỹ đạo: \\(y = \\frac{g}{2 v_0^2} x^2\\).",
      "Thời gian rơi: \\(t = \\sqrt{\\frac{2H}{g}}\\), Tầm xa: \\(L = x_{max} = v_0 t\\).",
      "Vận tốc chạm biển tổng hợp từ \\(v_x = v_0\\) và \\(v_y = gt\\): \\(v = \\sqrt{v_x^2 + v_y^2}\\)."
    ],
    numericCheck: {
      label: "Nhập tầm bay xa L của hòn đá (m):",
      expected: 60,
      unit: "m"
    },
    solution: {
      steps: [
        {
          title: "a) Thiết lập hệ tọa độ và phương trình quỹ đạo:",
          content: "Chọn hệ trục tọa độ Oxy: Gốc O tại vị trí ném, trục Ox nằm ngang hướng theo hướng ném, trục Oy thẳng đứng hướng xuống dưới. Gốc thời gian lúc ném vật.<br>• Theo phương Ox (chuyển động thẳng đều): <span data-math=\"inline\">x = v_0 t = 20t \\implies t = \\frac{x}{20}</span><br>• Theo phương Oy (chuyển động rơi tự do): <span data-math=\"inline\">y = \\frac{1}{2}gt^2 = 5t^2</span><br>Thay <span data-math=\"inline\">t = \\frac{x}{20}</span> vào phương trình y ta được phương trình quỹ đạo:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">y = \\frac{g}{2v_0^2} x^2 = \\frac{10}{2 \\cdot 20^2} x^2 = \\frac{1}{80} x^2 = 0,0125 x^2 \\quad (x \\ge 0)</span></div>Quỹ đạo là một nhánh parabol có đỉnh tại O."
        },
        {
          title: "b) Thời gian chuyển động và tầm bay xa L:",
          content: "Khi chạm mặt biển thì <span data-math=\"inline\">y = H = 45\\text{ m}</span>.<br>• Thời gian rơi:<br><div class=\"text-center my-2\"><span data-math=\"display\">t = \\sqrt{\\frac{2H}{g}} = \\sqrt{\\frac{2 \\cdot 45}{10}} = \\sqrt{9} = 3\\text{ s}</span></div><br>• Tầm bay xa của hòn đá:<br><div class=\"text-center my-2 font-bold text-emerald-600 dark:text-emerald-400\"><span data-math=\"display\">L = x_{max} = v_0 t = 20 \\cdot 3 = 60\\text{ m}</span></div>"
        },
        {
          title: "c) Vận tốc khi chạm mặt biển:",
          content: "Các thành phần vận tốc tại thời điểm chạm biển (<span data-math=\"inline\">t = 3\\text{ s}</span>):<br>• Thành phần nằm ngang: <span data-math=\"inline\">v_x = v_0 = 20\\text{ m/s}</span><br>• Thành phần thẳng đứng: <span data-math=\"inline\">v_y = gt = 10 \\cdot 3 = 30\\text{ m/s}</span><br>Độ lớn vận tốc tổng hợp khi chạm mặt biển:<br><div class=\"text-center my-2 font-bold text-indigo-600 dark:text-indigo-400\"><span data-math=\"display\">v = \\sqrt{v_x^2 + v_y^2} = \\sqrt{20^2 + 30^2} = \\sqrt{400 + 900} = \\sqrt{1300} \\approx 36,06\\text{ m/s}</span></div><br>• Góc chạm mặt biển so với phương ngang:<br><div class=\"text-center my-2\"><span data-math=\"display\">\\tan\\alpha = \\frac{v_y}{v_x} = \\frac{30}{20} = 1,5 \\implies \\alpha \\approx 56^\\circ 19'</span></div>"
        }
      ],
      note: "<strong>Đặc điểm ném ngang:</strong> Thời gian rơi của vật ném ngang chỉ phụ thuộc vào độ cao H ban đầu (bằng đúng thời gian rơi tự do từ cùng độ cao), không phụ thuộc vào vận tốc ném v₀."
    }
  }
];

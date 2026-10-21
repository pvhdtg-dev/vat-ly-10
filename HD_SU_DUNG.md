# HƯỚNG DẪN SỬ DỤNG ỨNG DỤNG HỌC TẬP VẬT LÍ 10
## Chương II: Động Học (Bộ Sách Kết Nối Tri Thức Với Cuộc Sống)

Ứng dụng được thiết kế chuyên biệt dành cho học sinh lớp 10 học lý thuyết, tra cứu công thức, mô phỏng thí nghiệm và làm bài tập trắc nghiệm - tự luận tương tác bám sát **Chương II (Trang 20 - 54 SGK Vật lí 10)**.

---

### 1. Cách Khởi Động Ứng Dụng
Bạn có thể mở ứng dụng theo 1 trong các cách sau:

- **Cách 1 (Nhanh nhất & Không cần cổng mạng):** Nhấp đúp chuột vào file **`Mo_Ung_Dung.bat`** hoặc mở trực tiếp file [index.html](file:///d:/t%C3%A0i%20li%E1%BB%87u/V%E1%BA%ADt%20L%C3%BD%2010/index.html) bằng bất kỳ trình duyệt nào (Chrome, Edge, Cốc Cốc...). Cách này chạy trực tiếp không sử dụng cổng mạng nào, hoàn toàn không lo trùng cổng.
- **Cách 2 (Chạy qua máy chủ nội bộ):** Nhấp đúp chuột vào file **`Chay_May_Chu.bat`** hoặc gõ lệnh:
  ```powershell
  python server.py
  ```
  Hệ thống sẽ **tự động tìm cổng trống** (bắt đầu từ **8088**, hoàn toàn tránh cổng 8000 và 8080) và tự động mở trình duyệt web tại `http://localhost:8088/index.html`.

---

### 2. Các Phân Hệ Tính Năng Chính Trong App

#### 📖 1. Thư Viện Lý Thuyết Chuyên Sâu (9 Bài học)
Bao quát toàn bộ 9 bài học trong SGK từ Bài 4 đến Bài 12:
- **Bài 4:** Độ dịch chuyển và quãng đường đi được *(Khái niệm chất điểm, hệ quy chiếu, quy tắc tổng hợp vectơ)*
- **Bài 5:** Tốc độ và vận tốc *(Tốc độ trung bình, tốc độ tức thời, vectơ vận tốc, công thức cộng vận tốc)*
- **Bài 6:** Thực hành: Đo tốc độ của vật chuyển động *(Đồng hồ MC-964, cổng quang điện, xử lý sai số)*
- **Bài 7:** Đồ thị độ dịch chuyển – thời gian *(Đồ thị d - t, xác định chiều chuyển động và tính vận tốc từ độ dốc)*
- **Bài 8:** Chuyển động biến đổi. Gia tốc *(Định nghĩa gia tốc a = Δv/Δt, tính chất vectơ, quy tắc dấu a và v)*
- **Bài 9:** Chuyển động thẳng biến đổi đều *(Bộ 4 công thức kinh điển v_t, d, v² - v₀² = 2ad, đồ thị v - t)*
- **Bài 10:** Sự rơi tự do *(Thí nghiệm Newton ống chân không, đặc điểm rơi tự do, gia tốc g)*
- **Bài 11:** Thực hành: Đo gia tốc rơi tự do *(Bộ thí nghiệm máng đứng, nam châm điện, đồ thị s - t²)*
- **Bài 12:** Chuyển động ném *(Khảo sát ném ngang và ném xiên, tính tầm cao cực đại H và tầm xa L)*

*Mỗi bài học đều có: Mục tiêu cần đạt, tóm tắt lý thuyết, bảng so sánh trực quan, công thức KaTeX toán học đóng khung, và ví dụ thực tế trong SGK.*

---

#### ✍️ 2. Hệ Thống Luyện Tập & Bài Tập Trắc Nghiệm Tương Tác
- **Ngân hàng câu hỏi phong phú** được phân loại theo từng bài học (Bài 4 - 12) và chuẩn 4 mức độ nhận thức:
  - *Nhận biết*
  - *Thông hiểu*
  - *Vận dụng*
  - *Vận dụng cao*
- **Đầy đủ các dạng đề thi theo định dạng mới của Bộ Giáo dục & Đào tạo:**
  1. Trắc nghiệm nhiều lựa chọn (A, B, C, D)
  2. Trắc nghiệm Đúng / Sai (Định dạng đề thi tốt nghiệp THPT từ năm 2025)
  3. Trả lời ngắn / Điền số kết quả (Dạng câu hỏi tính toán mới 2025)
- **2 Chế độ làm bài:**
  - **Luyện tập tự do:** Làm từng câu, bấm *Kiểm tra đáp án* để xem ngay lời giải chi tiết từng bước, công thức áp dụng và âm thanh phản hồi.
  - **Thi thử tính giờ (15 phút):** Có đồng hồ đếm ngược, tự động chấm điểm thang 10, xếp loại học lực (Xuất sắc, Giỏi, Khá, Cần cố gắng) và hiệu ứng pháo hoa khi đạt điểm cao!

---

#### 🔬 3. Phòng Thí Nghiệm Ảo & Mô Phỏng Vật Lý
Trực quan hóa các hiện tượng vật lý trừu tượng bằng HTML5 Canvas:
1. **Mô phỏng 1 - Chuyển động thẳng biến đổi đều:** Tùy chỉnh vận tốc đầu $v_0$ và gia tốc $a$, xem xe chuyển động và đồ thị $v(t), d(t)$ được vẽ trực tiếp theo thời gian thực.
2. **Mô phỏng 2 - Ống chân không Newton & Rơi tự do:** Thả đồng thời viên bi thép và lông chim trong điều kiện *Có không khí* vs *Hút chân không* để học sinh tận mắt chứng kiến định luật rơi tự do.
3. **Mô phỏng 3 - Bắn pháo Ném xiên & Ném ngang:** Điều chỉnh góc bắn $\alpha$, vận tốc $v_0$ và độ cao bệ phóng $H$, quan sát quỹ đạo parabol và kiểm chứng góc ném $\alpha = 45^\circ$ cho tầm xa cực đại.

---

#### 📋 4. Sổ Tay Công Thức Toàn Chương
Bảng tra cứu nhanh toàn bộ công thức Động học kèm ghi chú ý nghĩa và đơn vị đo chuẩn SI.

---

#### 📊 5. Thống Kê Học Tập & Sổ Tay Câu Hỏi Sai (Mistake Notebook)
- Theo dõi tỉ lệ % lý thuyết đã học và độ chính xác khi làm bài tập.
- Tự động gom các câu hỏi học sinh làm sai vào **Sổ tay câu sai** để ôn tập và khắc phục lỗ hổng kiến thức.
- Lưu trữ toàn bộ tiến độ vào bộ nhớ trình duyệt (`localStorage`), không lo bị mất dữ liệu khi tải lại trang.

---

### 3. Cấu Trúc Thư Mục Dự Án
```
d:\tài liệu\Vật Lý 10\
  ├── index.html            # Giao diện chính của ứng dụng
  ├── Mo_Ung_Dung.bat       # File khởi động nhanh trên Windows
  ├── server.py             # Máy chủ web cục bộ Python
  ├── HD_SU_DUNG.md         # Tài liệu hướng dẫn sử dụng chi tiết
  ├── vatlyky1 lop 10.pdf   # Tài liệu gốc SGK Vật lí 10 (KNTT)
  ├── css\
  │     └── style.css       # Định kiểu giao diện, hiệu ứng và toán học
  └── js\
        ├── data.js         # Dữ liệu 9 bài học & ngân hàng bài tập
        ├── simulation.js   # 3 mô phỏng vật lý tương tác Canvas
        └── app.js          # Bộ điều khiển trung tâm, chấm điểm, âm thanh
```

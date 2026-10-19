# Project Status — v0.3.0

- Catalog: 106 helper (tăng 12 so với v0.2.0).
- JavaScript: 58 helper được đánh dấu done (26 nhóm gốc + 20 Date v0.2 + 12 Date v0.3).
- C# vẫn là skeleton / builtin hoặc todo theo metadata; chưa triển khai các helper Date mới bằng C#.
- Date v0.3: ISO week, IANA timezone, DST disambiguation, business days, configurable Vietnamese holiday list, working hours/minutes, interval intersection.
- Kiểm tra: catalog validator, docs/checklist generator, offline smoke (26), date v0.2 behavior (20), date v0.3 behavior (16).
- Vitest test files sẵn có nhưng `npm test` chưa chạy vì môi trường đóng gói không cài Vitest.
- Ngày lễ VN: `getVietnamHolidays` chỉ liệt kê 4 mốc dương lịch cố định, không tự khẳng định lịch nghỉ chính thức theo năm.

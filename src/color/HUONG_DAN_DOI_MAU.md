# Hướng dẫn đổi màu

Toàn bộ màu lấy từ **một file**: [`theme.ts`](./theme.ts).

## Cách đổi nhanh

1. Mở `src/color/theme.ts`.
2. Sửa mã hex trong object `colors`.
3. Lưu → `npm run dev`.

Không cần sửa `globals.css` — `layout.tsx` inject biến CSS tự động.

## Ý nghĩa từng màu

| Tên | Dùng cho |
|-----|----------|
| `ink` | Chữ chính, tiêu đề |
| `inkMuted` | Mô tả, bullet, thời gian |
| `surface` | Nền trang web |
| `accent` | Badge chức danh, tiêu đề section, nút In |
| `accentLight` | Icon, link phụ |
| `accentDark` | Gradient header (dự phòng) |
| `border` | Viền, kẻ ngăn |
| `highlight` | Nền sidebar, thẻ |

## Preset

Object `presets` có `green`, `purple`. Copy vào `colors` hoặc truyền vào `getThemeCssBlock(presets.green)` trong `layout.tsx`.

## In PDF

Khổ A4 đã cấu hình trong `globals.css` (`@media print`).

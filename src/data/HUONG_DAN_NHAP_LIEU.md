# Hướng dẫn nhập liệu — Basic CV

Mẫu CV **một trang**, hai cột — phù hợp IT, business tổng quát. Nội dung lấy từ **`src/data/cv.ts`**.

| Tuỳ chỉnh | File | Hướng dẫn |
|-----------|------|-----------|
| Nội dung CV | `src/data/cv.ts` | File này |
| Ảnh đại diện | `src/avatar/config.ts` | `src/avatar/HUONG_DAN_ANH_DAI_DIEN.md` |
| Màu sắc | `src/color/theme.ts` | `src/color/HUONG_DAN_DOI_MAU.md` |
| Font chữ | `src/font/config.ts` + `src/app/layout.tsx` | `src/font/HUONG_DAN_DOI_FONT.md` |

## Ngôn ngữ nhãn section

Đặt `personal.locale`: `"vi"` hoặc `"en"` trong `cv.ts`. Nhãn section chỉnh trong `src/components/CVPage.tsx` → object `labels`.

## Các khối dữ liệu trong `cv.ts`

| Khối | Ghi chú |
|------|---------|
| `personal` | Họ tên, chức danh, tagline, địa điểm, locale |
| `summary` | Tóm tắt 3–5 câu |
| `personalInfo` | Phương châm, kỹ năng mềm, sở thích, mong muốn — `""` / `[]` để ẩn |
| `contact` | Email, phone, LinkedIn… — mảng `{ label, href, icon }` |
| `experience` | Mới nhất trên cùng; `highlights` = bullet |
| `education` | Trường, bằng, thời gian |
| `skills` | `{ category, items[] }` — kỹ năng kỹ thuật |
| `projects` | `[]` để ẩn section |
| `certifications`, `languages`, `references` | `[]` để ẩn |
| `meta` | `siteTitle`, `description`, `siteUrl` — SEO |

## In PDF

Nút **In / PDF** hoặc Ctrl+P → A4. Toolbar có class `no-print`.

## Xem thay đổi

```bash
npm run dev
```

Mở http://localhost:3000

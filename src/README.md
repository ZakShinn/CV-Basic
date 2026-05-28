# Hướng dẫn chỉnh sửa CV & trang web

Mọi thứ bạn cần sửa là **các file** ngay trong `src/` (không có thư mục con `resume/`, `avatar/`, …).

## Các file cần biết

| File | Mục đích |
|------|----------|
| **`resume-basic.ts`** | Thông tin cơ bản: họ tên, tóm tắt, liên hệ, phương châm… |
| **`resume-advanced.ts`** | Nâng cao: kinh nghiệm, học vấn, dự án, chứng chỉ, SEO (`meta`) |
| **`resume.ts`** | Gộp dữ liệu (thường không cần sửa) |
| **`avatar.ts`** | Ảnh đại diện + favicon |
| **`color.ts`** | Mã màu hex toàn trang |
| **`font.ts`** | Font chữ (+ `app/layout.tsx` khi đổi Google Font) |
| **`config.ts`** | Bật/tắt section CV và nút toolbar (in, PDF, dịch, dark mode…) |

## Quy trình nhanh

1. `resume-basic.ts` — họ tên, liên hệ, tóm tắt  
2. `resume-advanced.ts` — kinh nghiệm, học vấn, `meta.siteUrl`  
3. `avatar.ts` + ảnh trong `public/avatar/`  
4. `color.ts` — đổi hex  
5. `font.ts` + `app/layout.tsx` — đổi font  
6. `config.ts` — ẩn mục / tắt nút không cần  
7. **Lưu** → **F5** trình duyệt  

---

## `resume-basic.ts`

| Khối | Ghi chú |
|------|---------|
| `personal` | `fullName`, `title`, `tagline`, `location` |
| `summary` | 3–5 câu |
| `personalInfo` | `motto`, `softSkills`, `interests`, `aspirations` — `""` / `[]` để ẩn |
| `contact` | `{ label, href, icon }` — `email`, `phone`, `location`, `linkedin`, `github`, `website` |

## `resume-advanced.ts`

| Khối | Ghi chú |
|------|---------|
| `experience` | Mới nhất trên cùng; bullet có số liệu |
| `education`, `skills` | |
| `projects`, `certifications`, `languages`, `references` | `[]` để ẩn |
| `meta` | `siteTitle`, `description`, `siteUrl` — SEO |

**Chỉ nhập tiếng Việt.** Bấm **English** trên web để dịch tự động.

## `avatar.ts`

1. Đặt ảnh vào `public/avatar/`  
2. Sửa `src: "/avatar/ten-file.jpg"`  
3. `enabled: false` → hiện chữ cái đầu tên thay ảnh  

## `color.ts`

Sửa object `colors` (hex). Preset `green`, `purple` trong `presets` — copy vào `colors` nếu muốn.

## `font.ts`

1. Chọn font trên [Google Fonts](https://fonts.google.com/) (có Vietnamese)  
2. Sửa `family` trong `font.ts`  
3. Đổi import trong `app/layout.tsx` cho khớp `nextFontId`  

## `config.ts`

| `mode` | `full` = đầy đủ · `basic` = ẩn personalInfo, projects, certifications, references |
| `sections.*` | `false` = không hiện khối đó |
| `features.*` | Tắt nút dịch, dark mode, in, PDF, DOCX, thanh accent, footer |
| `features.allowSearchIndexing` | `false` (mặc định) = chặn Google index · `true` = cho phép tìm kiếm |

## In & deploy

- **Ctrl+P** / **In CV** → A4, bật *In nền*  
- Deploy Vercel → cập nhật `meta.siteUrl` trong `resume-advanced.ts`

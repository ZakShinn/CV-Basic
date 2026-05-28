/**
 * ═══════════════════════════════════════════════════════════════
 *  THÔNG TIN CƠ BẢN CV — chỉnh tại file này
 *  Hướng dẫn: src/README.md
 * ═══════════════════════════════════════════════════════════════
 *
 * ⚠️ CHỈ NHẬP NỘI DUNG BẰNG TIẾNG VIỆT.
 * Bản tiếng Anh: bấm "English" trên website (dịch tự động).
 */

import type { ContactLink } from "./resume-types";

export const resumeBasic = {
  /** Thông tin cá nhân (header) */
  personal: {
    fullName: "Nguyễn Văn A",
    title: "Software Engineer",
    tagline: "Xây dựng sản phẩm web hiệu năng cao, dễ bảo trì",
    location: "Hồ Chí Minh, Việt Nam",
  },

  /** Tóm tắt nghề nghiệp (3–5 câu) */
  summary:
    "Kỹ sư phần mềm với hơn 3 năm kinh nghiệm phát triển ứng dụng web full-stack. Tập trung vào trải nghiệm người dùng, chất lượng code và quy trình làm việc theo Agile. Mong muốn đóng góp vào đội ngũ phát triển sản phẩm có tác động thực tế.",

  /**
   * Thông tin cá nhân bổ sung (sidebar).
   * Để "" hoặc [] để ẩn từng mục — xem src/README.md
   */
  personalInfo: {
    motto: "Học hỏi không ngừng, làm việc có trách nhiệm, coi trọng sự tử tế.",
    softSkills: [
      "Giao tiếp & thuyết trình",
      "Làm việc nhóm & Agile",
      "Giải quyết vấn đề",
      "Tư duy phản biện",
      "Quản lý thời gian",
    ],
    interests: ["Đọc sách công nghệ", "Chạy bộ", "Mở source", "Nhiếp ảnh"],
    aspirations:
      "Mong muốn gia nhập môi trường product-focused, được tham gia xây dựng sản phẩm có quy mô người dùng thật, phát triển lên Senior trong 2–3 năm tới.",
  },

  contact: [
    { label: "email@example.com", href: "mailto:email@example.com", icon: "email" },
    { label: "+84 900 000 000", href: "tel:+84900000000", icon: "phone" },
    { label: "Hồ Chí Minh, Việt Nam", href: "#", icon: "location" },
    {
      label: "linkedin.com/in/username",
      href: "https://linkedin.com/in/username",
      icon: "linkedin",
    },
    { label: "github.com/username", href: "https://github.com/username", icon: "github" },
    { label: "yourdomain.com", href: "https://yourdomain.com", icon: "website" },
  ] satisfies ContactLink[],
};

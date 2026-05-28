/**
 * ═══════════════════════════════════════════════════════════════
 *  NỘI DUNG NÂNG CAO CV & TRANG WEB — chỉnh tại file này
 *  Hướng dẫn: src/README.md
 * ═══════════════════════════════════════════════════════════════
 *
 * Kinh nghiệm, học vấn, dự án, SEO meta…
 * Mảng rỗng [] = ẩn section (khi bật trong src/config.ts).
 */

import type {
  Certification,
  Education,
  Experience,
  Language,
  Project,
  SkillGroup,
} from "./resume-types";

export const resumeAdvanced = {
  experience: [
    {
      company: "Công ty ABC Technology",
      role: "Senior Frontend Developer",
      location: "TP. Hồ Chí Minh",
      period: "01/2023 – Hiện tại",
      highlights: [
        "Thiết kế và triển khai giao diện dashboard phục vụ 10.000+ người dùng doanh nghiệp.",
        "Giảm 40% thời gian tải trang nhờ tối ưu bundle, lazy loading và caching.",
        "Hướng dẫn 2 junior developer, review code và thiết lập chuẩn component.",
      ],
    },
    {
      company: "Startup XYZ",
      role: "Full-stack Developer",
      location: "Remote",
      period: "06/2021 – 12/2022",
      highlights: [
        "Xây dựng MVP sản phẩm SaaS từ ý tưởng đến production trong 4 tháng.",
        "Tích hợp thanh toán, xác thực OAuth và hệ thống thông báo real-time.",
        "Viết tài liệu API và unit test, đạt coverage ~75%.",
      ],
    },
  ] satisfies Experience[],

  education: [
    {
      school: "Đại học Bách Khoa TP.HCM",
      degree: "Cử nhân Công nghệ Thông tin",
      period: "2017 – 2021",
      details: "Chuyên ngành Kỹ thuật phần mềm · GPA: 3.2/4.0",
    },
  ] satisfies Education[],

  skills: [
    {
      category: "Ngôn ngữ & Framework",
      items: ["TypeScript", "React", "Next.js", "Node.js", "Python"],
    },
    {
      category: "Cơ sở dữ liệu & Cloud",
      items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel"],
    },
  ] satisfies SkillGroup[],

  projects: [
    {
      name: "Hệ thống quản lý dự án nội bộ",
      link: "https://github.com/username/project",
      period: "2024",
      description:
        "Ứng dụng web quản lý task, sprint và báo cáo tiến độ cho team 15 người.",
      tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    },
    {
      name: "Portfolio cá nhân",
      link: "https://yourdomain.com",
      period: "2023",
      description: "Trang giới thiệu bản thân, blog kỹ thuật và form liên hệ.",
      tech: ["Next.js", "MDX", "Vercel"],
    },
  ] satisfies Project[],

  certifications: [
    { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Meta Front-End Developer", issuer: "Coursera / Meta", year: "2023" },
  ] satisfies Certification[],

  languages: [
    { name: "Tiếng Việt", level: "Bản ngữ" },
    { name: "Tiếng Anh", level: "TOEIC 850 — Giao tiếp công việc" },
  ] satisfies Language[],

  /** Tùy chọn — để mảng rỗng [] để ẩn section */
  references: [] as { name: string; role: string; contact: string }[],

  /** Meta cho SEO & chia sẻ link (trang web) */
  meta: {
    siteTitle: "Nguyễn Văn A — CV",
    description: "Curriculum Vitae của Nguyễn Văn A — Software Engineer",
    /** URL sau khi deploy Vercel, ví dụ: https://cv-basic.vercel.app */
    siteUrl: "https://your-cv.vercel.app",
  },
};

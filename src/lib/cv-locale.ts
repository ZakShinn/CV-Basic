export type CVLocale = "vi" | "en";

export const sectionLabels = {
  vi: {
    summary: "Tóm tắt",
    experience: "Kinh nghiệm làm việc",
    education: "Học vấn",
    skills: "Kỹ năng",
    projects: "Dự án",
    certifications: "Chứng chỉ",
    languages: "Ngôn ngữ",
    references: "Người tham chiếu",
    motto: "Phương châm sống",
    softSkills: "Kỹ năng mềm",
    interests: "Sở thích",
    aspirations: "Mong muốn",
  },
  en: {
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    projects: "Projects",
    certifications: "Certifications",
    languages: "Languages",
    references: "References",
    motto: "Life motto",
    softSkills: "Soft skills",
    interests: "Interests",
    aspirations: "Career goals",
  },
} as const;

/**
 * ═══════════════════════════════════════════════════════════════
 *  HIỂN THỊ & BẬT/TẮT TÍNH NĂNG — chỉnh tại file này
 *  Hướng dẫn: src/README.md
 * ═══════════════════════════════════════════════════════════════
 */

export type DisplayMode = "basic" | "full";

export type SectionKey =
  | "contact"
  | "personalInfo"
  | "skills"
  | "languages"
  | "certifications"
  | "summary"
  | "experience"
  | "education"
  | "projects"
  | "references";

export const displayConfig = {
  mode: "full" as DisplayMode,
  sections: {
    contact: true,
    personalInfo: true,
    skills: true,
    languages: true,
    certifications: true,
    summary: true,
    experience: true,
    education: true,
    projects: true,
    references: true,
  },
  features: {
    languageSwitch: true,
    darkMode: true,
    print: true,
    pdfExport: true,
    docxExport: true,
    accentBar: true,
    pageFooter: true,
    /** `false` = chặn Google & bot tìm kiếm index trang (robots.txt + meta noindex) */
    allowSearchIndexing: false,
  },
} as const;

const basicHiddenSections = new Set<SectionKey>([
  "personalInfo",
  "projects",
  "certifications",
  "references",
]);

export function isSectionEnabled(section: SectionKey): boolean {
  if (!displayConfig.sections[section]) return false;
  if (displayConfig.mode === "basic" && basicHiddenSections.has(section)) {
    return false;
  }
  return true;
}

export function isFeatureEnabled(feature: keyof typeof displayConfig.features): boolean {
  return displayConfig.features[feature];
}

export function isSearchIndexingAllowed(): boolean {
  return displayConfig.features.allowSearchIndexing;
}

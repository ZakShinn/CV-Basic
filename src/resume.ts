/**
 * Nội dung CV — gộp basic + advanced
 *
 * Sửa dữ liệu: src/resume-basic.ts | src/resume-advanced.ts
 * Hướng dẫn: src/README.md
 */

import { resumeAdvanced } from "./resume-advanced";
import { resumeBasic } from "./resume-basic";

export type {
  CVContent,
  Certification,
  ContactLink,
  Education,
  Experience,
  Language,
  Project,
  SkillGroup,
} from "./resume-types";

export { resumeBasic } from "./resume-basic";
export { resumeAdvanced } from "./resume-advanced";

export const cv = {
  ...resumeBasic,
  ...resumeAdvanced,
} satisfies import("./resume-types").CVContent;

export type CVData = typeof cv;

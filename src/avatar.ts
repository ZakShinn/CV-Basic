/**
 * ═══════════════════════════════════════════════════════════════
 *  ẢNH ĐẠI DIỆN CV — chỉnh tại file này
 *  Hướng dẫn: src/README.md
 * ═══════════════════════════════════════════════════════════════
 */

export type AvatarObjectFit = "cover" | "contain";

export interface AvatarConfig {
  enabled: boolean;
  /** Đường dẫn từ `public/`, vd: `/avatar/anh-cua-toi.jpg` */
  src: string;
  /** Trống = dùng họ tên từ resume-basic.ts */
  alt: string;
  objectFit: AvatarObjectFit;
  hideInPrint: boolean;
}

export const DEFAULT_AVATAR_SRC = "/avatar/avatar.jpg";

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: DEFAULT_AVATAR_SRC,
  alt: "Ảnh đại diện — thay bằng ảnh của bạn",
  objectFit: "cover",
  hideInPrint: false,
};

export function resolveAvatarSrc(customSrc?: string): string {
  if (!avatarConfig.enabled) return "";
  const custom = customSrc?.trim() || avatarConfig.src.trim();
  return custom || DEFAULT_AVATAR_SRC;
}

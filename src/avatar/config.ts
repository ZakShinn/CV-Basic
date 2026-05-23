/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH ẢNH ĐẠI DIỆN — chỉnh tại file này
 *  Hướng dẫn: src/avatar/HUONG_DAN_ANH_DAI_DIEN.md
 * ═══════════════════════════════════════════════════════════════
 */

export type AvatarObjectFit = "cover" | "contain";

export interface AvatarConfig {
  /** `true` = hiển thị ảnh khi có `src`; `false` = luôn dùng chữ cái đầu */
  enabled: boolean;
  /** Đường dẫn từ `public/`, vd: `/avatar.jpg` */
  src: string;
  /** Mô tả ảnh (accessibility) — để trống sẽ dùng họ tên từ cv.ts */
  alt: string;
  objectFit: AvatarObjectFit;
  /** `true` = không in ảnh ra PDF */
  hideInPrint: boolean;
}

export const avatarConfig: AvatarConfig = {
  enabled: true,
  src: "",
  alt: "",
  objectFit: "cover",
  hideInPrint: false,
};

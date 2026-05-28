/**
 * ═══════════════════════════════════════════════════════════════
 *  FONT CV & TRANG WEB — chỉnh tại file này (+ src/app/layout.tsx)
 *  Hướng dẫn: src/README.md
 * ═══════════════════════════════════════════════════════════════
 */

export interface FontRole {
  family: string;
  nextFontId: "Be_Vietnam_Pro" | "Source_Serif_4" | "Inter" | "Roboto" | "Open_Sans";
  variable: string;
}

export const fonts = {
  sans: {
    family: "Be Vietnam Pro",
    nextFontId: "Be_Vietnam_Pro",
    variable: "--font-dm-sans",
  },
  serif: {
    family: "Source Serif 4",
    nextFontId: "Source_Serif_4",
    variable: "--font-source-serif",
  },
} as const;

export function getFontCssBlock(theme = fonts): string {
  return [
    ":root {",
    `  --font-sans: var(${theme.sans.variable}), "${theme.sans.family}", ui-sans-serif, system-ui, sans-serif;`,
    `  --font-serif: var(${theme.serif.variable}), "${theme.serif.family}", ui-serif, Georgia, serif;`,
    "}",
  ].join("\n");
}

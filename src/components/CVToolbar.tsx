"use client";

import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { isFeatureEnabled } from "@/config";
import type { CVLocale } from "@/lib/cv-locale";
import type { CVContent } from "@/resume";

const ExportToolbar = dynamic(
  () => import("./ExportToolbar").then((m) => m.ExportToolbar),
  { ssr: false },
);

const uiLabels = {
  vi: { print: "In CV", pdf: "Tải PDF", docx: "Tải DOCX", switchLang: "English", translating: "Đang dịch…" },
  en: { print: "Print", pdf: "Download PDF", docx: "Download DOCX", switchLang: "Tiếng Việt", translating: "Translating…" },
} as const;

export function CVToolbar({
  locale,
  loading,
  error,
  cvData,
  onToggleLocale,
}: {
  locale: CVLocale;
  loading?: boolean;
  error?: string | null;
  cvData: CVContent;
  onToggleLocale: () => void;
}) {
  const { setTheme, resolvedTheme } = useTheme();
  const ui = uiLabels[locale];
  const isDark = resolvedTheme === "dark";

  const showExport =
    isFeatureEnabled("print") || isFeatureEnabled("pdfExport") || isFeatureEnabled("docxExport");

  return (
    <div className="flex flex-wrap items-center gap-2">
      {error && (
        <span className="text-xs text-red-600 dark:text-red-400" role="alert">
          {error}
        </span>
      )}
      {isFeatureEnabled("languageSwitch") && (
        <button
          type="button"
          onClick={onToggleLocale}
          disabled={loading}
          className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)] disabled:opacity-60 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          aria-label="Switch language"
        >
          {loading ? ui.translating : ui.switchLang}
        </button>
      )}
      {isFeatureEnabled("darkMode") && (
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-xs font-medium text-[var(--color-ink-muted)] transition hover:border-[var(--color-accent)] dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
          aria-label={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? "☀" : "☾"}
        </button>
      )}
      {showExport && (
        <ExportToolbar labels={{ print: ui.print, pdf: ui.pdf, docx: ui.docx }} cvData={cvData} locale={locale} />
      )}
    </div>
  );
}

export type { CVLocale };

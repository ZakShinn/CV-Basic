"use client";

import { useState } from "react";
import { cv } from "@/data/cv";
import { downloadBlob, exportCvToDocx } from "@/lib/export-docx";
import { exportToPDF } from "@/lib/export-pdf";
import { printCV } from "@/lib/print";
import { ATS_PDF_HINT } from "@/lib/seo";

type ExportLabels = {
  print: string;
  pdf: string;
  docx: string;
};

export function ExportToolbar({ labels }: { labels: ExportLabels }) {
  const [loading, setLoading] = useState<"pdf" | "docx" | null>(null);

  const baseName = cv.personal.fullName.replace(/\s+/g, "_");

  async function handlePdf() {
    const el = document.getElementById("cv-document");
    if (!el) return;
    setLoading("pdf");
    try {
      await exportToPDF(el, `CV_${baseName}.pdf`);
    } finally {
      setLoading(null);
    }
  }

  async function handleDocx() {
    setLoading("docx");
    try {
      const blob = await exportCvToDocx();
      downloadBlob(blob, `CV_${baseName}.docx`);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <button
        type="button"
        onClick={printCV}
        className="rounded-lg border border-[var(--color-border)] bg-white px-3 py-2 text-sm font-medium text-[var(--color-ink)] shadow-sm transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
      >
        {labels.print}
      </button>
      <button
        type="button"
        onClick={handlePdf}
        disabled={loading !== null}
        title={ATS_PDF_HINT}
        className="rounded-lg bg-[var(--color-accent)] px-3 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-[var(--color-accent-light)] disabled:opacity-60"
      >
        {loading === "pdf" ? "…" : labels.pdf}
      </button>
      <button
        type="button"
        onClick={handleDocx}
        disabled={loading !== null}
        className="rounded-lg border border-[var(--color-accent)] px-3 py-2 text-sm font-medium text-[var(--color-accent)] transition hover:bg-[var(--color-highlight)] disabled:opacity-60"
      >
        {loading === "docx" ? "…" : labels.docx}
      </button>
    </div>
  );
}

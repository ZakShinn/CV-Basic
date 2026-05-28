export function CVFooter() {
  return (
    <footer className="no-print mt-10 px-4 sm:px-0" aria-hidden>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-3">
        <div className="flex w-full max-w-md items-center">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[var(--color-accent)]/40 to-transparent" />
        </div>
        <div className="h-0.5 w-24 rounded-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-light)] to-[var(--color-accent)]" />
      </div>
    </footer>
  );
}

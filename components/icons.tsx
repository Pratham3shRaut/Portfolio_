export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Mark() {
  return <svg viewBox="0 0 36 36" className="h-9 w-9" aria-hidden="true"><path d="M6 29V7h9.5c6 0 9.5 3 9.5 8s-3.5 8-9.5 8H11" fill="none" stroke="currentColor" strokeWidth="2.5"/><circle cx="27.5" cy="28" r="2.5" fill="rgb(var(--signal))"/></svg>;
}

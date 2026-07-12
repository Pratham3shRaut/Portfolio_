export function Arrow({ className = "" }: { className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}
export function Mark() {
  return <svg viewBox="0 0 44 36" className="h-9 w-11" aria-hidden="true">
    <path d="M4 29V7h8c5 0 8 2.4 8 6.5S17 20 12 20H8" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M24 29V7h7.5c4.6 0 7 2.2 7 5.8 0 3-1.8 4.9-4.6 5.6L39 29" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="4" cy="33.5" r="2" fill="rgb(var(--signal))"/>
  </svg>;
}

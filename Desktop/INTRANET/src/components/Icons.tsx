export const Icon = {
  Search: () => (
    <svg viewBox="0 0 24 24" fill="none" width="16" height="16">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
      <path d="M6 9a6 6 0 1112 0v3l1.5 3h-15L6 12V9z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 18a2 2 0 004 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Chevron: () => (
    <svg className="nav__chev" viewBox="0 0 10 10" fill="none">
      <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Cloud: () => (
    <svg className="weather__icon" viewBox="0 0 24 24" fill="none">
      <path d="M7 17h10a4 4 0 100-8 6 6 0 00-11.5 1.5A3.5 3.5 0 007 17z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  ),
  Sun: () => (
    <svg className="weather__icon" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4L7 17M17 7l1.4-1.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  Rain: () => (
    <svg className="weather__icon" viewBox="0 0 24 24" fill="none">
      <path d="M7 17h10a4 4 0 100-8 6 6 0 00-11.5 1.5A3.5 3.5 0 007 17z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 20l-1 2M12 20l-1 2M16 20l-1 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
};

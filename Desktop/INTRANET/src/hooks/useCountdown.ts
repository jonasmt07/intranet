import { useEffect, useState } from "react";

export function useCountdown(targetISO: string) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = new Date(targetISO).getTime();
  const diff = Math.max(0, target - now);
  const pad = (n: number) => String(n).padStart(2, "0");

  return {
    days:    pad(Math.floor(diff / 86400000)),
    hours:   pad(Math.floor((diff / 3600000) % 24)),
    minutes: pad(Math.floor((diff / 60000) % 60)),
    seconds: pad(Math.floor((diff / 1000) % 60)),
  };
}

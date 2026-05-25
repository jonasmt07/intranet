import { useEffect, useState } from "react";

export function useHeroDots(count: number, intervalMs = 6000) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % count), intervalMs);
    return () => clearInterval(id);
  }, [count, intervalMs]);

  return [active, setActive] as const;
}

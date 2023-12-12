import { useEffect, useMemo, useState } from "react";

const MEDIUM_SCREEN = 768;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const isDesktop = useMemo(() => width > MEDIUM_SCREEN, [width]);

  useEffect(() => {
    const handleResize = (evt) => setWidth(evt.target.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, isDesktop }
}
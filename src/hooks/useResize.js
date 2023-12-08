import { useEffect, useState } from "react";

const INITIAL_SCREEN_WIDTH = window.innerWidth;
const MEDIUM_SCREEN = 768;

export const useResize = () => {
  const [width, setWidth] = useState(INITIAL_SCREEN_WIDTH);
  const isDesktop = width > MEDIUM_SCREEN;

  useEffect(() => {
    const handleResize = (evt) => setWidth(evt.target.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { width, isDesktop }
}
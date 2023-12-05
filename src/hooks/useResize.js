import { useEffect, useState } from "react";

const INITIAL_SCREEN_WIDTH = window.innerWidth;

export const useResize = () => {
  const [width, setWidth] = useState(INITIAL_SCREEN_WIDTH);

  useEffect(() => {
    const handleResize = (evt) => setWidth(evt.target.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width
}
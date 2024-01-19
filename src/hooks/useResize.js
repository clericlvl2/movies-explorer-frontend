import { useEffect, useState } from "react";

const MEDIUM_SCREEN = 768;
const SMALL_SCREEN = 480;

export const SCREEN_STATE = {
  DESKTOP: 'desktop',
  TABLET: 'tablet',
  MOBILE: 'mobile'
}

const getScreenSize = (states) => {
  if (states.isDesktop) {
    return SCREEN_STATE.DESKTOP
  } else if (states.isTablet) {
    return SCREEN_STATE.TABLET
  } else {
    return SCREEN_STATE.MOBILE
  }
}

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const screenStates = {
    isDesktop: width > MEDIUM_SCREEN,
    isTablet: width >= MEDIUM_SCREEN && width < SMALL_SCREEN,
    isMobile: width <= SMALL_SCREEN
  };

  const screenSize = getScreenSize(screenStates);

    useEffect(() => {
    const handleResize = (evt) => setWidth(evt.target.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { screenSize, ...screenStates }
}
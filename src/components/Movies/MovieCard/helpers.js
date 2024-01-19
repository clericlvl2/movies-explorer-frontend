const MINUTES_IN_HOUR = 60;

export const getMovieDuration = (duration) => {
  const hours = Math.floor(duration / MINUTES_IN_HOUR);
  const minutes = duration - MINUTES_IN_HOUR * hours;

  const hoursToRender = hours ? `${hours}ч` : null;
  const minutesToRender = minutes ? `${minutes}мин` : null;

  return [hoursToRender, minutesToRender].filter(Boolean).join(' ');
}
import { useMemo } from "react";
import { SCREEN_STATE, useResize } from "../useResize";

const PAGINATION_STATE = {
  [SCREEN_STATE.DESKTOP]: {
    pageSize: 12,
    chunkSize: 3,
  },
  [SCREEN_STATE.TABLET]: {
    pageSize: 8,
    chunkSize: 2,
  },
  [SCREEN_STATE.MOBILE]: {
    pageSize: 5,
    chunkSize: 2,
  },
}
export const usePagination = () => {
  const { screenSize } = useResize();
  const { pageSize, chunkSize } = useMemo(() => PAGINATION_STATE[screenSize], [screenSize])

  return { pageSize, chunkSize };
}
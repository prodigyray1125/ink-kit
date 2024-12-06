import { useMemo } from "react";
import { useWindowSize } from "./useWindowSize";

const BREAKPOINTS = {
  md: 768,
  lg: 1024,
};

export const useIsUnderWindowBreakpoint = ({
  size,
}: {
  size: keyof typeof BREAKPOINTS;
}) => {
  const { width } = useWindowSize();

  return useMemo(() => {
    return width < BREAKPOINTS[size];
  }, [width, size]);
};

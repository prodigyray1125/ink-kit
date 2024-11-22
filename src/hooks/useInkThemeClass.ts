import { useEffect } from "react";

const themeClasses = [
  "ink-dark-theme",
  "ink-light-theme",
  "ink:contrast-theme",
  "ink-neo-theme",
  "ink-morpheus-theme",
] as const;

export function useInkThemeClass(
  theme: "default" | (typeof themeClasses)[number]
) {
  useEffect(() => {
    themeClasses.forEach((t) => {
      if (theme === t) {
        document.documentElement.classList.add(t);
      } else {
        document.documentElement.classList.remove(t);
      }
    });
  }, [theme]);
}

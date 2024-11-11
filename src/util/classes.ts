import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  prefix: "ink-",
  extend: {
    classGroups: {},
  },
});

export function classNames(...classes: ClassValue[]) {
  return customTwMerge(clsx(...classes));
}

export function variantClassNames<T extends string>(
  variant: T,
  classes: Required<Record<T, string>>
) {
  return classes[variant];
}

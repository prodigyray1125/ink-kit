import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  prefix: "ink-",
  extend: {
    classGroups: {
      "font-size": [
        "text-h1",
        "text-h2",
        "text-h3",
        "text-h4",
        "text-body-1",
        "text-body-2",
        "text-body-3",
        "text-caption",
        "text-caption-2",
      ],
      "text-color": [
        "text-text-on-primary",
        "text-text-on-primary-disabled",
        "text-text-on-secondary",
        "text-text-on-secondary-disabled",
      ],
    },
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

import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const colors = [
  "text-default",
  "text-muted",
  "text-on-primary",
  "text-on-primary-disabled",
  "text-on-secondary",
  "text-on-secondary-disabled",
  "background-dark",
  "background-dark-transparent",
  "background-container",
  "background-light",
  "background-light-transparent",
  "background-light-invisible",
  "button-primary",
  "button-primary-hover",
  "button-primary-pressed",
  "button-secondary",
  "button-secondary-hover",
  "button-secondary-pressed",
  "status-success",
  "status-success-bg",
  "status-alert",
  "status-alert-bg",
  "status-error",
  "status-error-bg",
];

const customTwMerge = extendTailwindMerge({
  override: {
    classGroups: {
      rounded: ["rounded-8", "rounded-16", "rounded-24", "rounded-full"],
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
      "text-color": colors.map((color) => `text-${color}`),
      "bg-color": colors.map((color) => `bg-${color}`),
      "border-color": colors.map((color) => `border-${color}`),
      "ring-color": colors.map((color) => `ring-${color}`),
      "shadow-color": colors.map((color) => `shadow-${color}`),
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

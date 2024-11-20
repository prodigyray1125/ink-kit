import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";
import config from "../../tailwind.config.mjs";

/** These classes should be used internally on all `button`, `a`, `input`, etc. native components to apply the "reset" tailwind styles */
export const resetClasses = "ink-preflight ink-font-default";

function nestedKeys<T extends Record<string, any>>(
  obj: T,
  prefix: string
): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    if (typeof value === "object") {
      return nestedKeys(value, `${prefix}-${key}`);
    }
    return [`${prefix}-${key}`];
  });
}

const customTwMerge = extendTailwindMerge({
  prefix: "ink-",
  override: {
    classGroups: {
      rounded: nestedKeys(config.theme.borderRadius, "rounded"),
      "font-size": nestedKeys(config.theme.fontSize, "text"),
      "text-color": nestedKeys(config.theme.colors, "text"),
      "bg-color": nestedKeys(config.theme.colors, "bg"),
      "border-color": nestedKeys(config.theme.colors, "border"),
      "ring-color": nestedKeys(config.theme.colors, "ring"),
      "shadow-color": nestedKeys(config.theme.colors, "shadow"),
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

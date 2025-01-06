import { classNames, variantClassNames } from "../../util/classes";
import { HTMLAttributes, PropsWithChildren } from "react";
import { Slot } from "../Slot";

export interface TypographyProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLHeadingElement | HTMLDivElement> {
  variant:
    | "display-1"
    | "display-2"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "body-1"
    | "body-2-regular"
    | "body-2-bold"
    | "body-3-regular"
    | "body-3-bold"
    | "caption-1-regular"
    | "caption-1-bold"
    | "caption-2-regular"
    | "caption-2-bold";
  className?: string;
  asChild?: boolean;
}

export const Typography: React.FC<TypographyProps> = ({
  variant,
  className,
  children,
  asChild,
  ...restProps
}) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={classNames(
        "ink:font-default",
        /**
         * It would be tempting to put those in a string template, but then Tailwind won't be able to detect the classes here
         * and won't include them in the production build until we actually use them somewhere.
         **/
        variantClassNames(variant, {
          "display-1": "ink:text-display-1",
          "display-2": "ink:text-display-2",
          h1: "ink:text-h1",
          h2: "ink:text-h2",
          h3: "ink:text-h3",
          h4: "ink:text-h4",
          h5: "ink:text-h5",
          "body-1": "ink:text-body-1",
          "body-2-regular": "ink:text-body-2-regular",
          "body-2-bold": "ink:text-body-2-bold",
          "body-3-regular": "ink:text-body-3-regular",
          "body-3-bold": "ink:text-body-3-bold",
          "caption-1-regular": "ink:text-caption-1-regular",
          "caption-1-bold": "ink:text-caption-1-bold",
          "caption-2-regular": "ink:text-caption-2-regular",
          "caption-2-bold": "ink:text-caption-2-bold",
        }),
        className
      )}
      {...restProps}
    >
      {children}
    </Component>
  );
};

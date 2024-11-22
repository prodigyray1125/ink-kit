import { classNames, variantClassNames } from "../../util/classes";
import { PropsWithChildren } from "react";
import { PolymorphicProps } from "../polymorphic";

export type TypographyProps<T extends React.ElementType = "div"> =
  PropsWithChildren<{
    variant:
      | "h1"
      | "h2"
      | "h3"
      | "h4"
      | "body-1"
      | "body-2"
      | "body-3"
      | "caption"
      | "caption-2";
    className?: string;
  }> &
    PolymorphicProps<T>;

export const Typography = <T extends React.ElementType = "div">({
  variant,
  as,
  asProps,
  className,
  children,
}: TypographyProps<T>) => {
  const Component = as ?? "div";
  return (
    <Component
      className={classNames(
        "ink:font-default",
        variantClassNames(variant, {
          h1: "ink:text-h1",
          h2: "ink:text-h2",
          h3: "ink:text-h3",
          h4: "ink:text-h4",
          "body-1": "ink:text-body-1",
          "body-2": "ink:text-body-2",
          "body-3": "ink:text-body-3",
          caption: "ink:text-caption",
          "caption-2": "ink:text-caption-2",
        }),
        className
      )}
      {...asProps}
    >
      {children}
    </Component>
  );
};

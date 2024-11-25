import React, { PropsWithChildren, type ElementType } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { PolymorphicProps } from "../polymorphic";

const DEFAULT_BUTTON_TAG = "button" as const;

export type ButtonProps<T extends ElementType = typeof DEFAULT_BUTTON_TAG> =
  PolymorphicProps<T> & OwnButtonProps;

export interface OwnButtonProps extends PropsWithChildren {
  className?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  rounded?: "full" | "default";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = <T extends ElementType = typeof DEFAULT_BUTTON_TAG>({
  as,
  asProps,
  className,
  children,
  variant = "primary",
  size = "sm",
  rounded = "default",
  iconLeft,
  iconRight,
  ...restProps
}: ButtonProps<T>) => {
  const Component = as ?? DEFAULT_BUTTON_TAG;

  return (
    <Component
      className={classNames(
        "ink:rounded-full ink:font-bold ink:font-default ink:transition-colors ink:hover:cursor-pointer ink:disabled:cursor-not-allowed ink:duration-100",
        "ink:flex ink:items-center ink:justify-center ink:gap-1 ink:select-none ink:no-underline",
        variantClassNames(size, {
          sm: "ink:px-3 ink:py-2 ink:text-body-2",
          md: "ink:px-4 ink:py-3 ink:text-h4",
        }),
        variantClassNames(rounded, {
          full: variantClassNames(size, {
            sm: "ink:rounded-full ink:px-1.5 ink:py-1.5",
            md: "ink:rounded-full ink:px-2.5 ink:py-2.5",
          }),
          default: "",
        }),
        variantClassNames(variant, {
          primary:
            "ink:bg-button-primary ink:text-text-on-primary ink:hover:bg-button-primary-hover ink:disabled:bg-button-primary-disabled ink:disabled:text-text-on-primary-disabled ink:active:bg-button-primary-pressed",
          secondary:
            "ink:bg-button-secondary ink:text-text-on-secondary ink:hover:bg-button-secondary-hover ink:disabled:bg-button-secondary-disabled ink:disabled:text-text-on-secondary-disabled ink:active:bg-button-secondary-pressed",
        }),
        className
      )}
      {...asProps}
      {...restProps}
    >
      {iconLeft && <div className="ink:size-3 ink:-my-1">{iconLeft}</div>}
      {rounded === "full" ? (
        <div className="ink:size-3">{children}</div>
      ) : (
        <div
          className={classNames(
            "ink:flex ink:items-center ink:justify-center ink:gap-1.5 ink:h-2",
            !iconLeft && !iconRight && "ink:w-full"
          )}
        >
          {children}
        </div>
      )}
      {iconRight && <div className="ink:size-3 ink:-my-1">{iconRight}</div>}
    </Component>
  );
};

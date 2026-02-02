import React, { PropsWithChildren, forwardRef } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../Slot/Slot";

export interface ButtonProps
  extends PropsWithChildren,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
  variant?: "primary" | "secondary" | "wallet" | "transparent";
  size?: "md" | "lg";
  rounded?: "full" | "default";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      asChild,
      className,
      children,
      variant = "secondary",
      size = "md",
      rounded = "default",
      iconLeft,
      iconRight,
      ...restProps
    },
    ref
  ) {
    const Component = asChild ? Slot : "button";
    const iconClasses = classNames(
      "ink:size-3 ink:-my-1",
      variant === "wallet" &&
        classNames(
          "ink:*:object-cover ink:*:w-full ink:*:h-full ink:*:rounded-full",
          variantClassNames(size, {
            md: "ink:size-4",
            lg: "ink:size-6",
          })
        )
    );
    return (
      <Component
        className={classNames(
          "ink:rounded-full ink:font-default ink:transition-colors ink:hover:cursor-pointer ink:disabled:cursor-not-allowed ink:transition-default-animation ink:box-border ink:backdrop-blur-lg",
          "ink:flex ink:items-center ink:justify-center ink:gap-1 ink:shrink-0 ink:select-none ink:no-underline",
          variantClassNames(size, {
            md: "ink:px-2 ink:py-1.5 ink:text-body-3-bold ink:h-5",
            lg: "ink:px-4 ink:py-3 ink:text-h5 ink:h-8",
          }),
          variantClassNames(rounded, {
            full: `ink:rounded-full ${variantClassNames(size, {
              md: "ink:p-1 ink:size-5",
              lg: "ink:p-2 ink:size-8",
            })}`,
            default: "",
          }),
          variantClassNames(variant, {
            primary:
              "ink:bg-button-primary ink:text-text-on-primary ink:hover:bg-button-primary-hover ink:disabled:bg-button-primary-disabled ink:disabled:text-text-on-primary-disabled ink:active:bg-button-primary-pressed",
            secondary:
              "ink:bg-button-secondary ink:text-text-on-secondary ink:hover:bg-button-secondary-hover ink:disabled:bg-button-secondary-disabled ink:disabled:text-text-on-secondary-disabled ink:active:bg-button-secondary-pressed",
            wallet: classNames(
              "ink:bg-background-light-transparent ink:text-body-2-bold ink:text-text-default ink:hover:bg-background-light ink:disabled:bg-background-light-transparent-disabled ink:disabled:text-muted ink:active:bg-background-light",
              "ink:border-background-container ink:border",
              iconLeft &&
                variantClassNames(size, {
                  md: "ink:pl-0.5",
                  lg: "ink:pl-1",
                }),
              iconRight &&
                variantClassNames(size, {
                  md: "ink:pr-0.5",
                  lg: "ink:pr-1",
                })
            ),
            transparent:
              "ink:bg-transparent ink:text-text-default ink:hover:bg-background-light-transparent ink:disabled:bg-transparent ink:disabled:text-muted",
          }),
          className
        )}
        {...restProps}
        ref={ref}
      >
        <Slottable child={children}>
          {(child) => (
            <>
              {iconLeft && <div className={iconClasses}>{iconLeft}</div>}
              {iconLeft && <div className={iconClasses}>{iconLeft}</div>}
              {child}
              {iconRight && <div className={iconClasses}>{iconRight}</div>}
            </>
          )}
        </Slottable>
      </Component>
    );
  }
);

Button.displayName = "Button";

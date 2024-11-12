import React from "react";
import { classNames, variantClassNames } from "../../util/classes";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
  type?: "button" | "submit" | "reset";
  rounded?: "full" | "default";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled = false,
  children,
  variant = "primary",
  size = "sm",
  type = "button",
  rounded = "default",
  iconLeft,
  iconRight,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "ink-rounded-full ink-font-bold ink-transition-colors disabled:ink-cursor-not-allowed ink-duration-100 ink-font-default",
        "ink-flex ink-gap-1",
        variantClassNames(variant, {
          primary:
            "ink-bg-primary ink-text-text-on-primary hover:ink-bg-primary-hover disabled:ink-bg-primary-disabled disabled:ink-text-text-on-primary-disabled active:ink-bg-primary-pressed",
          secondary:
            "ink-bg-secondary ink-text-text-on-secondary hover:ink-bg-secondary-hover disabled:ink-bg-secondary-disabled disabled:ink-text-text-on-secondary-disabled active:ink-bg-secondary-pressed",
        }),
        variantClassNames(size, {
          sm: "ink-px-3 ink-py-1.5 ink-text-body-2",
          md: "ink-px-4 ink-py-2 ink-text-h4",
        }),
        variantClassNames(rounded, {
          full: variantClassNames(size, {
            sm: "ink-rounded-full ink-px-1.5 ink-py-1.5",
            md: "ink-rounded-full ink-px-2 ink-py-2",
          }),
          default: "",
        }),
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {iconLeft && (
        <div
          className={variantClassNames(size, {
            sm: "ink-size-2.5",
            md: "ink-size-3",
          })}
        >
          {iconLeft}
        </div>
      )}
      {rounded === "full" ? (
        <div
          className={classNames(
            variantClassNames(size, {
              sm: "ink-size-2.5",
              md: "ink-size-3",
            })
          )}
        >
          {children}
        </div>
      ) : (
        children
      )}
      {iconRight && (
        <div
          className={variantClassNames(size, {
            sm: "ink-size-2.5",
            md: "ink-size-3",
          })}
        >
          {iconRight}
        </div>
      )}
    </button>
  );
};

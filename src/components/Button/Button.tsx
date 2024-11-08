import React from "react";
import { classNames } from "../../util/classes";

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  className,
  onClick,
  disabled = false,
  children,
  variant = "primary",
  size = "medium",
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={classNames(
        "ink-rounded ink-font-medium ink-transition-colors disabled:ink-cursor-not-allowed",
        {
          primary:
            "ink-bg-primary ink-text-text-on-primary hover:ink-bg-primary-hover disabled:ink-bg-primary-disabled disabled:ink-text-text-on-primary-disabled",
          secondary:
            "ink-bg-secondary ink-text-text-on-secondary ink-text-white hover:ink-bg-secondary-hover disabled:ink-bg-secondary-disabled disabled:ink-text-text-on-secondary-disabled",
          outline:
            "ink-border-2 ink-border-primary ink-text-primary hover:ink-border-primary-hover hover:ink-text-primary-hover disabled:ink-bg-primary-disabled disabled:ink-text-primary-disabled",
        }[variant],
        {
          small: "ink-px-3 ink-py-1 ink-text-sm",
          medium: "ink-px-4 ink-py-2",
          large: "ink-px-6 ink-py-3 ink-text-lg",
        }[size],
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

import React, { forwardRef } from "react";
import { classNames } from "../../util/classes";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, iconLeft, iconRight, ...props }, ref) => {
    const iconClasses =
      "ink:shrink-0 ink:size-3 ink:-my-1 ink:flex ink:items-center ink:justify-center ink:text-text-muted ink:group-focus-within:text-text-on-secondary ink:transition-colors ink:transition-default-animation";
    return (
      <label
        className={classNames(
          "ink:w-full ink:flex ink:items-center ink:justify-center ink:gap-1 ink:box-border ink:group",
          "ink:p-2 ink:h-6",
          "ink:font-default ink:rounded-xs ink:bg-background-container ink:text-body-2-regular ink:text-text-default",
          "ink:border-1 ink:border-transparent ink:focus-within:border-text-on-secondary ink:transition-colors ink:transition-default-animation",
          className
        )}
      >
        {iconLeft && <div className={iconClasses}>{iconLeft}</div>}
        <input
          className="ink:w-full ink:outline-none ink:box-border ink:-my-1 ink:placeholder:font-default ink:placeholder:text-body-2-regular ink:placeholder:text-text-muted"
          ref={ref}
          {...props}
        />
        {iconRight && <div className={iconClasses}>{iconRight}</div>}
      </label>
    );
  }
);

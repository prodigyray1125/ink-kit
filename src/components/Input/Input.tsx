import React, { forwardRef } from "react";
import { classNames } from "../../util/classes";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(
          "ink:w-full ink:font-default ink:rounded-xs ink:bg-background-container ink:p-2 ink:h-2 ink:text-body-2 ink:text-text-default",
          "focus:ink:outline focus:ink:outline-1 ink:outline-text-on-secondary",
          className
        )}
        {...props}
      />
    );
  }
);

import React from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { InkIcon } from "../..";

export interface AlertProps {
  title: string;
  description?: React.ReactNode;
  variant?: "success" | "error" | "warning" | "info";
  icon?: React.ReactNode;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  title,
  description,
  variant = "info",
  icon,
  className,
}) => {
  const defaultIcon = {
    success: <InkIcon.Check />,
    error: <InkIcon.Error />,
    warning: <InkIcon.Error />,
    info: <InkIcon.Settings />,
  }[variant];

  return (
    <div
      className={classNames(
        "ink:flex ink:gap-3 ink:p-3 ink:rounded-md ink:font-default",
        variantClassNames(variant, {
          success: "ink:bg-status-success-bg ink:text-status-success",
          error: "ink:bg-status-error-bg ink:text-status-error",
          warning: "ink:bg-status-alert-bg ink:text-status-alert",
          info: "ink:bg-background-light ink:text-text-default",
        }),
        className
      )}
    >
      <div className="ink:size-4 ink:shrink-0">
        {icon || defaultIcon}
      </div>
      <div className="ink:flex ink:flex-col ink:gap-1">
        <div className="ink:text-body-2-bold">{title}</div>
        {description && (
          <div className="ink:text-body-2-regular">{description}</div>
        )}
      </div>
    </div>
  );
};
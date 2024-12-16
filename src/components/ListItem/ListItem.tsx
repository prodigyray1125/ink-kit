import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Slot, Slottable } from "../Slot";
import { classNames, variantClassNames } from "../../util/classes";

export interface ListItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "default" | "secondary" | "error" | "muted";
  disabled?: boolean;
  asChild?: boolean;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  asChild,
  iconLeft,
  iconRight,
  variant = "default",
  disabled,
  ...props
}) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      disabled={disabled}
      className={classNames(
        "ink:font-default ink:text-body-2-bold ink:cursor-pointer ink:box-border ink:no-underline",
        "ink:bg-background-light-invisible ink:px-1.5 ink:py-2 ink:rounded-md ink:text-body-2-bold ink:text-text-default ink:hover:bg-background-container ink:disabled:bg-background-light-transparent-disabled ink:disabled:text-muted ink:active:bg-background-container/80 ink:data-active:bg-background-container/80",
        "ink:w-full ink:flex ink:items-center ink:justify-start ink:gap-1.5 ink:h-6",
        variantClassNames(variant, {
          default: "",
          secondary:
            "ink:bg-button-secondary ink:hover:bg-button-secondary-hover ink:active:bg-button-secondary-pressed ink:data-active:bg-button-secondary-pressed ink:text-button-secondary-text",
          error: "ink:text-status-error ink:hover:bg-status-error-bg",
          muted:
            "ink:bg-background-container ink:text-text-muted ink:border-1 ink:border-transparent ink:focus:border-text-on-secondary ink:transition-colors ink:transition-default-animation",
        }),
        "ink:data-disabled:text-text-muted ink:data-disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {iconLeft && (
              <div
                className={classNames(
                  "ink:flex ink:items-center ink:justify-center ink:size-3 ink:-my-1.5"
                )}
              >
                {iconLeft}
              </div>
            )}
            <div className="ink:flex-1 ink:flex ink:items-center ink:justify-start">
              {child}
            </div>
            {iconRight && (
              <div
                className={classNames(
                  "ink:flex ink:items-center ink:justify-center ink:size-3 ink:-my-1.5"
                )}
              >
                {iconRight}
              </div>
            )}
          </>
        )}
      </Slottable>
    </Component>
  );
};

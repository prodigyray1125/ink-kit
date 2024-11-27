import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Slot, Slottable } from "../Slot";
import { classNames, variantClassNames } from "../../util/classes";

export interface ListItemProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: "default" | "error";
  asChild?: boolean;
  className?: string;
  iconLeft?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  asChild,
  iconLeft,
  variant = "default",
  ...props
}) => {
  const Component = asChild ? Slot : "button";
  return (
    <Component
      className={classNames(
        "ink:font-default ink:text-body-2-bold ink:cursor-pointer ink:box-border",
        "ink:bg-background-light-invisible ink:px-1.5 ink:py-2 ink:rounded-xs ink:text-body-2-bold ink:text-text-default ink:hover:bg-background-container ink:disabled:bg-background-light-transparent-disabled ink:disabled:text-muted ink:active:bg-background-light",
        "ink:w-full ink:flex ink:items-center ink:justify-start ink:gap-1.5 ink:h-6",
        variantClassNames(variant, {
          default: "",
          error: "ink:text-status-error ink:hover:bg-status-error-bg",
        }),
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
            {child}
          </>
        )}
      </Slottable>
    </Component>
  );
};

import React from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../../components/Slot";

export interface InkLayoutLink extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  target?: StringWithAutocomplete<"_blank" | "_self">;
  asChild?: boolean;
  active?: boolean;
}

export interface InkNavLinkProps extends InkLayoutLink {
  variant?: "default" | "mobile";
}

export const InkNavLink: React.FC<InkNavLinkProps> = ({
  href,
  leftIcon,
  rightIcon,
  children,
  className = "",
  asChild,
  onClick,
  active,
  variant = "default",
  ...props
}) => {
  const Component = asChild ? Slot : "a";

  const iconClasses = classNames(
    variantClassNames(variant, {
      default: "ink:size-3 ink:p-0.5",
      mobile: "ink:size-3",
    })
  );

  return (
    <Component
      href={href}
      className={classNames(
        "ink:flex ink:items-center ink:px-1.5 ink:text-inherit ink:no-underline ink:rounded-md ink:box-border ink:hover:text-text-default",
        variantClassNames(variant, {
          default: classNames(
            "ink:gap-1 ink:py-1 ink:text-body-3-bold",
            active
              ? "ink:bg-background-container ink:text-text-default"
              : "ink:text-text-muted"
          ),
          mobile:
            "ink:gap-2 ink:py-1.5 ink:text-body-1-bold ink:text-text-default ink:hover:bg-background-container",
        }),
        className
      )}
      draggable={false}
      onClick={onClick}
      {...props}
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {leftIcon && <div className={iconClasses}>{leftIcon}</div>}
            <div
              className={classNames(
                "ink:flex-1 ink:flex ink:items-center ink:justify-between",
                variantClassNames(variant, {
                  default: "ink:gap-1",
                  mobile: "ink:gap-2",
                })
              )}
            >
              {child}
              {rightIcon && <div className={iconClasses}>{rightIcon}</div>}
            </div>
          </>
        )}
      </Slottable>
    </Component>
  );
};

InkNavLink.displayName = "InkNavLink";

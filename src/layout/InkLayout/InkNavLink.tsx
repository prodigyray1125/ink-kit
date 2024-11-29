import React from "react";
import { classNames } from "../../util/classes";
import { Slot, Slottable } from "../../components/Slot";

export interface InkLayoutLink extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
  target?: StringWithAutocomplete<"_blank" | "_self">;
  asChild?: boolean;
}

export interface InkNavLinkProps extends InkLayoutLink {}

export const InkNavLink: React.FC<InkNavLinkProps> = ({
  href,
  icon,
  children,
  className = "",
  asChild,
  ...props
}) => {
  const Component = asChild ? Slot : "a";

  return (
    <Component
      href={href}
      className={classNames(
        "ink:flex ink:items-center ink:gap-1.5 ink:px-1.5 ink:py-1.5 ink:text-inherit ink:no-underline ink:rounded-md ink:transition-colors ink:transition-default-animation ink:hover:bg-background-container",
        className
      )}
      draggable={false}
      {...props}
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {icon && <div className="ink:size-3">{icon}</div>}
            {child}
          </>
        )}
      </Slottable>
    </Component>
  );
};

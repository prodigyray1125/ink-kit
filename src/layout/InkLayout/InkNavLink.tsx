import React, { ElementType } from "react";
import { PolymorphicProps } from "../../components/polymorphic";
import { classNames } from "../../util/classes";

const DEFAULT_COMPONENT_TYPE = "a" as const;

export interface InkLayoutLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export type InkNavLinkProps<
  T extends ElementType = typeof DEFAULT_COMPONENT_TYPE,
> = PolymorphicProps<T> &
  InkLayoutLink & {
    className?: string;
  };

export const InkNavLink = <
  T extends ElementType = typeof DEFAULT_COMPONENT_TYPE,
>({
  as,
  asProps,
  href,
  icon,
  label,
  className = "",
  ...props
}: InkNavLinkProps<T>) => {
  const Component = as ?? DEFAULT_COMPONENT_TYPE;

  return (
    <Component
      href={href}
      className={classNames(
        Component === DEFAULT_COMPONENT_TYPE &&
          "ink:flex ink:items-center ink:gap-1.5 ink:px-1.5 ink:py-1.5 ink:text-inherit ink:no-underline ink:rounded-16 ink:transition-colors ink:duration-200 ink:hover:bg-background-container",
        className
      )}
      {...asProps}
      {...props}
    >
      <div className="ink:size-3">{icon}</div>
      <div>{label}</div>
    </Component>
  );
};

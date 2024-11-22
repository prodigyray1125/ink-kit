import React from "react";
import { InkLayoutLink, InkNavLink } from "./InkNavLink";
import {
  PolymorphicDefinition,
  PolymorphicProps,
} from "../../components/polymorphic";
import { InkIcon } from "../..";

interface InkLayoutSideNavProps<T extends React.ElementType = "a"> {
  links: InkLayoutLink[];
  linkAs?: PolymorphicDefinition<T>;
}

export const InkLayoutSideNav = <T extends React.ElementType = "a">({
  links,
  linkAs,
}: InkLayoutSideNavProps<T>) => {
  const { as, asProps, ...rest } = linkAs ?? {};
  return (
    <nav className="ink:min-h-screen">
      <div className="ink:flex ink:flex-col ink:gap-1">
        {links.map((link) => {
          // @ts-expect-error
          const linkProps: PolymorphicProps<T> &
            React.ComponentPropsWithoutRef<T> = {
            as,
            asProps,
            ...rest,
          };
          return <InkNavLink {...link} {...linkProps} />;
        })}
      </div>
    </nav>
  );
};

<InkNavLink href="" label="Home" icon={<InkIcon.Home />} />;

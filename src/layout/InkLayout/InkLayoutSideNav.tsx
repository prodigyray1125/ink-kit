import React from "react";
import { InkLayoutLink, InkNavLink } from "./InkNavLink";

export interface InkLayoutSideNavProps {
  links: InkLayoutLink[];
}

export const InkLayoutSideNav: React.FC<InkLayoutSideNavProps> = ({
  links,
}) => {
  return (
    <nav className="ink:h-full ink:flex ink:flex-col ink:font-default ink:text-text-default ink:text-body-3-bold">
      {links.map((link) => {
        return <InkNavLink {...link} key={link.href} />;
      })}
    </nav>
  );
};

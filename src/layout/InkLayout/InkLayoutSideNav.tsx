import React from "react";
import { InkLayoutLink, InkNavLink } from "./InkNavLink";

export interface InkLayoutSideNavProps {
  links: InkLayoutLink[];
}

export const InkLayoutSideNav: React.FC<InkLayoutSideNavProps> = ({
  links,
}) => {
  return (
    <nav className="ink:min-h-screen">
      <div className="ink:flex ink:flex-col ink:gap-1 ink:font-default ink:text-text-default">
        {links.map((link) => {
          return <InkNavLink {...link} key={link.href} />;
        })}
      </div>
    </nav>
  );
};

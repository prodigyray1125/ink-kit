import React from "react";
import { InkLayoutLink, InkNavLink } from "./InkNavLink";

export interface InkLayoutSideNavProps {
  links: InkLayoutLink[];
  bottom?: React.ReactNode;
}

export const InkLayoutSideNav: React.FC<InkLayoutSideNavProps> = ({
  links,
  bottom,
}) => {
  return (
    <nav className="ink:h-full ink:flex ink:flex-col ink:font-default ink:text-text-default ink:text-body-3-bold ink:pb-4 ink:gap-4 ink:box-border">
      <div className="ink:flex-1 ink:flex ink:flex-col">
        {links.map((link) => {
          return <InkNavLink {...link} key={link.href} />;
        })}
      </div>
      <div className="ink:flex-1 ink:flex ink:flex-col ink:justify-end">
        {bottom}
      </div>
    </nav>
  );
};

InkLayoutSideNav.displayName = "InkLayoutSideNav";

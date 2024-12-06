import React from "react";
import { InkLayoutLink, InkNavLink } from "../InkNavLink";

export interface InkLayoutMobileNavProps {
  links: InkLayoutLink[];
  onLinkClick?: React.MouseEventHandler<HTMLElement>;
}

export const InkLayoutMobileNav: React.FC<InkLayoutMobileNavProps> = ({
  links,
  onLinkClick,
}) => {
  return (
    <nav className="ink:h-full ink:w-full ink:p-3 ink:box-border ink:font-default ink:text-text-default">
      <div className="ink:flex ink:flex-col ink:gap-1">
        {links.map((link) => {
          return <InkNavLink {...link} key={link.href} onClick={onLinkClick} />;
        })}
      </div>
    </nav>
  );
};

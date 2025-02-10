import { PropsWithChildren } from "react";
import { classNames } from "../../../util/classes";

export interface LargeLinksProps extends PropsWithChildren {
  className?: string;
  children: React.ReactNode;
}

export const LargeLinks = ({ children, className }: LargeLinksProps) => {
  return (
    <div
      className={classNames(
        "ink:grid ink:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] ink:lg:grid-cols-2 ink:gap-1 ink:box-border",
        className
      )}
    >
      {children}
    </div>
  );
};

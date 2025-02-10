import { PropsWithChildren } from "react";
import { classNames } from "../../../util/classes";

export interface CardInfoProps extends PropsWithChildren {
  className?: string;
  children: React.ReactNode;
}

export const CardInfo = ({ children, className }: CardInfoProps) => {
  return (
    <div
      className={classNames(
        "ink:grid ink:grid-cols-[minmax(200px,1fr)] ink:lg:grid-cols-2 ink:gap-1 ink:box-border",
        className
      )}
    >
      {children}
    </div>
  );
};

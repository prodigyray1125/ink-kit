import { PropsWithChildren } from "react";
import { classNames } from "../../../util/classes";
import { TitleAndDescription } from "./TitleAndDescription";

export interface TinyProps extends PropsWithChildren {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}
export const Tiny = ({
  className,
  icon,
  title,
  description,
  children,
}: TinyProps) => {
  return (
    <div
      className={classNames(
        "ink:flex ink:flex-col ink:justify-start ink:gap-3 ink:box-border",
        className
      )}
    >
      {icon}
      <TitleAndDescription
        title={title}
        description={description}
        size="small"
      />
      {children}
    </div>
  );
};

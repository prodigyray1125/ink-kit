import { PropsWithChildren } from "react";
import { classNames } from "../../util/classes";

export interface InkHeaderProps extends PropsWithChildren {
  title: React.ReactNode;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const InkHeader: React.FC<InkHeaderProps> = ({
  title,
  icon,
  children,
}) => {
  return (
    <div
      className={classNames(
        "ink:w-full ink:flex ink:items-center ink:justify-between ink:font-default ink:box-border ink:gap-2 ink:text-text-default"
      )}
    >
      <div className="ink:text-h4 ink:whitespace-nowrap">{title}</div>
      {children}
      <div className="ink:size-3 ink:shrink-0">{icon}</div>
    </div>
  );
};

import { classNames } from "../../util/classes";
import { PropsWithChildren } from "react";

export interface PanelProps extends PropsWithChildren {
  className?: string;
}

export const Panel: React.FC<PanelProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "ink:min-w-[240px] ink:mt-1 ink:p-1 ink:box-border",
        "ink:rounded-lg ink:bg-background-light",
        "ink:flex ink:flex-col ink:gap-1.5",
        "ink:transition-opacity ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0",
        "ink:overflow-y-auto ink:h-full",
        className
      )}
    >
      {children}
    </div>
  );
};

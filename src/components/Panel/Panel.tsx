import { classNames } from "../../util/classes";
import { PropsWithChildren } from "react";

export const Panel: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      className={classNames(
        "ink:min-w-[240px] ink:mt-1 ink:p-1",
        "ink:rounded-lg ink:bg-background-light ink:shadow-menu",
        "ink:flex ink:flex-col ink:gap-1.5",
        "ink:transition-opacity ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0"
      )}
    >
      {children}
    </div>
  );
};

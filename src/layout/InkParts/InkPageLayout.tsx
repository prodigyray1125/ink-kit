import { PropsWithChildren } from "react";
import { classNames, variantClassNames } from "../../util/classes";

export interface InkPageLayoutProps extends PropsWithChildren {
  columns?: 1 | 2 | 3;
}

export const InkPageLayout: React.FC<InkPageLayoutProps> = ({
  columns = 1,
  children,
}) => {
  return (
    <div
      className={classNames(
        "ink:grid ink:gap-2 ink:flex-1",
        variantClassNames(columns, {
          1: "ink:grid-cols-1",
          2: "ink:grid-cols-[minmax(260px,1fr)_400px]",
          3: "ink:grid-cols-[260px_minmax(260px,1fr)_400px]",
        }),
        "ink:*:bg-background-light ink:*:rounded-lg"
      )}
    >
      {children}
    </div>
  );
};

import { PropsWithChildren } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { forwardRef } from "react";

export interface InkPanelProps extends PropsWithChildren {
  className?: string;
  size?: "auto" | "lg" | "md";
  centered?: boolean;
}

export const InkPanel = forwardRef<HTMLDivElement, InkPanelProps>(
  ({ className, size = "auto", centered = false, children }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          "ink:flex ink:flex-col ink:justify-between ink:gap-3 ink:p-3 ink:box-border",
          "ink:*:nth-2:flex-1 ink:*:nth-2:flex ink:*:nth-2:items-start ink:*:nth-2:justify-start",
          "ink:bg-background-light ink:shadow-modal ink:rounded-lg",
          "ink:font-default ink:text-text-default",
          "ink:transition-default-animation ink:in-data-closed:scale-95 ink:in-data-closed:opacity-0",
          variantClassNames(size, {
            auto: "",
            lg: "ink:min-w-[320px] ink:sm:min-w-[640px] ink:min-h-[480px] ink:max-w-4xl",
            md: "ink:min-w-[200px] ink:sm:min-w-[300px] ink:min-h-[300px]",
          }),
          centered &&
            "ink:justify-center ink:items-center ink:*:nth-2:items-center ink:*:nth-2:justify-center",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

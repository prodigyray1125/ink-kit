import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { classNames } from "../../util/classes";

const tagVariants = cva(
  "ink:inline-flex ink:font-default ink:items-center ink:gap-1 ink:flex-shrink-0 ink:rounded-full ink:text-body-3-bold ink:font-bold ink:leading-[18px]",
  {
    variants: {
      variant: {
        fill: "ink:bg-background-container ink:text-text-muted ink:h-4 ink:px-1.5",
        outline:
          "ink:text-text-muted ink:border-background-container ink:border-[1.5px] ink:h-4 ink:px-1.5",
        filter:
          "ink:text-text-muted ink:hover:text-text-default ink:duration-200 ink:cursor-pointer ink:h-5 ink:px-1.5",
        featured:
          "ink:bg-background-container ink:text-text-on-secondary ink:text-caption-2-bold ink:h-2 ink:px-1",
      },
      selected: {
        true: "",
        false: "",
      },
      hasIcon: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "filter",
        selected: true,
        class: "ink:bg-background-container ink:text-text-default",
      },
    ],
    defaultVariants: {
      variant: "fill",
      hasIcon: false,
    },
  }
);

export interface TagProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Omit<VariantProps<typeof tagVariants>, "hasIcon"> {
  icon?: React.ReactNode;
}

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ className, variant, selected, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(
          tagVariants({ variant, selected, hasIcon: !!icon, className })
        )}
        {...props}
      >
        {icon && (
          <div
            className={classNames(
              "ink:flex ink:items-center ink:justify-center",
              variant === "featured" ? "ink:size-1.5" : "ink:size-2"
            )}
          >
            {icon}
          </div>
        )}
        {children}
      </div>
    );
  }
);

Tag.displayName = "Tag";

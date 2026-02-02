import React, { forwardRef } from "react";
import { classNames, variantClassNames } from "../../util/classes";
import { Slot, Slottable } from "../Slot";
import { cva, type VariantProps } from "class-variance-authority";

export interface CardProps extends VariantProps<typeof cardVariants> {
  className?: string;
  children: React.ReactNode;
  image?: React.ReactNode;
  clickable?: boolean;
  asChild?: boolean;
}

const cardVariants = cva(
  `
ink:grid ink:grid-cols-1
ink:gap-3
ink:relative 
ink:bg-background-container 
ink:font-default
ink:box-border
ink:overflow-hidden
`,
  {
    variants: {
      variant: {
        default: "ink:bg-background-container",
        "light-purple": "ink:bg-ink-light-purple",
        secondary: "ink:bg-button-secondary",
      },
      imageLocation: {
        left: "ink:sm:grid-cols-2",
        right: "ink:sm:grid-cols-2",
        top: "ink:sm:grid-cols-1",
      },
      clickable: {
        true: "ink:cursor-pointer",
        false: "",
      },
      size: {
        noPadding: "ink:rounded-lg",
        small: "ink:p-2 ink:pb-3 ink:sm:p-3 ink:rounded-lg",
        default: "ink:p-2 ink:pb-3 ink:sm:p-3 ink:rounded-xl",
      },
    },
    compoundVariants: [
      {
        variant: "secondary",
        clickable: true,
        className: "ink:hover:bg-button-secondary-hover",
      },
      {
        size: "small",
        imageLocation: "left",
        className: "ink:grid-cols-[128px_1fr] ink:sm:grid-cols-[128px_1fr]",
      },
    ],
    defaultVariants: {
      size: "default",
    },
  }
);

export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  {
    children,
    className,
    image,
    imageLocation,
    asChild,
    variant,
    clickable,
    size,
  },
  ref
) {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      ref={ref}
      className={classNames(
        cardVariants({
          variant,
          imageLocation: image ? imageLocation : undefined,
          clickable,
          size: size || (image ? "default" : "big"),
          className,
        }),
        className
      )}
      style={
        {
          "--ink-card-default-color":
            variant === "light-purple"
              ? "var(--ink-background-light)"
              : "var(--ink-text-default)",
          "--ink-card-muted-color":
            variant === "light-purple"
              ? "var(--ink-background-light)"
              : "var(--ink-text-muted)",
          "--ink-card-rounded": variantClassNames(size || "default", {
            noPadding: "",
            small: "var(--ink-base-radius-sm)",
            default: "var(--ink-base-radius-lg)",
          }),
        } as React.CSSProperties
      }
    >
      <Slottable child={children}>
        {(child) => (
          <>
            {image}
            <div
              className={classNames(
                "ink:flex ink:flex-col ink:gap-2 ink:sm:gap-6 ink:justify-center",
                "ink:text-text-default ink:box-border",
                !!image && "ink:p-2 ink:sm:p-3",
                imageLocation === "right" && "ink:sm:-order-1",
                imageLocation !== "top" &&
                  !!image &&
                  variantClassNames(size || "default", {
                    default: "ink:sm:py-[100px]",
                    noPadding: "ink:sm:py-[100px]",
                    small: "",
                  })
              )}
            >
              {child}
            </div>
          </>
        )}
      </Slottable>
    </Component>
  );
});

Card.displayName = "Card";

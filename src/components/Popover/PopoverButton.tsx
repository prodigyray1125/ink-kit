import { PopoverButton as HeadlessPopoverButton } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { Button } from "../Button";
import { Slot } from "../Slot";

export interface PopoverButtonProps extends PropsWithChildren {
  asChild?: boolean;
  className?: string;
  disabled?: boolean;
  autoFocus?: boolean;
}

export const PopoverButton: React.FC<PopoverButtonProps> = ({
  asChild,
  className,
  disabled,
  autoFocus,
  ...props
}) => {
  return (
    <HeadlessPopoverButton
      as={asChild ? Slot : Button}
      className={className}
      disabled={disabled}
      autoFocus={autoFocus}
      {...(asChild ? {} : { variant: "primary", size: "md" })}
      {...props}
    />
  );
};

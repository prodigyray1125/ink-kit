import { Popover as HeadlessPopover } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { classNames } from "../../util/classes";

export interface PopoverProps extends PropsWithChildren {
  className?: string;
}

export const Popover = ({ children, className }: PopoverProps) => {
  return (
    <HeadlessPopover
      className={classNames("ink:relative ink:font-default", className)}
    >
      {children}
    </HeadlessPopover>
  );
};

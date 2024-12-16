import { ListboxButton as HeadlessListboxButton } from "@headlessui/react";
import { forwardRef } from "react";
import { InkIcon } from "../..";
import { ListItem, ListItemProps } from "../ListItem";
import { classNames } from "../../util/classes";

interface ListboxButtonProps extends ListItemProps {
  className?: string;
}

export const ListboxButton = forwardRef<HTMLButtonElement, ListboxButtonProps>(
  ({ className, children, variant = "secondary", ...props }, ref) => {
    return (
      <HeadlessListboxButton
        className={classNames(className, "ink:focus-visible:outline-none ink:data-active:border-text-on-secondary")}
        ref={ref}
        as={ListItem}
        variant={variant}
        iconRight={<InkIcon.Chevron />}
        {...props}
      >
        {children}
      </HeadlessListboxButton>
    );
  }
);

ListboxButton.displayName = "ListboxButton";

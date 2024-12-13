import { ListboxButton as HeadlessListboxButton } from "@headlessui/react";
import { forwardRef } from "react";
import { InkIcon } from "../..";
import { ListItem, ListItemProps } from "../ListItem";

interface ListboxButtonProps extends ListItemProps {
  className?: string;
}

export const ListboxButton = forwardRef<HTMLButtonElement, ListboxButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <HeadlessListboxButton
        className={className}
        ref={ref}
        as={ListItem}
        variant="secondary"
        iconRight={<InkIcon.Chevron />}
        {...props}
      >
        {children}
      </HeadlessListboxButton>
    );
  }
);

ListboxButton.displayName = "ListboxButton";

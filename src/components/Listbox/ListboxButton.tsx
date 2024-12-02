import { ListboxButton as HeadlessListboxButton } from "@headlessui/react";
import { forwardRef, PropsWithChildren } from "react";
import { InkIcon } from "../..";
import { ListItem } from "../ListItem";

interface ListboxButtonProps extends PropsWithChildren {
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

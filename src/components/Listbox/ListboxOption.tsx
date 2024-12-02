import { ListboxOption as HeadlessListboxOption } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { classNames } from "../../util/classes";
import { ListItem } from "../ListItem";
import { InkIcon } from "../..";

interface ListboxOptionProps<T> extends PropsWithChildren {
  value: T;
  disabled?: boolean;
}

export const ListboxOption = <T,>({
  children,
  disabled,
  ...props
}: ListboxOptionProps<T>) => {
  return (
    <HeadlessListboxOption
      className={classNames(
        "ink:flex ink:items-center ink:px-3 ink:py-2 ink:text-sm ink:cursor-pointer"
      )}
      disabled={disabled}
      as={ListItem}
      iconRight={<InkIcon.Check className="ink:not-in-data-selected:hidden" />}
      {...props}
    >
      {children}
    </HeadlessListboxOption>
  );
};

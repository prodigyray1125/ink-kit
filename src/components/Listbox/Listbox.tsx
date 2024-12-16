import { Listbox as HeadlessListbox } from "@headlessui/react";
import { PropsWithChildren } from "react";

export interface ListboxProps<T> extends PropsWithChildren {
  value: T;
  onChange: (value: T) => void;
  /** If you provide `multiple`, then `value` and `onChange` must use an array. */
  multiple?: boolean;
}

export const Listbox = <T extends object>({
  children,
  value,
  onChange,
  multiple,
}: ListboxProps<T>) => {
  return (
    <HeadlessListbox
      multiple={multiple}
      value={value}
      onChange={onChange}
    >
      {children}
    </HeadlessListbox>
  );
};

import { ListboxOptions as HeadlessListboxOptions } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { Panel } from "../Panel";
import { classNames } from "../../util/classes";

export interface ListboxOptionsProps extends PropsWithChildren {
  className?: string;
}

export const ListboxOptions = ({
  className,
  children,
}: ListboxOptionsProps) => {
  return (
    <HeadlessListboxOptions
      className={classNames("ink:absolute ink:z-10 ink:box-border", className)}
      anchor="bottom end"
    >
      <Panel className="ink:max-h-[300px]">{children}</Panel>
    </HeadlessListboxOptions>
  );
};

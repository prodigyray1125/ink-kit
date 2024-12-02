import { ListboxOptions as HeadlessListboxOptions } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { Panel } from "../Panel";

export const ListboxOptions = ({ children }: PropsWithChildren) => {
  return (
    <HeadlessListboxOptions
      className="ink:absolute ink:z-10 ink:min-w-[var(--button-width)]"
      anchor="bottom end"
    >
      <Panel>{children}</Panel>
    </HeadlessListboxOptions>
  );
};

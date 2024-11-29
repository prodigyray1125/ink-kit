import { PopoverPanel as HeadlessPopoverPanel } from "@headlessui/react";
import { classNames } from "../../util/classes";
import { PropsWithChildren } from "react";

export interface PopoverPanelProps extends PropsWithChildren {
  headerContent?: React.ReactNode;
}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  headerContent,
  children,
}) => {
  return (
    <HeadlessPopoverPanel
      className={classNames(
        "ink:absolute ink:z-10 ink:min-w-[240px]",
        "ink:rounded-lg ink:bg-background-light ink:p-1.5 ink:shadow-menu",
        "ink:flex ink:flex-col ink:gap-1.5",
        "ink:transition-opacity ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0"
      )}
      anchor={{ to: "bottom end", gap: 8 }}
    >
      {headerContent && (
        <div className="ink:flex ink:flex-col">{headerContent}</div>
      )}
      <div className="ink:flex ink:flex-col ink:gap-0.5">{children}</div>
    </HeadlessPopoverPanel>
  );
};

import { PopoverPanel as HeadlessPopoverPanel } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { Panel } from "../Panel";

export interface PopoverPanelProps extends PropsWithChildren {
  headerContent?: React.ReactNode;
}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  headerContent,
  children,
}) => {
  return (
    <HeadlessPopoverPanel className="ink:absolute ink:z-10" anchor="bottom end">
      <Panel>
        {headerContent && (
          <div className="ink:flex ink:flex-col">{headerContent}</div>
        )}
        <div className="ink:flex ink:flex-col ink:gap-0.5">{children}</div>
      </Panel>
    </HeadlessPopoverPanel>
  );
};

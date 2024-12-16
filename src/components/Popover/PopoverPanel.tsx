import { PopoverPanel as HeadlessPopoverPanel } from "@headlessui/react";
import { PropsWithChildren } from "react";
import { Panel } from "../Panel";
import { classNames } from "../../util/classes";

export interface PopoverPanelProps extends PropsWithChildren {
  className?: string;
  headerContent?: React.ReactNode;
}

export const PopoverPanel: React.FC<PopoverPanelProps> = ({
  className,
  headerContent,
  children,
}) => {
  return (
    <HeadlessPopoverPanel
      className={classNames("ink:absolute ink:z-10", className)}
      anchor="bottom end"
    >
      <Panel>
        {headerContent && (
          <div className="ink:flex ink:flex-col">{headerContent}</div>
        )}
        <div className="ink:flex ink:flex-col ink:gap-0.5">{children}</div>
      </Panel>
    </HeadlessPopoverPanel>
  );
};

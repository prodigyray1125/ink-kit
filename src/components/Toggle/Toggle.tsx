import { Switch } from "@headlessui/react";
import { classNames } from "../../util/classes";

export interface ToggleProps {
  checked: boolean;
  onChange: (enabled: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = ({ checked, onChange }) => {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className={classNames(
        "ink:group ink:relative ink:inline-flex ink:h-4 ink:w-6 ink:shrink-0 ink:cursor-pointer ink:rounded-full ink:box-border",
        "ink:transition-colors ink:transition-default-animation",
        "ink:bg-background-container",
        "ink:ring-text-on-secondary ink:focus-visible:outline-none ink:focus-visible:text-on-primary ink:focus-visible:ring-2 ink:focus-visible:ring-offset-2",
        "ink:data-checked:bg-status-success",
        "ink:flex ink:items-center ink:p-0.5"
      )}
    >
      <span
        style={
          /**
           * Somehow, we cannot use `calc(100%-var(--ink-spacing-1_5))` directly in the class name
           * So this is a small workaround to make it work.
           */
          {
            "--ink-translate-x": "calc(100% - var(--ink-spacing-1))",
          } as React.CSSProperties
        }
        className={classNames(
          "ink:box-border ink:pointer-events-none ink:inline-block ink:size-3 ink:transform ink:rounded-full ink:bg-text-on-primary ink:shadow ink:ring-0",
          "ink:transition ink:transition-default-animation",
          "ink:group-data-checked:translate-x-(--ink-translate-x)"
        )}
      />
      <span className="ink:sr-only">Toggle switch</span>
    </Switch>
  );
};

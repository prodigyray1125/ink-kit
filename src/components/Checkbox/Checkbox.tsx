import { Checkbox as HeadlessCheckbox } from "@headlessui/react";
import { classNames } from "../../util/classes";
import { InkIcon } from "../..";

export interface CheckboxProps {
  checked: boolean;
  indeterminate?: boolean;
  onChange: (enabled: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate,
  onChange,
}) => {
  return (
    <HeadlessCheckbox
      checked={checked}
      onChange={onChange}
      indeterminate={!checked && indeterminate}
      className={classNames(
        "ink:group ink:relative ink:flex ink:items-center ink:justify-center ink:size-3 ink:shrink-0 ink:cursor-pointer ink:rounded-xs ink:box-border",
        "ink:transition-colors ink:transition-default-animation",
        "ink:bg-background-container ink:shadow-xs",
        "ink:ring-text-on-secondary ink:focus-visible:outline-none ink:focus-visible:text-on-primary ink:focus-visible:ring-2 ink:focus-visible:ring-offset-2",
        "ink:data-checked:bg-button-primary",
        "ink:data-indeterminate:bg-button-primary",
        "ink:flex ink:items-center",
        "ink:text-button-primary ink:data-checked:text-text-on-primary ink:data-indeterminate:text-text-on-primary"
      )}
    >
      <div className="ink:absolute ink:inset-0 ink:flex ink:items-center ink:justify-center ink:box-border">
        <InkIcon.Check
          className={classNames(
            "ink:size-3",
            "ink:animate-svg-path ink:in-data-checked:not-in-data-indeterminate:animate-svg-path-start"
          )}
        />
      </div>

      <InkIcon.Minus
        className={classNames(
          "ink:size-3",
          "ink:animate-svg-path ink:in-data-indeterminate:animate-svg-path-start"
        )}
      />
    </HeadlessCheckbox>
  );
};

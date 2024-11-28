import { Checkbox as HeadlessCheckbox } from "@headlessui/react";
import { classNames } from "../../util/classes";

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
        "ink:transition-colors ink:duration-200 ink:ease-in-out",
        "ink:border-2 ink:border-transparent ink:bg-background-container ink:shadow-xs",
        "ink:ring-text-on-secondary ink:focus-visible:outline-none ink:focus-visible:text-on-primary ink:focus-visible:ring-2 ink:focus-visible:ring-offset-2",
        "ink:data-checked:bg-button-primary ink:data-checked:hover:bg-button-primary-hover",
        "ink:data-indeterminate:bg-button-primary ink:data-indeterminate:hover:bg-button-primary-hover",
        "ink:flex ink:items-center"
      )}
    >
      <div className="ink:absolute ink:inset-0 ink:flex ink:items-center ink:justify-center">
        {/** See if those SVGs should be icons in our standard icon library. */}
        <svg
          className="ink:size-1.5 ink:text-text-on-primary ink:group-data-indeterminate:opacity-0 ink:transition-opacity ink:duration-200 ink:ease-in-out opacity-0 starting:opacity-100"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.5905 0.748484C12.0362 1.07459 12.1332 1.70028 11.8071 2.14601L5.30384 11.0349C5.14317 11.2545 4.89996 11.3992 4.6303 11.4355C4.36064 11.4718 4.08781 11.3967 3.87476 11.2274L0.378025 8.44967C-0.0544173 8.10614 -0.126496 7.47709 0.217033 7.04465C0.560562 6.6122 1.18961 6.54013 1.62205 6.88365L4.30408 9.01423L10.193 0.965086C10.5191 0.519357 11.1448 0.422381 11.5905 0.748484Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <svg
        className="ink:size-1.5 ink:text-text-on-primary ink:group-not-data-indeterminate:opacity-0 ink:transition-opacity ink:duration-200 ink:ease-in-out opacity-0 starting:opacity-100"
        width="12"
        height="2"
        viewBox="0 0 12 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 1C0 0.447715 0.447715 0 1 0H11C11.5523 0 12 0.447715 12 1C12 1.55228 11.5523 2 11 2H1C0.447715 2 0 1.55228 0 1Z"
          fill="currentColor"
        />
      </svg>
    </HeadlessCheckbox>
  );
};

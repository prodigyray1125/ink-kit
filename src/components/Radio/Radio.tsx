import { Radio as HeadlessRadio } from "@headlessui/react";
import { classNames } from "../../util/classes";
import { Slot } from "../Slot";

export interface RadioProps {
  value: string;
  asChild?: boolean;
}

export const Radio: React.FC<RadioProps> = ({ value, asChild }) => {
  const Component = asChild ? Slot : HeadlessRadio;
  return (
    <Component
      value={value}
      className={classNames(
        "ink:group ink:relative ink:flex ink:items-center ink:justify-center ink:size-3 ink:shrink-0 ink:cursor-pointer ink:rounded-full ink:box-border",
        "ink:transition-colors ink:transition-default-animation",
        "ink:border-2 ink:border-transparent ink:bg-background-container ink:shadow-xs",
        "ink:ring-text-on-secondary ink:focus-visible:outline-none ink:focus-visible:text-on-primary ink:focus-visible:ring-2 ink:focus-visible:ring-offset-2",
        "ink:data-checked:bg-button-primary ink:data-checked:hover:bg-button-primary-hover"
      )}
    >
      <div className="ink:absolute ink:inset-0 ink:flex ink:items-center ink:justify-center">
        <div className="ink:size-[10px] ink:rounded-full ink:bg-background-light ink:transition-opacity ink:transition-default-animation ink:opacity-0 ink:group-data-checked:opacity-100" />
      </div>
    </Component>
  );
};

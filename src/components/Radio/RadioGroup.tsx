import { RadioGroup as HeadlessRadioGroup } from "@headlessui/react";
import { PropsWithChildren } from "react";

export interface RadioGroupProps extends PropsWithChildren {
  value: string;
  onChange: (value: string) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  value,
  onChange,
  children,
}) => {
  return (
    <HeadlessRadioGroup
      className="ink:flex ink:flex-col ink:gap-2"
      value={value}
      onChange={onChange}
    >
      {children}
    </HeadlessRadioGroup>
  );
};

RadioGroup.displayName = "RadioGroup";

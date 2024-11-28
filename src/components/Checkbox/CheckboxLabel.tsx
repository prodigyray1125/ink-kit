import { Description, Field, Label } from "@headlessui/react";
import { PropsWithChildren } from "react";

export interface CheckboxLabelProps extends PropsWithChildren {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  label,
  description,
  children,
}) => {
  return (
    <Field className="ink:flex ink:flex-col ink:font-default">
      <div className="ink:flex ink:items-center ink:gap-1">
        {children}
        <Label className="ink:cursor-pointer ink:h-3 ink:flex ink:items-center ink:justify-center ink:text-body-2 ink:text-text-default">
          {label}
        </Label>
      </div>

      {description && (
        <Description className="ink:text-caption-2 ink:text-text-default">
          {description}
        </Description>
      )}
    </Field>
  );
};

import { Description, Field, Label } from "@headlessui/react";
import { PropsWithChildren } from "react";

export interface FieldLabelProps extends PropsWithChildren {
  label: React.ReactNode;
  description?: React.ReactNode;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({
  label,
  description,
  children,
}) => {
  return (
    <Field className="ink:flex ink:flex-col ink:font-default ink:group">
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

import { FieldLabel, FieldLabelProps } from "../FieldLabel";

export interface RadioLabelProps extends FieldLabelProps {}

export const RadioLabel: React.FC<RadioLabelProps> = (props) => {
  return <FieldLabel {...props} />;
};

RadioLabel.displayName = "RadioLabel";

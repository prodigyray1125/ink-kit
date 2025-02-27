import { classNames } from "../../../util/classes";
import { TitleAndDescription } from "./TitleAndDescription";

interface CallToActionProps {
  title: React.ReactNode;
  description: React.ReactNode;
  button: React.ReactNode;
  className?: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  title,
  description,
  button,
  className,
}) => {
  return (
    <div className={classNames("ink:flex ink:flex-col ink:gap-3", className)}>
      <TitleAndDescription title={title} description={description} />
      <div className="ink:flex ink:gap-2 ink:box-border">{button}</div>
    </div>
  );
};

CallToAction.displayName = "CallToAction";

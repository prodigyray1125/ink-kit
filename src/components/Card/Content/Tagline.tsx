import { classNames } from "../../../util/classes";

interface TaglineProps {
  title: React.ReactNode;
  buttons: React.ReactNode;
  className?: string;
}

export const Tagline: React.FC<TaglineProps> = ({
  title,
  buttons,
  className,
}) => {
  return (
    <div
      className={classNames(
        "ink:flex ink:flex-col ink:gap-4 sm:gap-8 ink:text-text-default ink:px-0 ink:py-6 ink:sm:px-16 ink:sm:py-12 ink:justify-between",
        className
      )}
    >
      <h3 className="ink:text-h2 ink:sm:text-h1 ink:m-0 ink:box-border ink:text-center">
        {title}
      </h3>

      <div className="ink:flex ink:justify-center ink:flex-wrap ink:gap-2 ink:m-0 ink:box-border">
        {buttons}
      </div>
    </div>
  );
};

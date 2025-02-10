import { classNames, variantClassNames } from "../../../util/classes";

export interface TitleAndDescriptionProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  size?: "default" | "small";
}

export const TitleAndDescription = ({
  title,
  description,
  size = "default",
}: TitleAndDescriptionProps) => {
  return (
    <div className="ink:flex ink:flex-col ink:gap-2">
      <h3
        className={classNames(
          "ink:text-body-1-bold ink:text-text-default ink:box-border ink:m-0 ink:-my-px",
          variantClassNames(size, {
            default: "ink:text-h3",
            small: "ink:text-body-1-regular",
          })
        )}
      >
        {title}
      </h3>
      {description && (
        <p
          className={classNames(
            "ink:text-body-3-regular ink:text-text-muted ink:box-border ink:m-0",
            variantClassNames(size, {
              default: "ink:text-body-1-regular",
              small: "ink:text-body-3-regular",
            })
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

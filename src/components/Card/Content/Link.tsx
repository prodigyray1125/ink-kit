import { InkIcon } from "../../..";
import { Tiny } from "./Tiny";

interface LinkProps {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  linkIcon?: React.ReactNode;
}

export const Link = ({
  className,
  title,
  description,
  icon,
  linkIcon = <InkIcon.Arrow className="ink:size-2 ink:rotate-225" />,
}: LinkProps) => {
  return (
    <Tiny
      className={className}
      icon={
        icon ? (
          <div className="ink:size-6 ink:text-(--ink-card-muted-color)">
            {icon}
          </div>
        ) : undefined
      }
      title={title}
      description={description}
    >
      {linkIcon && (
        <div className="ink:absolute ink:top-3 ink:right-3 ink:text-(--ink-card-default-color)">
          {linkIcon}
        </div>
      )}
    </Tiny>
  );
};

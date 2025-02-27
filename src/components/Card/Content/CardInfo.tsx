import { PropsWithChildren } from "react";
import { classNames } from "../../../util/classes";
import { TitleAndDescription } from "./TitleAndDescription";
import { Card } from "../Card";

export interface CardInfoProps extends PropsWithChildren {
  className?: string;
  icon?: React.ReactNode;
  title: string;
  description: string;
}
export const CardInfo = ({
  className,
  icon,
  title,
  description,
  children,
}: CardInfoProps) => {
  return (
    <Card variant="secondary" className={className}>
      <div
        className={classNames(
          "ink:flex ink:flex-col ink:justify-start ink:gap-3 ink:box-border ink:flex-1",
          className
        )}
      >
        {icon}
        <TitleAndDescription
          title={title}
          description={description}
          size="cardInfo"
        />
        {children}
      </div>
    </Card>
  );
};

CardInfo.displayName = "CardInfo";

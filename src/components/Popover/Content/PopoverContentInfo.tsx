import React from "react";

export interface PopoverContentInfoProps {
  title: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
}

export const PopoverContentInfo: React.FC<PopoverContentInfoProps> = ({
  title,
  content,
  icon,
}) => {
  return (
    <div className="ink:text-body-2-bold ink:p-1.5 ink:bg-background-container ink:rounded-md ink:flex ink:gap-1.5 ink:font-default">
      <div className="ink:flex ink:flex-col ink:flex-1">
        <div className="ink:text-text-muted ink:text-caption-1-bold">
          {title}
        </div>
        <div className="ink:text-h4 ink:text-text-default">{content}</div>
      </div>
      {icon && <div>{icon}</div>}
    </div>
  );
};

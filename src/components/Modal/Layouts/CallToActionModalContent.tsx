export interface CallToActionModalContentProps {
  title: React.ReactNode;
  content: React.ReactNode;
  button: React.ReactNode;
}

export const CallToActionModalContent = ({
  title,
  content,
  button,
}: CallToActionModalContentProps) => {
  return (
    <div className="ink:flex ink:flex-col ink:justify-center ink:items-center ink:gap-5 ink:max-w-sm">
      <div className="ink:flex ink:flex-col ink:items-center ink:gap-2">
        <div className="ink:text-h4 ink:font-bold">{title}</div>
        <div className="ink:text-body-2 ink:text-center">{content}</div>
      </div>
      {button}
    </div>
  );
};

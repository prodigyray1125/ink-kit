import { InkIcon } from "../..";
import { InkHeader } from "../InkParts";
import { InkPanel } from "../InkParts/InkPanel";

const ExamplePanel = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => (
  <InkPanel className={className}>
    <InkHeader title={text} icon={<InkIcon.Settings />} />
    <div className="ink:flex-1">{text}</div>
  </InkPanel>
);

export const ExampleDynamicContent = ({
  className,
  columns,
}: {
  className?: string;
  columns?: number;
}) => {
  if (!columns || columns === 1)
    return <ExamplePanel className={className} text="Only Content" />;
  return (
    <>
      <ExamplePanel className={className} text="Column 1" />
      {columns > 1 && <ExamplePanel className={className} text="Column 2" />}
      {columns > 2 && <ExamplePanel className={className} text="Column 3" />}
    </>
  );
};

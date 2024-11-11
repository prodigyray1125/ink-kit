import { classNames } from "../util/classes";
import * as Icons from "./index";

const icons = Object.values(Icons);

export const AllIcons: React.FC<{
  containerClassName?: string;
  iconClassName?: string;
}> = ({ containerClassName, iconClassName }) => {
  return (
    <div
      className={classNames(
        "ink-flex ink-flex-wrap ink-gap-4",
        containerClassName
      )}
    >
      {icons.map((Icon) => (
        <Icon
          className={classNames("ink-size-6", iconClassName)}
          key={Icon.name}
        />
      ))}
    </div>
  );
};

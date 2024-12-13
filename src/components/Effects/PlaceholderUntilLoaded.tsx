import { PropsWithChildren } from "react";
import { classNames } from "../../util/classes";
import { Slot } from "../Slot";

export interface PlaceholderUntilLoadedProps extends PropsWithChildren {
  placeholder: React.ReactNode;
  isLoading: boolean;
  className?: string;
  asChild?: boolean;
}

export const PlaceholderUntilLoaded: React.FC<PlaceholderUntilLoadedProps> = ({
  placeholder,
  children,
  isLoading,
  className = "",
  asChild,
}) => {
  const Component = asChild ? Slot : "div";
  return (
    <Component className={classNames("ink:relative", className)}>
      <div
        className={classNames(
          "ink:absolute ink:inset-0",
          "ink:transition-opacity ink:duration-100 ink:ease-in-out ink:opacity-100",
          !isLoading && "ink:opacity-0 ink:pointer-events-none ink:select-none"
        )}
      >
        {placeholder}
      </div>
      {/** This placeholder is used to ensure the content is visible when the fade out is active */}
      <div className={`${isLoading ? "ink:opacity-0" : "ink:hidden"}`}>
        {placeholder}
      </div>
      <span className={isLoading ? "ink:hidden" : ""}>{children}</span>
    </Component>
  );
};

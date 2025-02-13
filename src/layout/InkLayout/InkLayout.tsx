import { PropsWithChildren, useState } from "react";
import { classNames } from "../../util/classes";
import { Button, InkIcon } from "../..";

export interface InkLayoutProps extends PropsWithChildren {
  className?: string;
  mainIcon?: React.ReactNode;
  headerContent?: React.ReactNode;
  sideNavigation?: React.ReactNode;
  topNavigation?: React.ReactNode;
  mobileNavigation?: ({
    closeMobileNavigation,
  }: {
    closeMobileNavigation: () => void;
  }) => React.ReactNode;
  /** Makes the layout really close to the edges of the screen, meaning you will have to handle the padding yourself. */
  snug?: boolean;
}

export const InkLayout: React.FC<InkLayoutProps> = ({
  className,
  mainIcon = <InkIcon.Logo.Placeholder className="ink:size-5" />,
  headerContent,
  sideNavigation,
  topNavigation,
  mobileNavigation,
  snug = false,
  children,
}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const hasSomethingInHeader = !!headerContent || !!mobileNavigation;
  return (
    <>
      <div
        className={classNames(
          "ink:flex ink:flex-col ink:min-h-full ink:min-w-[320px] ink:font-default ink:text-text-default ink:gap-5 ink:box-border ink:w-full",
          className
        )}
      >
        <div className="ink:w-full ink:grid ink:grid-cols-[1fr_auto_1fr] ink:justify-between ink:items-center ink:gap-3 ink:px-3 ink:sm:px-5 ink:pt-4 ink:box-border ink:sticky ink:top-0 ink:z-10">
          <div className="ink:flex ink:items-center ink:justify-start ink:size-5 ink:gap-2">
            {mainIcon}
          </div>
          <div className="ink:flex ink:flex-1 ink:justify-center ink:items-center">
            {isMobileNavOpen && (
              <div className="ink:text-h3 ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0">
                Menu
              </div>
            )}
            {topNavigation && (
              <div className="ink:hidden ink:lg:block">{topNavigation}</div>
            )}
          </div>
          {hasSomethingInHeader && (
            <div className="ink:flex ink:gap-1 ink:justify-end ink:items-center">
              {!isMobileNavOpen && headerContent && (
                <div className="ink:flex ink:items-center">{headerContent}</div>
              )}
              {mobileNavigation && (
                <Button
                  variant="wallet"
                  size="md"
                  rounded="full"
                  className="ink:lg:hidden"
                  onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
                >
                  {isMobileNavOpen ? <InkIcon.Close /> : <InkIcon.Menu />}
                </Button>
              )}
            </div>
          )}
        </div>
        <div
          className={classNames(
            "ink:flex ink:flex-1 ink:box-border ink:shrink-0 ink:w-full ink:relative",
            !snug && "ink:px-3 ink:sm:px-5",
            sideNavigation && "ink:lg:pl-0"
          )}
        >
          {sideNavigation && (
            <div
              style={
                {
                  /** Header height + header top padding + header-content gap */
                  "--ink-side-nav-height":
                    "calc(var(--ink-spacing-6) + var(--ink-spacing-5) + var(--ink-spacing-4))",
                } as React.CSSProperties
              }
              className={classNames(
                "ink:w-[244px] ink:px-4 ink:hidden ink:lg:block ink:shrink-0 ink:box-border ink:sticky ink:z-10 ink:bottom-0 ink:top-(--ink-side-nav-height) ink:max-h-[calc(100vh-var(--ink-side-nav-height))]"
              )}
            >
              {sideNavigation}
            </div>
          )}
          <div className="ink:flex-grow ink:flex ink:box-border ink:pb-5 ink:overflow-hidden">
            {children}
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div
          style={
            {
              /** 40px components height + 32px top spacing + 32px spacing between header and content */
              "--ink-mobile-nav-height":
                "calc(var(--ink-spacing-5) + var(--ink-spacing-4) + var(--ink-spacing-4))",
            } as React.CSSProperties
          }
          className={classNames(
            "ink:fixed ink:lg:hidden ink:lg:pointer-events-none ink:inset-0 ink:top-[var(--ink-mobile-nav-height)] ink:z-50",
            "ink:bg-background-light/20 ink:backdrop-blur-lg",
            "ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0"
          )}
        >
          {mobileNavigation &&
            mobileNavigation({
              closeMobileNavigation: () => setIsMobileNavOpen(false),
            })}
        </div>
      )}
    </>
  );
};

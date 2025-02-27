import { PropsWithChildren } from "react";
import { classNames } from "../../util/classes";
import { Button, InkIcon } from "../..";
import { useInkLayoutContext, InkLayoutProvider } from "./InkLayoutContext";

export interface InkLayoutProps extends PropsWithChildren {
  className?: string;
  mainIcon?: React.ReactNode;
  headerContent?: React.ReactNode;
  sideNavigation?: React.ReactNode;
  topNavigation?: React.ReactNode;
  mobileNavigation?: React.ReactNode;
  /** Makes the layout really close to the edges of the screen, meaning you will have to handle the padding yourself. */
  snug?: boolean;
}

export const InkLayout: React.FC<InkLayoutProps> = (props) => {
  return (
    <InkLayoutProvider>
      <InkLayoutContent {...props} />
    </InkLayoutProvider>
  );
};

const InkLayoutContent = ({
  className,
  mainIcon = <InkIcon.Logo.Placeholder className="ink:size-5" />,
  headerContent,
  sideNavigation,
  topNavigation,
  mobileNavigation,
  snug = false,
  children,
}: InkLayoutProps) => {
  const { isMobileNavOpen, setIsMobileNavOpen } = useInkLayoutContext();
  return (
    <>
      <div
        className={classNames(
          "ink:flex ink:flex-col ink:min-h-full ink:min-w-[320px] ink:font-default ink:text-text-default ink:gap-5 ink:box-border ink:w-full",
          className
        )}
      >
        <div className="ink:w-full ink:grid ink:grid-cols-[1fr_auto_1fr] ink:justify-between ink:items-center ink:gap-3 ink:px-3 ink:sm:px-5 ink:py-2 ink:box-border ink:sticky ink:top-0 ink:z-20 ink:backdrop-blur-lg ink:lg:backdrop-blur-none">
          <div className="ink:flex ink:gap-1 ink:justify-start ink:items-center">
            <div className="ink:hidden ink:lg:block ink:size-5">{mainIcon}</div>
            {mobileNavigation && (
              <Button
                variant="transparent"
                size="md"
                rounded="full"
                className="ink:lg:hidden"
                onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              >
                {isMobileNavOpen ? <InkIcon.Close /> : <InkIcon.Menu />}
              </Button>
            )}
          </div>

          <div className="ink:flex ink:items-center ink:justify-center ink:gap-2">
            <div className="ink:block ink:lg:hidden ink:size-5">{mainIcon}</div>
            {topNavigation && (
              <div className="ink:hidden ink:lg:block">{topNavigation}</div>
            )}
          </div>
          <div className="ink:flex ink:gap-1 ink:justify-end ink:items-center">
            {headerContent}
          </div>
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
          <div
            className={classNames(
              "ink:flex-grow ink:flex ink:box-border ink:pb-5 ink:overflow-hidden ink:transition-[filter]",
              isMobileNavOpen && "ink:blur-[5px] ink:lg:blur-none"
            )}
          >
            {children}
          </div>
        </div>
      </div>
      {isMobileNavOpen && (
        <div
          style={
            {
              /** 40px components height + 16px top spacing + 16px spacing between header and content */
              "--ink-mobile-nav-height":
                "calc(var(--ink-spacing-5) + var(--ink-spacing-2) + var(--ink-spacing-2))",
            } as React.CSSProperties
          }
          className={classNames(
            "ink:fixed ink:lg:hidden ink:lg:pointer-events-none ink:inset-0 ink:top-[var(--ink-mobile-nav-height)] ink:z-50",
            "ink:bg-background-light/20 ink:backdrop-blur-lg",
            "ink:transition-default-animation ink:opacity-100 ink:starting:opacity-0"
          )}
        >
          {mobileNavigation}
        </div>
      )}
    </>
  );
};

InkLayout.displayName = "InkLayout";

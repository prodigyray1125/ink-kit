import type { Meta, StoryObj } from "@storybook/react";
import { InkIcon } from "../..";
import { InkLayout, InkLayoutProps, InkLayoutSideNav } from "./index";
import { InkPageLayout } from "../InkParts/InkPageLayout";
import { ExampleSideNav } from "../ForStories/ExampleSideNav";
import { ExampleTopNav } from "../ForStories/ExampleTopNav";
import { InkPanel } from "../InkParts/InkPanel";
import { ExampleMobileNav } from "../ForStories/ExampleMobileNav";

/**
 * This layout component provides a unified layout that can be used for most pages.
 * <br/>
 * It's content is defined by the children prop, which can be used with the [InkPageLayout component](?path=/docs/layouts-inkpagelayout--docs)
 */
const meta: Meta<InkLayoutProps> = {
  title: "Layouts/InkLayout",
  component: InkLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <InkPageLayout>
        <InkPanel>
          <div>Some content</div>
        </InkPanel>
      </InkPageLayout>
    ),
    headerContent: <div>Header content</div>,
    topNavigation: <ExampleTopNav />,
    sideNavigation: <ExampleSideNav />,
    mobileNavigation: <ExampleMobileNav />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

/**
 * The side nav can be a custom component for routing, for instance, if you want to use NextJS' own {`<Link />`} component.
 */
export const SideNavWithCustomButtons: Story = {
  args: {
    sideNavigation: (
      <InkLayoutSideNav
        links={[
          {
            children: <a className="ink:text-button-primary!">Home</a>,
            href: "#home",
            leftIcon: <InkIcon.Home />,
            target: "_self",
            asChild: true,
            active: true,
          },
          {
            children: <a className="ink:text-button-primary!">Settings</a>,
            href: "#settings",
            leftIcon: <InkIcon.Settings />,
            target: "_self",
            asChild: true,
          },
        ]}
      />
    ),
    children: (
      <InkPageLayout>
        <InkPanel>
          The side nav can be a custom component for routing, for instance, if
          you want to use NextJS' own {`<Link />`} component.
        </InkPanel>
      </InkPageLayout>
    ),
  },
};

/**
 * The side nav can be a custom component for routing, for instance, if you want to use NextJS' own {`<Link />`} component.
 */
export const StickySideNav: Story = {
  args: {
    children: (
      <InkPageLayout>
        <InkPanel className="ink:h-[2000px]">
          <div className="ink:flex ink:flex-col ink:flex-1">
            <div className="ink:flex-grow">
              If the main content is bigger than the screen, the side nav will
              be sticky.
            </div>
            <div className="ink:flex ink:flex-0">Bottom</div>
          </div>
        </InkPanel>
      </InkPageLayout>
    ),
  },
};

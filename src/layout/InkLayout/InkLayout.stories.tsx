import type { Meta, StoryObj } from "@storybook/react";
import { InkIcon } from "../..";
import { InkLayout, InkLayoutProps, InkLayoutSideNav } from "./index";
import { InkPageLayout } from "../InkParts/InkPageLayout";
import { ExampleSideNav } from "../ForStories/ExampleSideNav";
import { ExampleTopNav } from "../ForStories/ExampleTopNav";
import { InkPanel } from "../InkParts/InkPanel";

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
            icon: <InkIcon.Home />,
            target: "_self",
            asChild: true,
          },
          {
            children: <a className="ink:text-button-primary!">Settings</a>,
            href: "#settings",
            icon: <InkIcon.Settings />,
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

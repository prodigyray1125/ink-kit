import type { Meta, StoryObj } from "@storybook/react";
import { InkLayout, InkLayoutProps } from "./InkLayout";
import { Button, InkIcon, SegmentedControl } from "../..";
import { InkLayoutSideNav } from "./InkLayoutSideNav";

const SideNav = () => {
  return (
    <InkLayoutSideNav
      links={[
        {
          label: "Home",
          href: "#home",
          icon: <InkIcon.Home />,
          target: "_self",
        },
        {
          label: "Settings",
          href: "#settings",
          icon: <InkIcon.Settings />,
          target: "_self",
        },
      ]}
    />
  );
};

const TopNav = () => {
  return (
    <SegmentedControl
      options={[
        { label: "Home", value: "home", selectedByDefault: true },
        { label: "Settings", value: "settings" },
      ]}
      onOptionChange={() => {}}
    />
  );
};

const meta: Meta<InkLayoutProps> = {
  title: "Layouts/InkLayout",
  component: InkLayout,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    children: <div>Some content</div>,
    headerContent: <div>Header content</div>,
    topNavigation: <TopNav />,
    sideNavigation: <SideNav />,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

// Serves as a fun example of how to use `linkAs` to customize the underlying component of `InkNavLink`.
// It is necessary to allow users to pass `Link`
export const SideNavWithCustomButtons: Story = {
  args: {
    sideNavigation: (
      <InkLayoutSideNav
        linkAs={{
          as: Button,
          asProps: { variant: "primary", as: "a", target: "_self" },
        }}
        links={[
          {
            label: "Home",
            href: "#home",
            icon: <InkIcon.Home />,
            target: "_self",
          },
          {
            label: "Settings",
            href: "#settings",
            icon: <InkIcon.Settings />,
            target: "_self",
          },
        ]}
      />
    ),
    children: (
      <div>
        The side nav can be a custom component for routing, for instance, if you
        want to use NextJS' own {`<Link />`} component.
      </div>
    ),
  },
};

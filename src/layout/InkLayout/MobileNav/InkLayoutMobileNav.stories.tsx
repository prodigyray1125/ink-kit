import type { Meta, StoryObj } from "@storybook/react";
import {
  InkLayoutMobileNav,
  InkLayoutMobileNavProps,
} from "./InkLayoutMobileNav";
import { EXAMPLE_LINKS } from "../../ForStories/ExampleLayoutLinks";

const meta: Meta<InkLayoutMobileNavProps> = {
  decorators: [
    (Story) => (
      <>
        <div className="ink:w-full ink:h-full ink:box-border" />
        <Story />
      </>
    ),
  ],
  title: "Layouts/InkLayoutMobileNav",
  component: InkLayoutMobileNav,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {
    links: EXAMPLE_LINKS,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

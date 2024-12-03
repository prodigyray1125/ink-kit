import type { Meta, StoryObj } from "@storybook/react";
import { InkHeader, InkHeaderProps } from "./InkHeader";
import { InkIcon } from "../..";

/**
 * This component provides a unified header that can be used at the top of a page or a modal.
 */
const meta: Meta<InkHeaderProps> = {
  decorators: [
    (Story) => (
      <div className="ink:w-full ink:p-3 ink:bg-background-container ink:rounded-lg">
        <Story />
      </div>
    ),
  ],
  title: "Layouts/InkHeader",
  component: InkHeader,
  tags: ["autodocs"],
  args: {
    title: "Example Title",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: <InkIcon.Home />,
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SegmentedControl, SegmentedControlProps } from "./SegmentedControl";

const meta: Meta<SegmentedControlProps<string>> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: {
    onOptionChange: fn(),
    options: [
      {
        label: "First",
        value: "first",
        selectedByDefault: true,
      },
      {
        label: "Second",
        value: "second",
      },
      {
        label: "Third",
        value: "third",
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

export const TransparentVariant: Story = {
  args: { variant: "transparent" },
};

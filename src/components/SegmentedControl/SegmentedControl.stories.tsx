import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SegmentedControl, SegmentedControlProps } from "./index";

const meta: Meta<SegmentedControlProps<string>> = {
  title: "Components/SegmentedControl",
  component: SegmentedControl,
  tags: ["autodocs"],
  args: {
    onOptionChange: fn(),
    options: [
      {
        children: "First",
        value: "first",
        selectedByDefault: true,
      },
      {
        children: "Second",
        value: "second",
      },
      {
        children: "Third",
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

export const VariableTabWidth: Story = {
  args: {
    variableTabWidth: true,
    options: Array.from(new Array(5)).map((_, i) => ({
      selectedByDefault: i === 0,
      children: (i + 1).toString().repeat(i + 1),
      value: (i + 1).toString(),
    })),
  },
};

export const DisplayOnDarkBackground: Story = {
  args: { displayOn: "dark" },
};

export const AsLinks: Story = {
  args: {
    options: [
      {
        children: (
          <a href="#first" target="_self">
            First
          </a>
        ),
        value: "first",
        selectedByDefault: true,
        asChild: true,
      },
      {
        children: (
          <a href="#second" target="_self">
            Second
          </a>
        ),
        value: "second",
        asChild: true,
      },
      {
        children: (
          <a href="#third" target="_self">
            Third
          </a>
        ),
        value: "third",
        asChild: true,
      },
    ],
  },
};

export const PrimaryVariant: Story = {
  args: {
    displayOn: "light",
    variant: "primary",
    variableTabWidth: true,
    options: [
      {
        children: <span>Home</span>,
        value: "yeah",
        selectedByDefault: true,
      },
      {
        children: <span>Apps</span>,
        value: "done",
      },
    ],
  },
};

export const PrimaryVariantOnDark: Story = {
  args: {
    displayOn: "dark",
    variant: "primary",
    variableTabWidth: true,
    options: [
      {
        children: <span>Home</span>,
        value: "yeah",
        selectedByDefault: true,
      },
      {
        children: <span>Apps</span>,
        value: "done",
      },
    ],
  },
};

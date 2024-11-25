import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { SegmentedControl, SegmentedControlProps } from "./SegmentedControl";

const meta: Meta<SegmentedControlProps<string, "button" | "a">> = {
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

export const VariableTabWidth: Story = {
  args: {
    variableTabWidth: true,
    options: Array.from(new Array(5)).map((_, i) => ({
      selectedByDefault: i === 0,
      label: (i + 1).toString().repeat(i + 1),
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
        label: "First",
        value: "first",
        selectedByDefault: true,
        props: {
          as: "a",
          asProps: {
            href: "#first",
            target: "_self",
          },
        },
      },
      {
        label: "Second",
        value: "second",
        props: {
          as: "a",
          asProps: {
            href: "#second",
            target: "_self",
          },
        },
      },
      {
        label: "Third",
        value: "third",
        props: {
          as: "a",
          asProps: {
            href: "#third",
            target: "_self",
          },
        },
      },
    ],
  },
};

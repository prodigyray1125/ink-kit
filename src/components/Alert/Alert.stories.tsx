import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertProps } from "./Alert";
import { InkIcon } from "../..";

const meta: Meta<AlertProps> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "This is an alert title",
    description: "This is a longer description that explains more about the alert.",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Info: Story = {
  args: {
    variant: "info",
  },
};

export const WithCustomIcon: Story = {
  args: {
    variant: "info",
    icon: <InkIcon.Settings />,
  },
};

export const TitleOnly: Story = {
  args: {
    title: "Just a title",
    description: undefined,
  },
};
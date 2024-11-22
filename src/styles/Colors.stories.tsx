import type { Meta, StoryObj } from "@storybook/react";
import { classNames } from "../util/classes";

function Colors() {
  const colors = [
    "ink:bg-button-primary ink:text-text-on-primary",
    "ink:bg-button-secondary ink:text-text-on-secondary",
    "ink:bg-background-dark",
    "ink:bg-background-dark-transparent",
    "ink:bg-background-light",
    "ink:bg-background-light-transparent",
    "ink:bg-background-light-invisible",
    "ink:bg-background-container",
    "ink:bg-status-success-bg ink:text-status-success",
    "ink:bg-status-error-bg ink:text-status-error",
    "ink:bg-status-alert-bg ink:text-status-alert",
  ];
  return (
    <div className="ink:flex ink:gap-2 ink:flex-wrap ink:font-default">
      {colors.map((color) => (
        <div
          key={color}
          className={classNames(
            "ink:px-2 ink:py-1 ink:rounded-full ink:text-[#999]",
            color
          )}
        >
          {color}
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Design/Colors",
  component: Colors,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

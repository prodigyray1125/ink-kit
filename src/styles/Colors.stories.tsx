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
  const independentColors = [
    "ink:bg-ink-light-purple ink:text-text-on-primary",
    "ink:bg-ink-dark-purple ink:text-text-on-primary",
  ];
  return (
    <div className="ink:flex ink:gap-2 ink:flex-wrap ink:font-default">
      <h3 className="ink:text-h3 ink:text-text-default ink:w-full">Colors</h3>
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
      <h3 className="ink:text-h3 ink:text-text-default ink:w-full">
        Theme-Independent Colors
      </h3>
      {independentColors.map((color) => (
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

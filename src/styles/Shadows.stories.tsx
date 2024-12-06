import type { Meta, StoryObj } from "@storybook/react";
import { classNames } from "../util/classes";

function Shadows() {
  const shadows = ["ink:shadow-xs", "ink:shadow-md", "ink:shadow-lg"];
  return (
    <div className="ink:flex ink:gap-8 ink:flex-wrap ink:font-default">
      {shadows.map((sh) => (
        <div
          key={sh}
          className={classNames(
            "ink:size-[200px] ink:flex ink:items-center ink:justify-center ink:rounded-lg ink:bg-background-light ink:text-[#999]",
            sh
          )}
        >
          {sh}
        </div>
      ))}
    </div>
  );
}

const meta: Meta = {
  title: "Design/Shadows",
  component: Shadows,
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

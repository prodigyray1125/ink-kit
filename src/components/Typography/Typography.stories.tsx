import type { Meta, StoryObj } from "@storybook/react";
import { Typography, TypographyProps } from "./Typography";

const variants = [
  "h1",
  "h2",
  "h3",
  "h4",
  "body-1",
  "body-2",
  "body-3",
  "caption",
  "caption-2",
] as const;

const meta: Meta<TypographyProps<"button" | "h1" | "h2" | "h3" | "h4">> = {
  title: "Design/Typography",
  decorators: [
    (Story, { args }) => (
      <div className="ink:p-4 ink:flex ink:flex-col ink:gap-4 ink:text-text-default">
        {variants.map((variant) => (
          <Story
            key={variant}
            args={{
              children: (
                <div>
                  ink-text-{variant}: The quick brown fox jumps over the lazy
                  dog
                </div>
              ),
              ...args,
              variant,
            }}
          />
        ))}
      </div>
    ),
  ],
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

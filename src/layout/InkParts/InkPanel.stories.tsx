import type { Meta, StoryObj } from "@storybook/react";
import { InkHeader, InkIcon, InkPanel, InkPanelProps } from "../..";

/**
 * This component provides a simple layout container with a header and a content area.
 */
const meta: Meta<InkPanelProps> = {
  title: "Layouts/InkPanel",
  component: InkPanel,
  tags: ["autodocs"],
  args: {
    size: "md",
    children: (
      <>
        <InkHeader
          title="A header is always nice"
          icon={<InkIcon.Settings />}
        />
        <div>And then some text here, how fun! And some more!</div>
        <div>Some footer</div>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

/**
 * Centering the content will make the content centered, but the header will still be at the top.
 */
export const Centered: Story = {
  args: {
    centered: true,
  },
};

/**
 * The automatic size will make the panel take space depending on the content.
 */
export const AutomaticSize: Story = {
  args: {
    size: "auto",
  },
};

/**
 * Centering the content will make the content centered, but the header will still be at the top.
 */
export const CenteredWithoutHeader: Story = {
  args: {
    centered: true,
    children: <div>Just some content here</div>,
  },
};

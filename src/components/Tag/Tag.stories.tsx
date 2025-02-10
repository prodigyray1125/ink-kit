import type { Meta, StoryObj } from "@storybook/react";
import { Tag, type TagProps } from "./Tag";
import { InkIcon } from "../..";
import { MatrixDecorator } from "../../decorators/MatrixDecorator";

const meta: Meta<TagProps> = {
  decorators: [
    MatrixDecorator<TagProps>({
      first: {
        key: "variant",
        values: ["fill", "outline", "filter", "featured"],
      },
      second: { key: "selected", values: [false, true] },
    }),
  ],
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Tag Content",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithIcon: Story = {
  args: {
    icon: <InkIcon.InkLogo />,
  },
};

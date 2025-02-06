import type { Meta, StoryObj } from "@storybook/react";
import { Tag, type TagProps } from "./Tag";
import { useState } from "react";
import { InkIcon } from "../..";

const meta: Meta<TagProps> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Tag Content",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Fill: Story = {
  args: {
    variant: "fill",
    children: "Fill Tag",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Tag",
  },
};

export const Filter: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <Tag
        variant="filter"
        selected={selected}
        onClick={() => setSelected((prev) => !prev)}
      >
        Tag
      </Tag>
    );
  },
};

export const AllVariants: Story = {
  render: () => {
    const [selected, setSelected] = useState(false);
    return (
      <div className="ink:flex ink:flex-col ink:gap-4">
        <div className="ink:flex ink:items-center ink:gap-4">
          <Tag variant="fill" icon={<InkIcon.InkLogo />}>
            Tag
          </Tag>
          <Tag variant="outline" icon={<InkIcon.Settings />}>
            Tag
          </Tag>
        </div>
        <div className="ink:flex ink:items-center ink:gap-4">
          <Tag variant="fill">Fill</Tag>
          <Tag variant="outline">Outline</Tag>
          <Tag
            variant="filter"
            selected={selected}
            onClick={() => setSelected((prev) => !prev)}
          >
            Selectable Tag
          </Tag>
        </div>
      </div>
    );
  },
};

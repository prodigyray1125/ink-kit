import type { Meta, StoryObj } from "@storybook/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxProps,
} from "./index";
import { useState } from "react";

interface ListboxStoryItem {
  value: string;
  label: string;
}

const defaultItems: ListboxStoryItem[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

const meta: Meta<ListboxProps<ListboxStoryItem>> = {
  title: "Components/Listbox",
  component: Listbox,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <ListboxOptions>
        {defaultItems.map((item) => (
          <ListboxOption key={item.value} value={item}>
            {item.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {},
  render: (args) => {
    const [item, setValue] = useState<ListboxStoryItem>(defaultItems[0]);
    return (
      <Listbox value={item} onChange={setValue}>
        <ListboxButton>Selected: {item.label}</ListboxButton>
        {args.children}
      </Listbox>
    );
  },
};

export const WithOneDisabledOption: Story = {
  args: {
    children: (
      <ListboxOptions>
        {defaultItems.map((item, index) => (
          <ListboxOption key={item.value} value={item} disabled={index === 1}>
            {item.label}
          </ListboxOption>
        ))}
      </ListboxOptions>
    ),
  },
  render: (args) => {
    const [item, setValue] = useState<ListboxStoryItem>(defaultItems[0]);
    return (
      <Listbox value={item} onChange={setValue}>
        <ListboxButton>Selected: {item.label}</ListboxButton>
        {args.children}
      </Listbox>
    );
  },
};

export const MultipleValues: Story = {
  args: {
    multiple: true,
  },
  render: (args) => {
    const [items, setValues] = useState<ListboxStoryItem[]>([
      defaultItems[0],
      defaultItems[1],
    ]);
    return (
      <Listbox {...args} value={items} onChange={setValues}>
        <ListboxButton>
          Selected:{" "}
          {items.length ? items.map((item) => item.label).join(", ") : "None"}
        </ListboxButton>
        {args.children}
      </Listbox>
    );
  },
};

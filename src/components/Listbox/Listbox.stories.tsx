import type { Meta, StoryObj } from "@storybook/react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  ListboxProps,
} from "./index";
import { useState } from "react";
import { InkIcon } from "../..";

interface ListboxStoryItem {
  value: string;
  label: string;
  iconLeft?: React.ReactNode;
}

const defaultItems: ListboxStoryItem[] = [
  { value: "1", label: "Option 1", iconLeft: <InkIcon.Home /> },
  { value: "2", label: "Option 2", iconLeft: <InkIcon.Settings /> },
  { value: "3", label: "Option 3", iconLeft: <InkIcon.Deposit /> },
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

export const WithIcons: Story = {
  args: {
    children: (
      <ListboxOptions>
        {defaultItems.map((item) => (
          <ListboxOption
            key={item.value}
            value={item}
            iconRight={item.iconLeft}
          >
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
        <ListboxButton iconLeft={item.iconLeft}>
          Selected: {item.label}
        </ListboxButton>
        {args.children}
      </Listbox>
    );
  },
};

const moreItems: ListboxStoryItem[] = [
  { value: "4", label: "Option 4", iconLeft: <InkIcon.Home /> },
  { value: "5", label: "Option 5", iconLeft: <InkIcon.Settings /> },
  { value: "6", label: "Option 6", iconLeft: <InkIcon.Deposit /> },
  { value: "7", label: "Option 7", iconLeft: <InkIcon.Home /> },
  { value: "8", label: "Option 8", iconLeft: <InkIcon.Settings /> },
  { value: "9", label: "Option 9", iconLeft: <InkIcon.Deposit /> },
];

export const WithManyOptions: Story = {
  args: {
    children: (
      <ListboxOptions>
        {[...defaultItems, ...moreItems].map((item) => (
          <ListboxOption key={item.value} value={item}>
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

export const WithADifferentButtonVariant: Story = {
  args: {
    children: (
      <ListboxOptions>
        {[...defaultItems, ...moreItems].map((item) => (
          <ListboxOption key={item.value} value={item}>
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
        <ListboxButton variant="muted">Selected: {item.label}</ListboxButton>
        {args.children}
      </Listbox>
    );
  },
};

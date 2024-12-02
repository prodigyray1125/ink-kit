import type { Meta, StoryObj } from "@storybook/react";
import {
  Popover,
  PopoverButton,
  PopoverContent,
  PopoverPanel,
  type PopoverProps,
} from "./index";
import { InkIcon } from "../..";

const meta: Meta<PopoverProps> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: (
      <>
        <PopoverButton>Click Me</PopoverButton>
        <PopoverPanel
          headerContent={
            <PopoverContent.Info title="Info" content="Some content" />
          }
        >
          <PopoverContent.ListItem iconLeft={<InkIcon.Profile />}>
            Item 1
          </PopoverContent.ListItem>
          <PopoverContent.ListItem iconLeft={<InkIcon.Settings />}>
            Item 2
          </PopoverContent.ListItem>
          <PopoverContent.ListItem
            iconLeft={<InkIcon.Copy />}
            onClick={() =>
              navigator.clipboard.writeText("You are a nice person")
            }
          >
            Copy Compliment To Clipboard
          </PopoverContent.ListItem>
          <PopoverContent.ListItem
            variant="error"
            iconRight={<InkIcon.Error />}
          >
            Error Item
          </PopoverContent.ListItem>
          <PopoverContent.ListItem
            asChild
            iconRight={<InkIcon.Arrow className="ink:rotate-[225deg]" />}
          >
            <a href="#something" target="_self">
              Link Item
            </a>
          </PopoverContent.ListItem>
        </PopoverPanel>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

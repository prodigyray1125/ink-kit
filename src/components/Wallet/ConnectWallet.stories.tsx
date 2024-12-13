import type { Meta, StoryObj } from "@storybook/react";

import { ConnectWallet, type ConnectWalletProps } from "./index";
import { WalletProvider } from "../../decorators/WalletProvider";
import { PopoverContent } from "../Popover";
import { InkIcon } from "../..";

const meta: Meta<ConnectWalletProps> = {
  title: "Components/ConnectWallet",
  decorators: [
    WalletProvider,
    (Story) => <div className="ink:min-h-[300px]">{Story()}</div>,
  ],
  component: ConnectWallet,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {},
};

export const WithProfileAndSettings: Story = {
  args: {
    listItems: (
      <>
        <PopoverContent.ListItem iconLeft={<InkIcon.Profile />}>
          Profile
        </PopoverContent.ListItem>
        <PopoverContent.ListItem iconLeft={<InkIcon.Settings />}>
          Settings
        </PopoverContent.ListItem>
      </>
    ),
  },
};

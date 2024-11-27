import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, type ButtonProps } from "./index";
import { MatrixDecorator } from "../../decorators/MatrixDecorator";
import { InkIcon } from "../..";
import Avatar from "../../images/avatar.png?base64";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  decorators: [
    MatrixDecorator<ButtonProps>({
      first: { key: "size", values: ["sm", "md", "lg"] },
      second: { key: "variant", values: ["primary", "secondary"] },
    }),
  ],
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: false },
    size: { control: false },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: "Button",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Button",
  },
};

export const WithIcon: Story = {
  args: {
    children: "Button",
    iconLeft: <InkIcon.Deposit />,
  },
};

export const Rounded: Story = {
  args: {
    rounded: "full",
    children: <InkIcon.Deposit />,
  },
};

export const WithMinimumWidth: Story = {
  args: {
    className: "ink:min-w-[350px]",
    children: "Button",
    iconLeft: <InkIcon.Deposit />,
  },
};

export const AsLink: Story = {
  args: {
    asChild: true,
    children: (
      <a href="https://inkonchain.com" target="_blank">
        inkonchain.com
      </a>
    ),
    iconRight: <InkIcon.Arrow className="ink:rotate-[225deg]" />,
  },
};

export const WalletVariant: Story = {
  decorators: [
    (Story, { args }) => (
      <div className="ink:flex ink:flex-col ink:items-center ink:justify-center ink:gap-2">
        <Story args={{ ...args, size: "sm" }} />
        <Story args={{ ...args, size: "md" }} />
        <Story args={{ ...args, size: "lg" }} />
      </div>
    ),
  ],
  parameters: { disableMatrix: true },
  args: {
    variant: "wallet",
    children: <div>Wallet</div>,
    iconLeft: (
      <img
        src={Avatar}
        alt="avatar"
        className="ink:object-cover ink:w-full ink:h-full ink:rounded-full"
      />
    ),
  },
};

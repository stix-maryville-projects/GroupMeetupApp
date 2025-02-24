import type { Meta, StoryObj } from "@storybook/react";
import { LogOut } from ".";

const meta: Meta<typeof LogOut> = {
  title: "Components/LogOut",
  component: LogOut,
};

export default meta;

type Story = StoryObj<typeof LogOut>;

export const Default: Story = {
  args: {
    className: {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Notifications } from ".";

const meta: Meta<typeof Notifications> = {
  title: "Components/Notifications",
  component: Notifications,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notifications>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

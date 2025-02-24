import type { Meta, StoryObj } from "@storybook/react";
import { Home } from ".";

const meta: Meta<typeof Home> = {
  title: "Components/Home",
  component: Home,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Home>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

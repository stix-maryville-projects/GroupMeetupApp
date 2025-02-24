import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from ".";

const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

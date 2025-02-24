import type { Meta, StoryObj } from "@storybook/react";
import { HomeButton } from ".";

const meta: Meta<typeof HomeButton> = {
  title: "Components/HomeButton",
  component: HomeButton,
};

export default meta;

type Story = StoryObj<typeof HomeButton>;

export const Default: Story = {
  args: {
    className: {},
  },
};

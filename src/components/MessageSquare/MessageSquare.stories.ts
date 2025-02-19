import type { Meta, StoryObj } from "@storybook/react";
import { MessageSquare } from ".";

const meta: Meta<typeof MessageSquare> = {
  title: "Components/MessageSquare",
  component: MessageSquare,
};

export default meta;

type Story = StoryObj<typeof MessageSquare>;

export const Default: Story = {
  args: {
    className: {},
  },
};

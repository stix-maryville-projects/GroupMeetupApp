import type { Meta, StoryObj } from "@storybook/react";
import { EventChat } from ".";

const meta: Meta<typeof EventChat> = {
  title: "Components/EventChat",
  component: EventChat,
};

export default meta;

type Story = StoryObj<typeof EventChat>;

export const Default: Story = {
  args: {
    className: {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { EventTitleInput } from ".";

const meta: Meta<typeof EventTitleInput> = {
  title: "Components/EventTitleInput",
  component: EventTitleInput,
};

export default meta;

type Story = StoryObj<typeof EventTitleInput>;

export const Default: Story = {
  args: {
    className: {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { UserProfileIcon } from ".";

const meta: Meta<typeof UserProfileIcon> = {
  title: "Components/UserProfileIcon",
  component: UserProfileIcon,
};

export default meta;

type Story = StoryObj<typeof UserProfileIcon>;

export const Default: Story = {
  args: {
    className: {},
  },
};

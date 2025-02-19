import type { Meta, StoryObj } from "@storybook/react";
import { InvitePanel } from ".";

const meta: Meta<typeof InvitePanel> = {
  title: "Components/InvitePanel",
  component: InvitePanel,
};

export default meta;

type Story = StoryObj<typeof InvitePanel>;

export const Default: Story = {
  args: {
    className: {},
  },
};

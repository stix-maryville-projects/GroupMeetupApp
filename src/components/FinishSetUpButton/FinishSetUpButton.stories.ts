import type { Meta, StoryObj } from "@storybook/react";
import { FinishSetUpButton } from ".";

const meta: Meta<typeof FinishSetUpButton> = {
  title: "Components/FinishSetUpButton",
  component: FinishSetUpButton,
};

export default meta;

type Story = StoryObj<typeof FinishSetUpButton>;

export const Default: Story = {
  args: {
    className: {},
    text: "Finish Set Up",
    divClassName: {},
  },
};

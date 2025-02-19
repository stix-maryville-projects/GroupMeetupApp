import type { Meta, StoryObj } from "@storybook/react";
import { TimeInput } from ".";

const meta: Meta<typeof TimeInput> = {
  title: "Components/TimeInput",
  component: TimeInput,
};

export default meta;

type Story = StoryObj<typeof TimeInput>;

export const Default: Story = {
  args: {
    className: {},
    divClassName: {},
  },
};

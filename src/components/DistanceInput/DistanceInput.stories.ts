import type { Meta, StoryObj } from "@storybook/react";
import { DistanceInput } from ".";

const meta: Meta<typeof DistanceInput> = {
  title: "Components/DistanceInput",
  component: DistanceInput,
};

export default meta;

type Story = StoryObj<typeof DistanceInput>;

export const Default: Story = {
  args: {
    className: {},
    divClassName: {},
  },
};

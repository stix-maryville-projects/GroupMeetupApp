import type { Meta, StoryObj } from "@storybook/react";
import { OccasionInput } from ".";

const meta: Meta<typeof OccasionInput> = {
  title: "Components/OccasionInput",
  component: OccasionInput,
};

export default meta;

type Story = StoryObj<typeof OccasionInput>;

export const Default: Story = {
  args: {
    className: {},
  },
};

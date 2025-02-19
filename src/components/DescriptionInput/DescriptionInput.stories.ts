import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionInput } from ".";

const meta: Meta<typeof DescriptionInput> = {
  title: "Components/DescriptionInput",
  component: DescriptionInput,
};

export default meta;

type Story = StoryObj<typeof DescriptionInput>;

export const Default: Story = {
  args: {
    className: {},
    divClassName: {},
  },
};

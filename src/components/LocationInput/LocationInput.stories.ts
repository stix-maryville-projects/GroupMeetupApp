import type { Meta, StoryObj } from "@storybook/react";
import { LocationInput } from ".";

const meta: Meta<typeof LocationInput> = {
  title: "Components/LocationInput",
  component: LocationInput,
};

export default meta;

type Story = StoryObj<typeof LocationInput>;

export const Default: Story = {
  args: {
    className: {},
  },
};

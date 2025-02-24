import type { Meta, StoryObj } from "@storybook/react";
import { NewEvent } from ".";

const meta: Meta<typeof NewEvent> = {
  title: "Components/NewEvent",
  component: NewEvent,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NewEvent>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

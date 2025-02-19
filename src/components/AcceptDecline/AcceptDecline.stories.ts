import type { Meta, StoryObj } from "@storybook/react";
import { AcceptDecline } from ".";

const meta: Meta<typeof AcceptDecline> = {
  title: "Components/AcceptDecline",
  component: AcceptDecline,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AcceptDecline>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

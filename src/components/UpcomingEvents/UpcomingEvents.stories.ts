import type { Meta, StoryObj } from "@storybook/react";
import { UpcomingEvents } from ".";

const meta: Meta<typeof UpcomingEvents> = {
  title: "Components/UpcomingEvents",
  component: UpcomingEvents,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof UpcomingEvents>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
  },
};

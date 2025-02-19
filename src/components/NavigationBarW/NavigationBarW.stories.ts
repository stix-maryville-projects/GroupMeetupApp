import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBarW } from ".";

const meta: Meta<typeof NavigationBarW> = {
  title: "Components/NavigationBarW",
  component: NavigationBarW,
};

export default meta;

type Story = StoryObj<typeof NavigationBarW>;

export const Default: Story = {
  args: {
    className: {},
    text: "New Event",
    homeButton: "/img/homebutton.svg",
  },
};

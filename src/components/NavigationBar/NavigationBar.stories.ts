import type { Meta, StoryObj } from "@storybook/react";
import { NavigationBar } from ".";

const meta: Meta<typeof NavigationBar> = {
  title: "Components/NavigationBar",
  component: NavigationBar,
};

export default meta;

type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {
    className: {},
  },
};

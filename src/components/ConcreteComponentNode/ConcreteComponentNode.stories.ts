import type { Meta, StoryObj } from "@storybook/react";
import { ConcreteComponentNode } from ".";

const meta: Meta<typeof ConcreteComponentNode> = {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,

  argTypes: {
    size: {
      options: [
        "sixteen",
        "twenty-four",
        "forty-eight",
        "twenty",
        "thirty-two",
        "forty",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConcreteComponentNode>;

export const Default: Story = {
  args: {
    size: "sixteen",
  },
};

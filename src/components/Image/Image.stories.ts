import type { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,

  argTypes: {
    property1: {
      options: ["variant-2", "default"],
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    property1: "variant-2",
    className: {},
    text: "Event Title<br/>",
    text1: "Short event description that should only fill a couple lines.",
  },
};

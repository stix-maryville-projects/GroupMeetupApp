import type { Meta, StoryObj } from "@storybook/react";
import { Image } from ".";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    className: {},
    text: "Event Title<br/>",
    text1: "Short event description that should only fill a couple lines.",
  },
};

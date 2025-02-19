import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    className: {},
    line: "/img/line-1.svg",
    img: "/img/line-2.svg",
    line1: "/img/line-1.svg",
    line2: "/img/line-2.svg",
    line3: "/img/line-1.svg",
    line4: "/img/line-2.svg",
    line5: "/img/line-1.svg",
    line6: "/img/line-2.svg",
  },
};

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
    lineClassName: {},
    line: "/img/line-3.svg",
    lineClassNameOverride: {},
    img: "/img/image.svg",
    imgClassName: {},
    line1: "/img/line-3.svg",
    imgClassNameOverride: {},
    line2: "/img/image.svg",
    lineClassName1: {},
    line3: "/img/line-3.svg",
    lineClassName2: {},
    line4: "/img/image.svg",
    lineClassName3: {},
    line5: "/img/line-3.svg",
    lineClassName4: {},
    line6: "/img/image.svg",
  },
};

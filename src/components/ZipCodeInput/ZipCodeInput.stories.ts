import type { Meta, StoryObj } from "@storybook/react";
import { ZipCodeInput } from ".";

const meta: Meta<typeof ZipCodeInput> = {
  title: "Components/ZipCodeInput",
  component: ZipCodeInput,
};

export default meta;

type Story = StoryObj<typeof ZipCodeInput>;

export const Default: Story = {
  args: {
    className: {},
    divClassName: {},
  },
};

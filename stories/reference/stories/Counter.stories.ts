import type { Meta, StoryObj } from "@storybook/web-components";
import type { StoryProps } from "@arcgis/storybook-utils";

const meta: Meta<StoryProps> = { title: "Component Reference/Counter", component: "arcgis-counter" };
export default meta;

export const Counter: StoryObj<StoryProps> = {
  name: "Demo",
};

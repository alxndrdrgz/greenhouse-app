import React from "react";
import SeedInventoryTable from "../components/SeedInventoryTable";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: 'Garden Seeds Table',
  component: SeedInventoryTable,
  parameters: {
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof SeedInventoryTable>;

const Template: ComponentStory<typeof SeedInventoryTable> = () => (
  <SeedInventoryTable />
);

export const DefaultTable = Template.bind({});
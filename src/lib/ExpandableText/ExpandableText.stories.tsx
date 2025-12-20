import type {Meta, StoryObj} from "@storybook/react";

import {ExpandableText} from "./ExpandableText";

const meta: Meta<typeof ExpandableText> = {
  title: "Components/ExpandableText",
  component: ExpandableText,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div style={{maxWidth: 400, width: "100%"}}>
        <Story />
      </div>
    ),
  ],
  args: {
    lineClamp: 2,
  },
  argTypes: {
    lineClamp: {control: {type: "number", min: 1}},
    content: {control: "text"},
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const longContent = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
  dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
  officia deserunt mollit anim id est laborum.
`;

export const Default: Story = {
  args: {
    content: longContent,
  },
};

export const ShortContent: Story = {
  args: {
    content: "Short text does not show the toggle button.",
  },
};

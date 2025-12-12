import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { AppLink } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['primary', 'red'],
        },
        to: {
            control: 'text',
        },
    },
    args: {
        to: '/about',
        children: 'About us',
    },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};

export const Red: Story = {
    args: {
        variant: 'red',
    },
};

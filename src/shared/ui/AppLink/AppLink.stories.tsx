import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        theme: {
            control: { type: 'radio' },
            options: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
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

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
    },
};

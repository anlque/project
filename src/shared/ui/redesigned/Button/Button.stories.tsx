import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'radio' },
            options: ['clear', 'outline'],
        },
        square: {
            control: { type: 'radio' },
            options: [true, false],
        },
        size: {
            control: { type: 'select' },
            options: ['m', 'l', 'xl'],
        },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Test',
    },
};

export const Clear: Story = {
    args: {
        variant: 'clear',
        children: 'Test',
    },
};

export const Outlined: Story = {
    args: {
        variant: 'outline',
        children: 'Test',
    },
};

export const Filled: Story = {
    args: {
        children: 'Test',
        variant: 'filled',
    },
};

export const Square: Story = {
    args: {
        children: '>',
        variant: 'filled',
        square: true,
    },
};

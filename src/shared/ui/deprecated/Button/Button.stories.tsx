import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { fn } from 'storybook/test';

import { Button, ButtonTheme } from './Button';

const meta = {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        theme: {
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
        theme: ButtonTheme.CLEAR,
        children: 'Test',
    },
};

export const Outlined: Story = {
    args: {
        theme: ButtonTheme.OUTLINE,
        children: 'Test',
    },
};

export const Background: Story = {
    args: {
        children: 'Test',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND,
        square: true,
    },
};

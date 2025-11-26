import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { ErrorPage } from './ErrorPage';

const meta = {
    title: 'widget/ErrorPage',
    component: ErrorPage,
} satisfies Meta<typeof ErrorPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

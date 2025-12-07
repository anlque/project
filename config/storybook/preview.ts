import type { Preview } from '@storybook/react-webpack5';
import { Theme } from '@/shared/const/theme';
import { StyleDecorator } from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { SuspenseDecorator } from '../../src/shared/config/storybook/SuspenseDecorator/SuspenseDecorator';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    globalTypes: {
        theme: {
            name: 'Theme',
            description: 'Global theme for components',
            defaultValue: Theme.LIGHT,
            toolbar: {
                icon: 'sun',
                items: [
                    { value: Theme.LIGHT, title: 'Light', icon: 'sun' },
                    { value: Theme.DARK, title: 'Dark', icon: 'moon' },
                ],
                showName: true,
                dynamicTitle: true,
            },
        },
    },
    decorators: [StyleDecorator, ThemeDecorator, SuspenseDecorator, RouterDecorator],
};

export default preview;

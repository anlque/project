import type { Decorator } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator: Decorator = (StoryComponent, context) => {
    // eslint-disable-next-line react/destructuring-assignment
    const theme = context.globals.theme as Theme;
    return (
        <ThemeProvider>
            <div className={`app ${theme}`} style={{ padding: '10px' }}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};

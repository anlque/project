import type { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from '@/app/providers/ThemeProvider';

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

import { Meta, StoryObj } from '@storybook/react-webpack5';

import { ${componentName} } from './${componentName}';

const meta = {
    title: '${layer}/${componentName}',
    component: ${componentName},
    argTypes: {}
} satisfies Meta<typeof ${componentName}>;

export default meta;

export const Primary = {
    args: {
    }
};

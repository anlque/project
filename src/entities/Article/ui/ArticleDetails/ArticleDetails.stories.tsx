import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleBlockType, ArticleType, Article } from '../../model/types/article';
import { ArticleDetails } from './ArticleDetails';

export default {
    title: 'entities/Article/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const article: Article = {
    id: '1',
    title: 'Javascript news',
    subtitle: 'What`s new in JS in 2022 year?',
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    views: 1022,
    createdAt: '26.02.2022',
    type: [ArticleType.IT],
    user: {
        id: '1',
        username: 'admin',
    },
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Title of the block',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It prints the phrase "Hello, world!" or something similar, using some language.',
                'JavaScript is a language that can be run in a variety of environments. In our case, that means browsers and the Node.js server platform. If you haven`t written a single line of JavaScript code yet and are reading this text in a browser on a desktop computer, you\'re literally seconds away from writing your first JavaScript program.',
                'There are other ways to run JS code in a browser. For example, in the typical use of JavaScript programs, they are loaded into the browser to power web pages. Typically, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. This is all done using the <script> tag. When the browser encounters such code, it executes it. You can find more information about the script tag on w3school.com. In particular, let`s look at an example demonstrating how to work with a web page using JavaScript, which is provided on this resource. This example can also be run using this resource (look for the "Try it Yourself" button), but we`ll do it a little differently. Specifically, we`ll create a new file in a text editor (for example, VS Code or Notepad++), which we`ll call hello.html, and add the following code to it:',
            ],
        },
        {
            id: '4',
            type: ArticleBlockType.CODE,
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: ArticleBlockType.TEXT,
            title: 'Title of the block',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It prints the phrase "Hello, world!" or something similar, using some language.',
                'There are other ways to run JS code in a browser. For example, in the typical use of JavaScript programs, they are loaded into the browser to power web pages. Typically, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. This is all done using the <script> tag. When the browser encounters such code, it executes it. You can find more information about the script tag on w3school.com. In particular, let`s look at an example demonstrating how to work with a web page using JavaScript, which is provided on this resource. This example can also be run using this resource (look for the "Try it Yourself" button), but we`ll do it a little differently. Specifically, we`ll create a new file in a text editor (for example, VS Code or Notepad++), which we`ll call hello.html, and add the following code to it:',
            ],
        },
    ],
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    articleDetails: {
        data: article,
    },
})];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({
    articleDetails: {
        isLoading: true,
    },
})];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({
    articleDetails: {
        error: 'error',
    },
})];

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleListItem } from './ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

const article = {
    id: '1',
    title: 'Javascript and Typescript news',
    subtitle: 'What`s new JS in 2022 year?',
    img: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png',
    views: 1022,
    createdAt: '26.02.2022',
    user: {
        id: '1',
        username: 'admin',
        avatar: 'https://i.ytimg.com/vi/Q6Nsvrnnug8/maxresdefault.jpg',
    },
    type: [
        'IT',
        'Economics',
        'Politics',
        'Mathematics',
    ],
    blocks: [
        {
            id: '1',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It prints the phrase "Hello, world!" or something similar, using some language.',
                'JavaScript is a language that can be run in a variety of environments. In our case, that means browsers and the Node.js server platform. If you haven`t written a single line of JavaScript code yet and are reading this text in a browser on a desktop computer, you`re literally seconds away from writing your first JavaScript program.',
                "There are other ways to run JS code in a browser. For example, in the typical use of JavaScript programs, they are loaded into the browser to power web pages. Typically, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. This is all done using the <script> tag. When the browser encounters such code, it executes it. You can find more information about the script tag on w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, which is provided on this resource. This example can also be run using this resource (look for the 'Try it Yourself' button), but we'll do it a little differently. Specifically, we'll create a new file in a text editor (for example, VS Code or Notepad++), which we'll call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '4',
            type: 'CODE',
            code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
        },
        {
            id: '5',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'The program traditionally called "Hello, world!" is very simple. It prints the phrase "Hello, world!" or something similar, using some language.',
                "There are other ways to run JS code in a browser. For example, in the typical use of JavaScript programs, they are loaded into the browser to power web pages. Typically, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. This is all done using the <script> tag. When the browser encounters such code, it executes it. You can find more information about the script tag on w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, which is provided on this resource. This example can also be run using this resource (look for the 'Try it Yourself' button), but we'll do it a little differently. Specifically, we'll create a new file in a text editor (for example, VS Code or Notepad++), which we'll call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '2',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Рисунок 1 - скриншот сайта',
        },
        {
            id: '3',
            type: 'CODE',
            code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
        },
        {
            id: '7',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'JavaScript is a language that can be run in a variety of environments. In our case, that means browsers and the Node.js server platform. If you haven`t written a single line of JavaScript code yet and are reading this text in a browser on a desktop computer, you`re literally seconds away from writing your first JavaScript program.',
                "There are other ways to run JS code in a browser. For example, in the typical use of JavaScript programs, they are loaded into the browser to power web pages. Typically, the code is formatted as separate files with the .js extension, which are included in web pages, but the program code can also be included directly in the page code. This is all done using the <script> tag. When the browser encounters such code, it executes it. You can find more information about the script tag on w3school.com. In particular, let's look at an example demonstrating how to work with a web page using JavaScript, which is provided on this resource. This example can also be run using this resource (look for the 'Try it Yourself' button), but we'll do it a little differently. Specifically, we'll create a new file in a text editor (for example, VS Code or Notepad++), which we'll call hello.html, and add the following code to it:",
            ],
        },
        {
            id: '8',
            type: 'IMAGE',
            src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
            title: 'Figure 1 - screenshot of the site',
        },
        {
            id: '9',
            type: 'TEXT',
            title: 'Title of this block',
            paragraphs: [
                'JavaScript is a language that can be run in a variety of environments. In our case, that means browsers and the Node.js server platform. If you haven`t written a single line of JavaScript code yet and are reading this text in a browser on a desktop computer, you`re literally seconds away from writing your first JavaScript program.',
            ],
        },
    ],
} as Article;

export const Big = Template.bind({});
Big.args = {
    view: ArticleView.BIG,
    article,
};

export const Small = Template.bind({});
Small.args = {
    view: ArticleView.SMALL,
    article,
};

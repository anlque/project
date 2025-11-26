import { type JSX, type SVGProps } from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    authOnly?: boolean;
}

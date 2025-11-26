import { classNames } from 'shared/lib/classNames/classNames';
import { type JSX, memo, type SVGProps } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

export const Icon = memo((props: IconProps) => {
    const { className, Svg } = props;

    return (
        <Svg className={classNames(cls.Icon, {}, [className])} />
    );
});

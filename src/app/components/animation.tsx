"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
    children: React.ReactNode;
};

/**
 * 子要素を下からTiltInさせる
 *
 * @example
 * ```tsx
 * <TiltInBottom>
 *  <div>TiltInする要素</div>
 * </TiltInBottom>
 * ```
 */
export const TiltInBottom: React.FC<Props> = ({ children }) => {
    const { ref, inView } = useInView({
        // ref要素が現れてから50px過ぎたら
        rootMargin: "-50px",
        delay: 200,
        // 最初の一度だけ実行
        triggerOnce: true,
    });

    const tiltInClassName = inView ? "animate-tilt-in-bottom-1" : "opacity-0";

    const wrappedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const className = [child.props.className, tiltInClassName]
                .filter(el => el)
                .join(" ");

            return React.cloneElement(child as React.ReactElement, {
                ref,
                className,
            });
        } else {
            return child;
        }
    });

    return <>{wrappedChildren}</>;
};


/**
 * 子要素を下からFadeInさせる
 *
 * @example
 * ```tsx
 * <FadeInBottom>
 *  <div>FadeInする要素</div>
 * </FadeInBottom>
 * ```
 */
export const FadeInBottom: React.FC<Props> = ({ children }) => {
    const { ref, inView } = useInView({
        // ref要素が現れてから100px過ぎたら
        rootMargin: "-100px",
        delay: 150,
        // 最初の一度だけ実行
        triggerOnce: true,
    });

    const fadeInClassName = inView ? "animate-fade-in-bottom" : "opacity-0";

    const wrappedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const className = [child.props.className, fadeInClassName]
                .filter(el => el)
                .join(" ");

            return React.cloneElement(child as React.ReactElement, {
                ref,
                className,
            });
        } else {
            return child;
        }
    });

    return <>{wrappedChildren}</>;
};


/**
 * 背景画像をBurnOutさせる
 *
 * @example
 * ```tsx
 * <KenBurnsBottom>
 *  <div>BurnOutする要素</div>
 * </KenBurnsBottom>
 * ```
 */
export const KenBurnsBottom: React.FC<Props> = ({ children }) => {
    const { ref, inView } = useInView({
        // ref要素が現れてから50px過ぎたら
        rootMargin: "-50px",
        delay: 200,
        // 最初の一度だけ実行
        triggerOnce: true,
    });

    const kenBurnClassName = inView ? "animate-kenburns-bottom" : "opacity-0";

    const wrappedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            const className = [child.props.className, kenBurnClassName]
                .filter(el => el)
                .join(" ");

            return React.cloneElement(child as React.ReactElement, {
                ref,
                className,
            });
        } else {
            return child;
        }
    });

    return <>{wrappedChildren}</>;
};
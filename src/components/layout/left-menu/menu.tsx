"use client";

import { FC } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

interface MenuProps extends LinkProps {}
export const Menu: FC<MenuProps> = ({ href }) => {
    const pathname = usePathname();

    const formatLabel = (href: string) => {
        const label = href.replace("/", "");
        return label.charAt(0).toUpperCase() + label.slice(1);
    };

    return (
        <>
            <li
                className={`rounded-md ${pathname === href && "bg-accent font-semibold"}`}
            >
                <Link href={href}>{formatLabel(href.toString())}</Link>
            </li>
            {/*<li>*/}
            {/*    <details open>*/}
            {/*        <summary>Parent</summary>*/}
            {/*        <ul>*/}
            {/*            <li>*/}
            {/*                <a>Submenu 1</a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <a>Submenu 2</a>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <details open>*/}
            {/*                    <summary>Parent</summary>*/}
            {/*                    <ul>*/}
            {/*                        <li>*/}
            {/*                            <a>Submenu 1</a>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <a>Submenu 2</a>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </details>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </details>*/}
            {/*</li>*/}
        </>
    );
};

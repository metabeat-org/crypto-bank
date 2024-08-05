import { FC } from "react";

export const LeftMenu: FC = () => {
    return (
        <ul
            className="fixed menu bg-base-200 rounded-box w-56 h-full"
            style={{
                marginTop: "var(--header-height)",
            }}
        >
            <li>
                <a>Deposit</a>
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
            <li>
                <a>Withdrawal</a>
            </li>
        </ul>
    );
};

import { FC } from "react";
import { Menu } from "@/components/layout/left-menu/menu";
export const LeftMenu: FC = () => {
    return (
        <ul
            className="fixed menu bg-base-200 rounded-box w-56 h-full"
            style={{
                marginTop: "var(--header-height)",
            }}
        >
            <Menu href="/deposit" />
            <Menu href="/withdrawal" />
        </ul>
    );
};

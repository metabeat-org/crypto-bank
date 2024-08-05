import { FC, ReactNode } from "react";

interface MainProps {
    hideLeftMenu?: boolean;
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ hideLeftMenu = false, children }) => {
    return (
        <div
            className=""
            style={{
                paddingTop: "var(--header-height)",
                ...(!hideLeftMenu && {
                    paddingLeft: "var(--left-menu-width)",
                }),
            }}
        >
            <main className="p-6">{children}</main>
        </div>
    );
};

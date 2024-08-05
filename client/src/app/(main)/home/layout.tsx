import React from "react";
import { LeftMenu } from "@/components/layout/left-menu";
import { Main } from "@/components/layout/main";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <LeftMenu />
            <Main>{children}</Main>
        </>
    );
}

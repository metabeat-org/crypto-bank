import React from "react";
import { Main } from "@/components/layout/main";
import { LeftMenu } from "@/components/layout/left-menu";

export default function CreateLayout({
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

import React from "react";
import { Main } from "@/components/layout/main";

export default function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Main>{children}</Main>
        </>
    );
}

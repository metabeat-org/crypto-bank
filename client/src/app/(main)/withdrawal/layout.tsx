import React from "react";
import { Main } from "@/components/layout/main";

export default function WithdrawalLayout({
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

import React from "react";
import { Header } from "@/components/layout/header";
import { LeftMenu } from "@/components/layout/left-menu";

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <Header />
            <LeftMenu />
            {children}
        </div>
    );
}

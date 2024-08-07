"use client";

import React from "react";
import { Header } from "@/components/layout/header";
import { LeftMenu } from "@/components/layout/left-menu";
import { withAuth } from "@/guards/auth-guard";

function MainLayout({
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

export default withAuth(MainLayout);

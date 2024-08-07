"use client";

import React from "react";
import { withGuest } from "@/guards/guest-guard";

function SignUpLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>{children}</>;
}

export default withGuest(SignUpLayout);

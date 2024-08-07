"use client";

import { useSetAtom } from "jotai";
import { setProvider } from "@/stores";
import { FC, useEffect } from "react";

export const ConnectButton: FC = () => {
    const connectWallet = useSetAtom(setProvider);

    useEffect(() => {
        connectWallet();
    }, []);

    const handleConnect = async () => {
        await connectWallet();
    };

    return (
        <button
            className="btn bg-accent"
            onClick={handleConnect}
        >
            Connect
        </button>
    );
};

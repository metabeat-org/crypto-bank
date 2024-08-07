"use client";

import { useSetAtom } from "jotai";
import { setWallet } from "@/stores";
import { FC } from "react";

export const ConnectButton: FC = () => {
    const connectWallet = useSetAtom(setWallet);

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

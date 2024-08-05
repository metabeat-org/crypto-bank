"use client";

import { ConnectButton } from "@/components/layout/header/connect-button";
import { UserAvatar } from "@/components/layout/header/user-avatar";
import { useAtomValue } from "jotai/index";
import { loadingAtom, walletAtom } from "@/stores";
import { Loading } from "@/components/layout/loading";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
    const wallet = useAtomValue(walletAtom);
    const isLoading = useAtomValue(loadingAtom);

    return (
        <>
            <div className="navbar fixed bg-base-100">
                <div className="navbar-start">
                    <Link
                        className="btn btn-ghost text-xl"
                        href="/home"
                    >
                        Crypto Bank
                    </Link>
                </div>
                <div className="navbar-end">
                    {!wallet ? <ConnectButton /> : <UserAvatar />}
                </div>
            </div>
            {isLoading && <Loading />}
        </>
    );
};

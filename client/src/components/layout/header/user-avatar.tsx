"use client";

import { useAtomValue } from "jotai/index";
import { walletAtom } from "@/stores";
import { formatAddress, formatEthBalance } from "@/utils";
import { FC } from "react";
import Image from "next/image";

export const UserAvatar: FC = () => {
    const wallet = useAtomValue(walletAtom);

    return (
        <div className="flex items-center gap-3">
            <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                    <Image
                        fill={true}
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        alt="Avatar Tailwind CSS Component"
                    />
                </div>
            </div>
            {wallet && (
                <div>
                    <div className="font-bold">
                        {formatAddress(wallet.account)}
                    </div>
                    <div className="text-sm opacity-50">
                        {formatEthBalance(wallet.balance)} ETH
                    </div>
                </div>
            )}
        </div>
    );
};

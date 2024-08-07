import React, { useEffect } from "react";
import { useSetAtom } from "jotai/index";
import { setProvider } from "@/stores";

export const withAuth = Component => props => {
    const connectWallet = useSetAtom(setProvider);

    useEffect(() => {
        connectWallet();
        //     userInfoCheck
    }, []);
    return <Component {...props} />;
};

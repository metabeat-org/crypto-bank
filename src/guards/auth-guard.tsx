import React, { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai/index";
import { checkAuth, userAtom } from "@/stores";
import { redirect, usePathname } from "next/navigation";

export const withAuth = Component => props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const executeCheckAuth = useSetAtom(checkAuth);
    const user = useAtomValue(userAtom);
    const pathname = usePathname();

    useEffect(() => {
        executeCheckAuth();
    }, [pathname]);

    useEffect(() => {
        if (typeof user === "undefined") {
            setIsAuthenticated(false);
        } else if (user === null) {
            redirect("/sign-up");
        } else {
            setIsAuthenticated(true);
        }
    }, [user]);

    if (!isAuthenticated) {
        return null;
    }
    return <Component {...props} />;
};

import React, { useEffect, useState } from "react";
import { useAtomValue, useSetAtom } from "jotai/index";
import { checkAuth, userAtom } from "@/stores";
import { redirect, usePathname } from "next/navigation";

export const withGuest = Component => props => {
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
            setIsAuthenticated(true);
        } else {
            redirect("/home");
        }
    }, [user]);

    if (isAuthenticated) {
        return <Component {...props} />;
    }
    return null;
};

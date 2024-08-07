import { atom } from "jotai";
import { setCAContract, setWallet, userAtom, walletAtom } from "@/stores";

export const checkAuth = atom(null, async (get, set) => {
    await set(setWallet);
    const { account } = get(walletAtom);

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ walletAddress: account }),
            }
        );
        const { status, data } = await res.json();

        if (status !== 201) {
            set(userAtom, null);
            return;
        }

        const { userInfo } = data;
        set(userAtom, userInfo);
        await set(setCAContract, userInfo.caAddresses);
    } catch (e) {
        set(userAtom, null);
        console.error(":: Failed Get UserInfo ::", e);
    }
});

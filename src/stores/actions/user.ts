import { atom } from "jotai";
import { setWallet, userAtom, walletAtom } from "@/stores";

export const checkAuth = atom(null, async (get, set) => {
    await set(setWallet);
    const { account } = get(walletAtom);
    // todo:    account 보내서 user info 받아오는 api
    set(userAtom, {
        userNo: 1,
    });
});

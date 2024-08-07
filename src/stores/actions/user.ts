import { atom } from "jotai";
import { setCAContract, setWallet, userAtom, walletAtom } from "@/stores";

export const checkAuth = atom(null, async (get, set) => {
    await set(setWallet);
    const { account } = get(walletAtom);
    // todo:    account 보내서 user info 받아오는 api
    const user = {
        userNo: 1,
        caAddress: ["0x2a9C6EC1c5b2214C2E647b406159A1a69897b0fB"],
    };
    set(userAtom, user);

    await set(setCAContract, user.caAddress);
});

import { atom } from "jotai";
import { setCAContract, setWallet, userAtom, walletAtom } from "@/stores";

export const checkAuth = atom(null, async (get, set) => {
    await set(setWallet);
    const { account } = get(walletAtom);
    // todo:    account 보내서 user info 받아오는 api
    const user = {
        userNo: 1,
        caAddress: ["0x9eA61945268dA95F39D8354a33F2D0b33e0cec54"],
    };
    set(userAtom, user);

    await set(setCAContract, user.caAddress);
});

import { atom } from "jotai";

interface User {
    userNo: number;
    email: string;
    userName: string;
    eoaAddress: string;
    caAddresses: Array<string>;
}

export const userAtom = atom<User | null | undefined>(undefined);

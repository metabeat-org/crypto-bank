import { atom } from "jotai";
import { ethers } from "ethers";

interface Contract {
    // account: string;
    // balance: string;
}

export const contractAtom = atom<Contract | null>(null);

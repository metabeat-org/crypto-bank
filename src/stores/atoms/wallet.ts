import { atom } from "jotai";
import { ethers } from "ethers";

interface Wallet {
    account: string;
    balance: string;
}

export const providerAtom = atom<ethers.BrowserProvider | null>(null);
export const signerAtom = atom<ethers.Signer | null>(null);
export const walletAtom = atom<Wallet | null>(null);

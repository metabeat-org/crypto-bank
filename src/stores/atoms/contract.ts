import { atom } from "jotai";
import { Contract } from "ethers";

export const contractAtom = atom<Contract | null>(null);

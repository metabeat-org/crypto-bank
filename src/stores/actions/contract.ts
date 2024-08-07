import { atom } from "jotai/index";
import { ethers } from "ethers";
import { contractAtom, signerAtom } from "@/stores";

export const setCAContract = atom(null, async (get, set, ...args) => {
    const [caAddresses] = args;
    const [caAddress] = caAddresses;

    try {
        const res = await fetch("/api/abi");
        const { abi } = await res.json();
        const signer = get(signerAtom);
        const contract = new ethers.Contract(caAddress, abi, signer);
        set(contractAtom, contract);
    } catch (e) {
        console.error(":: Failed Connect Contract ::", e);
    }
});

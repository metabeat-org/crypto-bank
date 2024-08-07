import { atom } from "jotai/index";
import { ethers } from "ethers";
import { contractAtom } from "@/stores";

export const setCAContract = atom(null, async (get, set, ...args) => {
    const [caAddresses] = args;
    const [caAddress] = caAddresses;

    try {
        const provider = new ethers.JsonRpcProvider(
            process.env.NEXT_PUBLIC_RPC_URL
        );
        const res = await fetch("/api/abi");
        const { abi } = await res.json();

        const contract = new ethers.Contract(caAddress, abi, provider);
        set(contractAtom, contract);
    } catch (error) {
        console.error(":: Failed Connect Contract ::", error);
    }
});

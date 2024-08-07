import { atom } from "jotai";
import { ethers } from "ethers";
import { checkAuth, loadingAtom, signerAtom, walletAtom } from "@/stores";

const handleAccountsChanged = async (
    accounts: string[],
    set: any,
    provider: ethers.BrowserProvider
) => {
    if (accounts.length > 0) {
        const account = accounts[0];
        const balance = await provider.getBalance(account);
        set(walletAtom, { account, balance: ethers.formatEther(balance) });
    } else {
        // disconnect logic if needed
    }
};

const handleChainChanged = (_chainId: string) => {
    window.location.reload();
};

const initializeProvider = async (set: any) => {
    if (typeof window.ethereum !== "undefined") {
        set(loadingAtom, true);
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const account = signer.address;
        const balance = await provider.getBalance(account);

        // set(providerAtom, provider);
        set(signerAtom, signer);
        set(walletAtom, { account, balance: ethers.formatEther(balance) });

        set(loadingAtom, false);
        window.ethereum.on("accountsChanged", async (accounts: string[]) => {
            await handleAccountsChanged(accounts, set, provider);
            await set(checkAuth);
        });
        window.ethereum.on("chainChanged", handleChainChanged);

        return provider;
    } else {
        throw new Error("MetaMask is not installed");
    }
};

export const setWallet = atom(null, async (get, set) => {
    try {
        await initializeProvider(set);
    } catch (e) {
        console.error(":: Failed Connect Wallet ::", e);
    }
});

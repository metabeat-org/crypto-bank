export const formatEthBalance = (balance: string): string => {
    const parsedBalance = parseFloat(balance);
    return parsedBalance.toFixed(4);
};

export const formatAddress = (address: string): string => {
    if (address.length !== 42) {
        throw new Error("Invalid Ethereum address");
    }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

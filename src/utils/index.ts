export const formatEthBalance = (balance: string): string => {
    const parsedBalance = parseFloat(balance);
    return parsedBalance.toFixed(4);
};

export const formatAddress = (address: string): string => {
    // if (address.length !== 42) {
    //     throw new Error("Invalid Ethereum address");
    // }
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatRelativeTime = (timestamp: number): string => {
    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    const now = new Date();
    const past = new Date(timestamp);
    const elapsed = now.getTime() - past.getTime();

    const seconds = Math.floor(elapsed / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return rtf.format(-seconds, "second");
    } else if (minutes < 60) {
        return rtf.format(-minutes, "minute");
    } else if (hours < 24) {
        return rtf.format(-hours, "hour");
    } else if (days < 7) {
        return rtf.format(-days, "day");
    } else if (weeks < 4) {
        return rtf.format(-weeks, "week");
    } else if (months < 12) {
        return rtf.format(-months, "month");
    } else {
        return rtf.format(-years, "year");
    }
};

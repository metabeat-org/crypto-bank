"use client";

import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { DefaultInput } from "@/components/default-input";
import { useAtom, useAtomValue } from "jotai/index";
import { contractAtom, loadingAtom, userAtom } from "@/stores";
import { ethers } from "ethers";
import { formatAddress, formatEthBalance, formatRelativeTime } from "@/utils";

const DepositPage: NextPage = () => {
    const [history, setHistory] = useState<
        Array<{
            transactionHistNo: number;
            type: "D" | "W";
            txHash: string;
            txStatus: string;
            from: string;
            to: string;
            amount: string;
            regDate: string;
        }>
    >([]);
    const [amount, setAmount] = useState("");
    const contract = useAtomValue(contractAtom);
    const { userNo, caAddresses, eoaAddress } = useAtomValue(userAtom);
    const [isLoading, setLoading] = useAtom(loadingAtom);

    const getDepositHistory = async () => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/transfer/${caAddresses[0]}/hists/deposit`
        );
        const { data } = await res.json();
        const { transferHists } = data;
        setHistory(transferHists);
    };

    useEffect(() => {
        getDepositHistory();
    }, []);

    const handleDeposit = async () => {
        if (!amount) {
            return;
        }

        try {
            const amountInWei = ethers.parseEther(amount);
            const tx = await contract.deposit({ value: amountInWei });

            setLoading(true);
            await tx.wait();
            const caAddress = caAddresses[0];
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/transfer/${userNo}/deposit`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userNo,
                        type: "D",
                        caAddress,
                        txHash: tx.hash,
                        txStatus: "success",
                        from: eoaAddress,
                        to: caAddress,
                        amount,
                        gas: "0",
                        gasPayer: eoaAddress,
                    }),
                }
            );
            setLoading(false);

            document.getElementById("my_modal_1").close();

            await getDepositHistory();
        } catch (e) {
            console.error("Deposit failed", e);
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <h2 className="text-3xl font-bold">Deposit History</h2>
                <button
                    className="btn btn-primary ml-auto"
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                >
                    Deposit
                </button>
                <dialog
                    id="my_modal_1"
                    className="modal"
                >
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Deposit</h3>
                        <DefaultInput
                            label="Amount"
                            inputProps={{
                                value: amount,
                                onChange: e => setAmount(e.target.value),
                                placeholder: "in ETH",
                            }}
                        />
                        <div className="modal-action">
                            <button
                                className="btn btn-secondary"
                                onClick={handleDeposit}
                                disabled={isLoading}
                            >
                                Deposit
                            </button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                    className="btn"
                                    disabled={isLoading}
                                >
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="mt-10 overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Transaction Hash</th>
                            <th>Age</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.length > 0 ? (
                            history.map(
                                ({ txHash, regDate, from, to, amount }) => (
                                    <tr
                                        className="hover"
                                        key={txHash}
                                    >
                                        <td>
                                            <a
                                                className="underline"
                                                href={`https://sepolia.etherscan.io/tx/${txHash}`}
                                                target="_blank"
                                            >
                                                {formatAddress(txHash)}
                                            </a>
                                        </td>
                                        <td>
                                            {formatRelativeTime(
                                                new Date(regDate).getTime()
                                            )}
                                        </td>
                                        <td>
                                            <a
                                                className="underline"
                                                href={`https://sepolia.etherscan.io/address/${from}`}
                                                target="_blank"
                                            >
                                                {formatAddress(from)}
                                            </a>
                                        </td>
                                        <td>
                                            <a
                                                className="underline"
                                                href={`https://sepolia.etherscan.io/address/${to}`}
                                                target="_blank"
                                            >
                                                {formatAddress(to)}
                                            </a>
                                        </td>
                                        <td>{formatEthBalance(amount)} ETH</td>
                                    </tr>
                                )
                            )
                        ) : (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="text-center text-warning"
                                >
                                    No history yet
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepositPage;

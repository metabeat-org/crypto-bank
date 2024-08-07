"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { DefaultInput } from "@/components/default-input";
import { useAtom, useAtomValue } from "jotai/index";
import { contractAtom, loadingAtom } from "@/stores";
import { ethers } from "ethers";

const DepositPage: NextPage = () => {
    const [amount, setAmount] = useState("");
    const contract = useAtomValue(contractAtom);
    const [isLoading, setLoading] = useAtom(loadingAtom);

    const handleDeposit = async () => {
        if (!amount) {
            return;
        }

        try {
            const amountInWei = ethers.parseEther(amount);
            const tx = await contract.deposit({ value: amountInWei });
            console.log(tx.hash);
            setLoading(true);
            await tx.wait();
            setLoading(false);
            document.getElementById("my_modal_1").close();
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
                        {/* row 1 */}
                        <tr className="hover">
                            <td>
                                <a>0x503afb676be44...</a>
                            </td>
                            <td>125 days ago</td>
                            <td>
                                <a>0xc2BD30B9...333Fa0033</a>
                            </td>
                            <td>
                                <a>0x6bFd17f7...7Ded71575</a>
                            </td>
                            <td>0.3006221 ETH</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <td>
                                <a>0x503afb676be44...</a>
                            </td>
                            <td>125 days ago</td>
                            <td>
                                <a>0xc2BD30B9...333Fa0033</a>
                            </td>
                            <td>
                                <a>0x6bFd17f7...7Ded71575</a>
                            </td>
                            <td>0.0021 ETH</td>
                        </tr>
                        {/* row 3 */}
                        <tr className="hover">
                            <td>
                                <a>0x503afb676be44...</a>
                            </td>
                            <td>125 days ago</td>
                            <td>
                                <a>0xc2BD30B9...333Fa0033</a>
                            </td>
                            <td>
                                <a>0x6bFd17f7...7Ded71575</a>
                            </td>
                            <td>0.61 ETH</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepositPage;

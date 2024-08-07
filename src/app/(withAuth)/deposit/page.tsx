"use client";

import React from "react";
import { NextPage } from "next";
import { DefaultInput } from "@/components/default-input";
import { withAuth } from "@/guards/auth-guard";

const DepositPage: NextPage = () => {
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
                                placeholder: "in ETH",
                            }}
                        />
                        <div className="modal-action">
                            <button className="btn btn-secondary">
                                Deposit
                            </button>
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
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

export default withAuth(DepositPage);

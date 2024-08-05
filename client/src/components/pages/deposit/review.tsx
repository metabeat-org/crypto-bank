"use client";

import React, { FC } from "react";
import { useAtomValue } from "jotai/index";
import { createFormAtom } from "@/stores";

export const Review: FC = () => {
    const { accountName, signers, threshold } = useAtomValue(createFormAtom);

    return (
        <>
            <h2 className="text-2xl py-3">Review</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{accountName}</td>
                        </tr>
                        {signers.map((signer, index) => (
                            <tr>
                                <th>{index === 0 && "Signers"}</th>
                                <td>
                                    {signer.address}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {signer.name}
                                    </span>
                                </td>
                            </tr>
                        ))}
                        <tr>
                            <th>Threshold</th>
                            <td>
                                {threshold} out of {signers.length} signer(s)
                            </td>
                        </tr>
                        {/*<tr>*/}
                        {/*    <th>Est. network fee</th>*/}
                        {/*    <td>*/}
                        {/*        <div className="badge badge-accent badge-outline">*/}
                        {/*            ≈ 0.01413 ETH*/}
                        {/*        </div>*/}
                        {/*    </td>*/}
                        {/*</tr>*/}
                    </tbody>
                </table>
            </div>
        </>
    );
};

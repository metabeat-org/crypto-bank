"use client";

import React, { FC } from "react";
import { Signer } from "@/components/pages/deposit/signer";
import { useAtom } from "jotai";
import { createFormAtom } from "@/stores";

export const Signers: FC = () => {
    const [form, setForm] = useAtom(createFormAtom);

    const handleAdd = () => {
        setForm(form => ({
            ...form,
            signers: [
                ...form.signers,
                {
                    name: "",
                    address: "",
                },
            ],
        }));
    };

    const handleChange = e => {
        setForm(form => ({
            ...form,
            threshold: e.target.value,
        }));
    };

    return (
        <>
            <h2 className="text-2xl py-3">Signers and confirmations</h2>
            <div className="flex flex-col gap-2">
                {form.signers.map((signer, index) => (
                    <Signer
                        key={index}
                        isDefault={index === 0}
                        index={index}
                    />
                ))}
            </div>
            <button
                className="btn btn-ghost mt-4"
                onClick={handleAdd}
            >
                + Add new signer
            </button>
            <div className="divider" />
            <h3 className="text-2xl py-3">
                {form.threshold} out of {form.signers.length} signer(s)
            </h3>
            <div className="mt-2">
                <input
                    type="range"
                    min={1}
                    max={form.signers.length}
                    value={form.threshold}
                    className="range"
                    step="1"
                    onChange={handleChange}
                />
                <div className="flex w-full justify-between px-2 text-xs">
                    {form.signers.map((_, i) => (
                        <span key={i}>{i + 1}</span>
                    ))}
                </div>
            </div>
        </>
    );
};

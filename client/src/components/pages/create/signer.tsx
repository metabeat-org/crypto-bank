"use client";

import React, { FC } from "react";
import { DefaultInput } from "@/components/default-input";
import { useAtom } from "jotai/index";
import { createFormAtom } from "@/stores";

interface SignerProps {
    index: number;
    isDefault?: boolean;
}
export const Signer: FC<SignerProps> = ({ isDefault = false, index }) => {
    const [form, setForm] = useAtom(createFormAtom);

    const handleName = e => {
        const signers = form.signers.map((signer, i) =>
            index === i ? { ...signer, name: e.target.value } : signer
        );
        setForm(form => ({
            ...form,
            signers,
        }));
    };

    const handleAddress = e => {
        const signers = form.signers.map((signer, i) =>
            index === i ? { ...signer, address: e.target.value } : signer
        );
        setForm(form => ({
            ...form,
            signers,
        }));
    };

    const handleDelete = () => {
        setForm(form => ({
            ...form,
            signers: form.signers.filter((signer, i) => index !== i),
            threshold: 1,
        }));
    };

    return (
        <div className="flex gap-2">
            <DefaultInput
                label="Signer name"
                inputProps={{
                    placeholder: `Signer ${index + 1}`,
                    value: form.signers[index].name,
                    onChange: handleName,
                }}
            />
            <DefaultInput
                label="Signer"
                inputProps={{
                    placeholder: "Wallet Address",
                    value: form.signers[index].address,
                    onChange: handleAddress,
                }}
            />
            {!isDefault && (
                <button
                    className="btn btn-square ml-auto self-end"
                    onClick={handleDelete}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};

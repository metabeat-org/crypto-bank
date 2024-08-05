"use client";

import React, { FC } from "react";
import { DefaultInput } from "@/components/default-input";
import { useAtom } from "jotai";
import { createFormAtom } from "@/stores";

export const AccountName: FC = () => {
    const [form, setForm] = useAtom(createFormAtom);

    const handleChange = e => {
        setForm(form => ({ ...form, accountName: e.target.value }));
    };

    return (
        <>
            <h2 className="text-2xl py-3">Create new Account</h2>
            <DefaultInput
                label="What is your account name?"
                inputProps={{
                    value: form.accountName,
                    onChange: handleChange,
                }}
            />
        </>
    );
};

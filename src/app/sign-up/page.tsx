"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import { DefaultInput } from "@/components/default-input";
import { useAtom, useAtomValue } from "jotai/index";
import { loadingAtom, walletAtom } from "@/stores";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/layout/loading";

const SignUpPage: NextPage = () => {
    const [isLoading, setLoading] = useAtom(loadingAtom);
    const { account } = useAtomValue(walletAtom);
    const router = useRouter();
    const [form, setForm] = useState<{ email: string; userName: string }>({
        email: "",
        userName: "",
    });
    const handleSignUp = async e => {
        e.preventDefault();

        try {
            setLoading(true);
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ ...form, walletAddress: account }),
                }
            );
            setLoading(false);

            const { status } = await res.json();
            if (status === 201) {
                router.push("/home");
            }
        } catch (e) {
            setLoading(false);
            console.error("Failed to sign up", e);
        }
    };

    return (
        <div className="card flex flex-col items-center">
            <div className="card-body mt-20 w-96 bg-base-200 max-w-sm rounded-xl">
                <h2 className="mb-4 font-bold text-2xl text-center text-warning">
                    Sign Up
                </h2>
                <form onSubmit={handleSignUp}>
                    <div className="flex flex-col">
                        <DefaultInput
                            label="Wallet Address"
                            inputProps={{
                                value: account,
                                readOnly: true,
                            }}
                        />
                        <DefaultInput
                            label="Email"
                            inputProps={{
                                value: form.email,
                                onChange: e =>
                                    setForm(form => ({
                                        ...form,
                                        email: e.target.value,
                                    })),
                            }}
                        />
                        <DefaultInput
                            label="User Name"
                            inputProps={{
                                value: form.userName,
                                onChange: e =>
                                    setForm(form => ({
                                        ...form,
                                        userName: e.target.value,
                                    })),
                            }}
                        />
                    </div>
                    <button
                        className="mt-6 btn btn-neutral w-full"
                        disabled={isLoading}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            {isLoading && <Loading />}
        </div>
    );
};

export default SignUpPage;

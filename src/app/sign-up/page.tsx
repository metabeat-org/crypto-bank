"use client";

import React from "react";
import { NextPage } from "next";
import { DefaultInput } from "@/components/default-input";

const SignUpPage: NextPage = () => {
    return (
        <div className="card flex flex-col items-center">
            <div className="card-body mt-20 w-96 bg-base-200 max-w-sm rounded-xl">
                <h2 className="mb-4 font-bold text-2xl text-center text-warning">
                    Sign Up
                </h2>
                <form>
                    <div className="flex flex-col">
                        <DefaultInput
                            label="Wallet Address"
                            inputProps={{
                                value: "0xAcCb238DE153b1Ea095134CFC79D2b80F7BD0D79",
                                readOnly: true,
                            }}
                        />
                        <DefaultInput label="Email" />
                        <DefaultInput label="User Name" />
                    </div>
                    <button
                        className="mt-6 btn btn-neutral w-full"
                        disabled
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage;

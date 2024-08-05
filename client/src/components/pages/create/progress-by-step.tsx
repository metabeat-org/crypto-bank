"use client";

import React, { FC } from "react";
import { AccountName } from "@/components/pages/create/account-name";
import { Signers } from "@/components/pages/create/signers";
import { Review } from "@/components/pages/create/review";
import { useAtomValue } from "jotai/index";
import { createStepAtom } from "@/stores";

export const ProgressByStep: FC = () => {
    const step = useAtomValue(createStepAtom);

    return (
        <div className="py-20">
            {step === 0 && <AccountName />}
            {step === 1 && <Signers />}
            {step === 2 && <Review />}
        </div>
    );
};

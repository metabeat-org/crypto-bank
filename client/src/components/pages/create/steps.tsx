"use client";

import React, { FC } from "react";
import { useAtomValue } from "jotai/index";
import { createStepAtom } from "@/stores";

export const Steps: FC = () => {
    const step = useAtomValue(createStepAtom);

    const stepLabel = ["Name of your account", "Signers", "Review"];

    return (
        <ul className="steps steps-horizontal">
            {stepLabel.map((label, index) => (
                <li
                    key={label}
                    className={`step ${index <= step && "step-primary"}`}
                >
                    {label}
                </li>
            ))}
        </ul>
    );
};

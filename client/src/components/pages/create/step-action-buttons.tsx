"use client";

import React, { FC } from "react";
import { useAtom } from "jotai";
import { createStepAtom } from "@/stores";

export const StepActionButtons: FC = () => {
    const [step, setStep] = useAtom(createStepAtom);
    const handleBack = () => {
        if (step < 1) {
            return;
        }
        setStep(step => step - 1);
    };

    const handleNext = () => {
        if (step > 1) {
            return;
        }
        setStep(step => step + 1);
    };

    return (
        <div className="flex justify-between">
            <button
                className="btn"
                onClick={handleBack}
            >
                Back
            </button>
            <button
                className="btn btn-neutral"
                onClick={handleNext}
            >
                {step === 2 ? "Create" : "Next"}
            </button>
        </div>
    );
};

import React from "react";
import { NextPage } from "next";
import { Steps } from "@/components/pages/deposit/steps";
import { ProgressByStep } from "@/components/pages/deposit/progress-by-step";
import { StepActionButtons } from "@/components/pages/deposit/step-action-buttons";

const CreatePage: NextPage = () => {
    return (
        <div className="flex flex-col">
            <Steps />
            <ProgressByStep />
            <StepActionButtons />
        </div>
    );
};

export default CreatePage;

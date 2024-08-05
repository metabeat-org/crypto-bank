import React from "react";
import { NextPage } from "next";
import { Steps } from "@/components/pages/create/steps";
import { ProgressByStep } from "@/components/pages/create/progress-by-step";
import { StepActionButtons } from "@/components/pages/create/step-action-buttons";

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

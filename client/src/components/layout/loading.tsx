import { FC } from "react";

export const Loading: FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    );
};

import React, { FC, HTMLProps } from "react";

interface DefaultInputProps {
    label?: string;
    inputProps?: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    errorMessage?: string;
}
export const DefaultInput: FC<DefaultInputProps> = ({
    label = "",
    inputProps,
    errorMessage = "",
}) => {
    return (
        <label className="form-control w-full">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                {...(!!inputProps && {
                    ...inputProps,
                })}
            />
            <span className="py-1.5 break-words text-error">
                {errorMessage}
            </span>
        </label>
    );
};

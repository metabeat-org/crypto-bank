import React, { FC, HTMLProps } from "react";

interface DefaultInputProps {
    label?: string;
    inputProps?: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
}
export const DefaultInput: FC<DefaultInputProps> = ({
    label = "",
    inputProps,
}) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...(!!inputProps && {
                    ...inputProps,
                })}
            />
        </label>
    );
};

"use client";

import React from "react";
import { NextPage } from "next";
import { withAuth } from "@/guards/auth-guard";

const WithdrawalPage: NextPage = () => {
    return (
        <div className="flex flex-col">
            <div className="flex items-center">
                <h2 className="text-3xl font-bold">Withdrawal History</h2>
                <button
                    className="btn btn-primary ml-auto"
                    onClick={() =>
                        document.getElementById("my_modal_1").showModal()
                    }
                >
                    Withdrawal
                </button>
                {/*<dialog*/}
                {/*    id="my_modal_1"*/}
                {/*    className="modal"*/}
                {/*>*/}
                {/*    <div className="modal-box">*/}
                {/*        <h3 className="font-bold text-lg">Hello!</h3>*/}
                {/*        <p className="py-4">*/}
                {/*            Press ESC key or click the button below to close*/}
                {/*        </p>*/}
                {/*        <div className="modal-action">*/}
                {/*            <form method="dialog">*/}
                {/*                /!* if there is a button in form, it will close the modal *!/*/}
                {/*                <button className="btn">Close</button>*/}
                {/*            </form>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</dialog>*/}
            </div>
        </div>
    );
};

export default withAuth(WithdrawalPage);

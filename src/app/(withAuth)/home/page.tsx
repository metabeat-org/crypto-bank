"use client";

import React from "react";
import { NextPage } from "next";
import { withAuth } from "@/guards/auth-guard";

const HomePage: NextPage = () => {
    return (
        <div className="flex flex-col">
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline-block h-8 w-8 stroke-current"
                            fill="oklch(0.807415 0.052534 159.0946)"
                        >
                            <g
                                id="SVGRepo_bgCarrier"
                                strokeWidth="0"
                            ></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M12.32 8a3 3 0 0 0-2-.7H5.63A1.59 1.59 0 0 1 4 5.69a2 2 0 0 1 0-.25 1.59 1.59 0 0 1 1.63-1.33h4.62a1.59 1.59 0 0 1 1.57 1.33h1.5a3.08 3.08 0 0 0-3.07-2.83H8.67V.31H7.42v2.3H5.63a3.08 3.08 0 0 0-3.07 2.83 2.09 2.09 0 0 0 0 .25 3.07 3.07 0 0 0 3.07 3.07h4.74A1.59 1.59 0 0 1 12 10.35a1.86 1.86 0 0 1 0 .34 1.59 1.59 0 0 1-1.55 1.24h-4.7a1.59 1.59 0 0 1-1.55-1.24H2.69a3.08 3.08 0 0 0 3.06 2.73h1.67v2.27h1.25v-2.27h1.7a3.08 3.08 0 0 0 3.06-2.73v-.34A3.06 3.06 0 0 0 12.32 8z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="stat-title">Balance</div>
                    <div className="stat-value">3.1 ETH</div>
                    <div className="stat-desc">↗︎ 400 (22%)</div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(HomePage);

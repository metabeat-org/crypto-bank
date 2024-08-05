import React from "react";
import { NextPage } from "next";
import Link from "next/link";

const HomePage: NextPage = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <Link
                        className="btn btn-primary"
                        href="/deposit"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;

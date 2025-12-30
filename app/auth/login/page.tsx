"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Placeholder: replace with real auth logic (e.g., Supabase, NextAuth)
        if (email && password) {
            // Simulate successful login
            router.push("/");
        } else {
            setError("Please enter email and password.");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-800 p-4">
            <div className="w-full max-w-md rounded-xl bg-white bg-opacity-90 p-8 shadow-lg backdrop-blur-md">
                <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Login</h1>
                {error && <p className="mb-4 text-center text-sm text-red-600">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                    />
                    <button
                        type="submit"
                        className="w-full rounded bg-purple-600 py-2 font-semibold text-white transition-colors hover:bg-purple-700"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
}

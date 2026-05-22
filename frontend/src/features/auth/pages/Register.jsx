import React from 'react'
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Register = () => {

    const { loading, handleRegister } = useAuth();
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

        const handleSubmit = async (e) => {
        e.preventDefault();
        await handleRegister({username, email, password});
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/");
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        )
    }

    

  return (
    <div className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
      <div className="mx-auto w-full max-w-md">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/30">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300">
              Welcome 
            </p>
            <h1 className="mt-4 text-3xl font-semibold text-white">Register</h1>
            <p className="mt-2 text-sm text-slate-300">
              Enter your credentials to continue.
            </p>
          </div>

          <form className="space-y-5 " onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Username
              </span>
              <input
                type="text"
                placeholder="Jane Doe"
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Email
              </span>
              <input
                type="email"
                placeholder="jane.doe@example.com"
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                Password
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-3 w-full rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <button
              type="submit"
              className="w-full rounded-2xl bg-emerald-400 px-4 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-400/20"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-sm text-slate-300">
            If you have an account already, <a href="/login" className="text-emerald-400 hover:underline">
              sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register
"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [handle, setHandle] = useState("");
  const [focused, setFocused] = useState(false);

  const isValid = handle.length >= 3;

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-900">
        <Link href="/" className="text-xl font-bold tracking-tighter">shado</Link>
        <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-white transition">
          Sign in
        </Link>
      </nav>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-24">
        <div className="w-full max-w-md">

          <h1 className="text-4xl font-bold tracking-tighter mb-2">
            Claim your handle
          </h1>
          <p className="text-zinc-500 text-sm mb-10">
            This is your private identity on Shado. Choose wisely.
          </p>

          {/* Input */}
          <div className={`flex items-center bg-zinc-950 border rounded-2xl px-5 py-4 transition ${focused ? "border-white" : "border-zinc-800"}`}>
            <span className="text-zinc-500 text-lg mr-1">@</span>
            <input
              type="text"
              placeholder="yourhandle"
              value={handle}
              onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="bg-transparent outline-none flex-1 text-white text-lg placeholder:text-zinc-700"
              maxLength={20}
            />
            {handle.length > 0 && (
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${isValid ? "bg-zinc-900 text-green-400" : "bg-zinc-900 text-zinc-500"}`}>
                {isValid ? "available" : "too short"}
              </span>
            )}
          </div>

          <p className="text-zinc-700 text-xs mt-3 ml-1">
            Only letters, numbers and underscores. Min 3 characters.
          </p>

          {/* Rules */}
          <div className="mt-8 bg-zinc-950 border border-zinc-900 rounded-2xl p-5 space-y-3">
            {[
              "Your handle is public — people use it to send you crypto",
              "Your balance and transactions are always private",
              "You can transfer your handle anytime",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3">
                <span className="text-green-500 mt-0.5 text-xs">✓</span>
                <p className="text-zinc-400 text-sm">{rule}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            disabled={!isValid}
            className={`w-full mt-6 py-4 rounded-2xl font-medium text-sm transition ${
              isValid
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-zinc-900 text-zinc-600 cursor-not-allowed"
            }`}
          >
            Claim @{handle || "yourhandle"}
          </button>

        </div>
      </div>

    </main>
  );
}
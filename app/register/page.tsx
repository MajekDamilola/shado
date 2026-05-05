"use client";
import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [handle, setHandle] = useState("");
  const [focused, setFocused] = useState(false);
  const isValid = handle.length >= 3;

  return (
    <main className="min-h-screen text-white flex flex-col" style={{background: "#080808"}}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{borderColor: "#1a1a1a"}}>
        <div className="flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
  <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
  <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
</svg>
          <Link href="/" className="text-lg font-bold tracking-tight">shado</Link>
        </div>
        <Link href="/dashboard" className="text-sm" style={{color: "#666"}}>Sign in</Link>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 px-6 py-24">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{background: "#FF6B00"}}></div>
        <div className="w-full max-w-md relative">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: "#FF6B00"}}>Step 1 of 1</p>
          <h1 className="text-4xl font-bold tracking-tighter mb-2">Claim your handle</h1>
          <p className="text-sm mb-10" style={{color: "#555"}}>This is your private identity on Shado. Choose wisely.</p>

          <div className="flex items-center rounded-xl px-5 py-4 mb-2 border transition" style={{background: "#0d0d0d", borderColor: focused ? "#FF6B00" : "#1a1a1a"}}>
            <span className="text-lg mr-2" style={{color: "#FF6B00"}}>@</span>
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
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{background: isValid ? "rgba(255,107,0,0.1)" : "#111", color: isValid ? "#FF6B00" : "#444"}}>
                {isValid ? "available" : "too short"}
              </span>
            )}
          </div>

          <p className="text-xs mb-8 ml-1" style={{color: "#333"}}>Only letters, numbers and underscores. Min 3 characters.</p>

          <div className="rounded-2xl p-5 mb-6 border" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
            {[
              "Your handle is public — people use it to send you crypto",
              "Your balance and transactions are always private",
              "You can transfer your handle anytime",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3 mb-3 last:mb-0">
                <span className="mt-0.5 text-xs" style={{color: "#FF6B00"}}>✓</span>
                <p className="text-sm" style={{color: "#555"}}>{rule}</p>
              </div>
            ))}
          </div>

          <button
            disabled={!isValid}
            className="w-full py-4 rounded-xl font-semibold text-sm transition"
            style={{background: isValid ? "#FF6B00" : "#111", color: isValid ? "#fff" : "#333", cursor: isValid ? "pointer" : "not-allowed"}}
          >
            Claim @{handle || "yourhandle"} →
          </button>
        </div>
      </div>
    </main>
  );
}
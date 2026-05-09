"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [handle, setHandle] = useState("");
  const [focused, setFocused] = useState(false);
  const [claiming, setClaiming] = useState(false);
  const router = useRouter();
  const isValid = handle.length >= 3;

  const handleClaim = async () => {
    if (!isValid) return;
    setClaiming(true);
    await new Promise((r) => setTimeout(r, 1200));
    localStorage.setItem("shado-handle", handle);
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen text-white flex flex-col" style={{background: "var(--bg-main)", color: "var(--text-main)"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{
        background: "var(--nav-bg)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(128,128,128,0.1)"
      }}>
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center justify-center w-9 h-9 rounded-xl" style={{
            background: "rgba(128,128,128,0.1)", border: "1px solid rgba(128,128,128,0.15)", color: "var(--text-main)", fontSize: "16px"
          }}>←</Link>
          <Link href="/" className="flex items-center gap-2.5">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
            </svg>
            <span className="font-bold tracking-tight" style={{fontSize: "18px", color: "var(--text-main)"}}>shado</span>
          </Link>
        </div>
        <Link href="/dashboard" className="text-sm" style={{color: "var(--text-muted)"}}>Sign in</Link>
      </nav>

      <div className="flex flex-col items-center justify-center flex-1 px-6 pt-32 pb-24">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none" style={{background: "#FF6B00"}}></div>
        <div className="w-full max-w-md relative">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: "#FF6B00"}}>Step 1 of 1</p>
          <h1 style={{fontSize: "40px", fontWeight: "800", letterSpacing: "-1.5px", marginBottom: "8px", color: "var(--text-main)"}}>
            Claim your handle
          </h1>
          <p className="text-sm mb-10" style={{color: "var(--text-muted)"}}>
            This is your private identity on Shado. Choose wisely.
          </p>

          <div className="flex items-center rounded-xl px-5 py-4 mb-2 transition" style={{
            background: "var(--bg-card)",
            border: focused ? "1px solid #FF6B00" : "1px solid rgba(128,128,128,0.15)"
          }}>
            <span className="text-lg mr-2" style={{color: "#FF6B00"}}>@</span>
            <input
              type="text"
              placeholder="yourhandle"
              value={handle}
              onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              className="bg-transparent outline-none flex-1 text-lg placeholder:text-zinc-600"
              style={{color: "var(--text-main)"}}
              maxLength={20}
            />
            {handle.length > 0 && (
              <span className="text-xs font-medium px-3 py-1 rounded-full" style={{
                background: isValid ? "rgba(255,107,0,0.1)" : "rgba(128,128,128,0.1)",
                color: isValid ? "#FF6B00" : "var(--text-muted)"
              }}>
                {isValid ? "✓ available" : "too short"}
              </span>
            )}
          </div>

          <p className="text-xs mb-8 ml-1" style={{color: "var(--text-muted)", opacity: 0.5}}>
            Only letters, numbers and underscores. Min 3 characters.
          </p>

          <div className="rounded-2xl p-5 mb-6" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
            {[
              "Your handle is public — people use it to send you crypto",
              "Your balance and transactions are always private",
              "You can transfer your handle anytime",
            ].map((rule) => (
              <div key={rule} className="flex items-start gap-3 mb-3 last:mb-0">
                <span className="mt-0.5 text-xs" style={{color: "#FF6B00"}}>✓</span>
                <p className="text-sm" style={{color: "var(--text-muted)"}}>{rule}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handleClaim}
            disabled={!isValid || claiming}
            className="w-full py-4 rounded-xl font-semibold text-sm transition relative overflow-hidden"
            style={{
              background: isValid ? "linear-gradient(135deg, #FF6B00, #FF8C00)" : "rgba(128,128,128,0.1)",
              color: isValid ? "#fff" : "var(--text-muted)",
              cursor: isValid ? "pointer" : "not-allowed",
              boxShadow: isValid ? "0 0 30px rgba(255,107,0,0.3)" : "none"
            }}
          >
            {claiming ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                Claiming @{handle}...
              </span>
            ) : (
              `Claim @${handle || "yourhandle"} →`
            )}
          </button>
        </div>
      </div>
    </main>
  );
}
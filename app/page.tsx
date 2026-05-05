"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden" style={{background: "var(--bg-main)", color: "var(--text-main)"}}>

      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)`,
        backgroundSize: "64px 64px"
      }}/>

      <div className="fixed top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: "600px", height: "400px",
        background: "radial-gradient(ellipse at center top, rgba(255,107,0,0.12) 0%, transparent 70%)"
      }}/>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)"
      }}>
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
            <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
          </svg>
          <span className="font-bold tracking-tight" style={{fontSize: "18px"}}>shado</span>
        </Link>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center justify-center w-9 h-9 rounded-xl gap-1.5"
            style={{background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)"}}
          >
            <span className="block w-4 h-px" style={{background: "#fff", transform: menuOpen ? "rotate(45deg) translate(2px, 2px)" : "none", transition: "all 0.2s"}}/>
            <span className="block h-px" style={{background: "#fff", width: menuOpen ? "16px" : "12px", opacity: menuOpen ? 0 : 1, transition: "all 0.2s"}}/>
            <span className="block h-px" style={{background: "#fff", width: menuOpen ? "16px" : "8px", transform: menuOpen ? "rotate(-45deg) translate(2px, -2px)" : "none", transition: "all 0.2s"}}/>
          </button>
        </div>

        {menuOpen && (
          <div className="absolute top-full left-0 right-0 py-4 px-8 flex flex-col gap-1" style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.04)"
          }}>
            <Link href="/how" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium border-b" style={{color: "#666", borderColor: "rgba(255,255,255,0.04)"}}>How it works</Link>
            <Link href="/privacy" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium border-b" style={{color: "#666", borderColor: "rgba(255,255,255,0.04)"}}>Privacy</Link>
            <Link href="/dashboard" onClick={() => setMenuOpen(false)} className="py-3 text-sm font-medium border-b" style={{color: "#666", borderColor: "rgba(255,255,255,0.04)"}}>Dashboard</Link>
            <Link href="/register" onClick={() => setMenuOpen(false)} className="mt-2 py-3 text-center text-sm font-semibold rounded-xl" style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff"}}>Get started</Link>
          </div>
        )}
      </nav>

      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-32">
        <div className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-10" style={{
          background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.15)", color: "#FF6B00"
        }}>
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{boxShadow: "0 0 6px #4ade80"}}/>
          Built on Miden
        </div>

        <h1 style={{fontSize: "clamp(48px, 8vw, 96px)", fontWeight: "800", letterSpacing: "-3px", lineHeight: "1", marginBottom: "28px"}}>
          Send crypto.<br/>
          <span style={{background: "linear-gradient(135deg, #FF6B00 0%, #FF9A00 50%, #FFB800 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"}}>Stay invisible.</span>
        </h1>

        <p className="max-w-xl mx-auto mb-12" style={{color: "#666", fontSize: "18px", lineHeight: "1.7"}}>
          Shado lets you send and receive crypto using just a @handle.
          No wallet addresses exposed. No transaction history. No trace.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-24">
          <Link href="/register" className="px-8 py-4 rounded-xl font-semibold text-sm" style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff", boxShadow: "0 0 30px rgba(255,107,0,0.3)", minWidth: "200px", textAlign: "center"}}>
            Claim your handle →
          </Link>
          <Link href="/how" className="px-8 py-4 rounded-xl text-sm font-medium" style={{background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#666", minWidth: "200px", textAlign: "center"}}>
            See how it works
          </Link>
        </div>

        <div className="w-full max-w-sm mx-auto rounded-2xl p-6 relative" style={{
          background: "rgba(13,13,13,0.8)", border: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)", boxShadow: "0 40px 80px rgba(0,0,0,0.6)"
        }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400" style={{boxShadow: "0 0 6px #4ade80"}}/>
              <span style={{color: "#444", fontSize: "12px"}}>@tunde</span>
            </div>
            <span style={{color: "#222", fontSize: "11px", letterSpacing: "2px"}}>PRIVATE</span>
          </div>
          <div className="mb-6">
            <p style={{color: "#333", fontSize: "11px", letterSpacing: "2px", marginBottom: "6px"}}>BALANCE</p>
            <p style={{fontSize: "42px", fontWeight: "800", letterSpacing: "-2px", color: "#fff"}}>$0.00</p>
            <p style={{color: "#2a2a2a", fontSize: "11px", marginTop: "4px"}}>Only you can see this</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="py-3 rounded-xl text-center text-sm font-semibold" style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff"}}>↑ Send</div>
            <div className="py-3 rounded-xl text-center text-sm font-medium" style={{background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", color: "#555"}}>↓ Receive</div>
          </div>
        </div>
      </section>

      <div className="border-y py-6" style={{borderColor: "rgba(255,255,255,0.04)"}}>
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 px-8 text-center">
          {[
            {val: "< 1s", label: "Proof generation"},
            {val: "100%", label: "Private by default"},
            {val: "0", label: "Data exposed on-chain"},
          ].map((s) => (
            <div key={s.label}>
              <p style={{fontSize: "28px", fontWeight: "800", letterSpacing: "-1px", color: "#FF6B00"}}>{s.val}</p>
              <p style={{fontSize: "12px", color: "#333", marginTop: "4px"}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <section id="how" className="py-32 px-8 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px"}}>HOW IT WORKS</p>
          <h2 style={{fontSize: "42px", fontWeight: "800", letterSpacing: "-2px"}}>Private by design</h2>
          <p style={{color: "#444", fontSize: "16px", marginTop: "12px"}}>Every layer built for zero exposure</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {num: "01", title: "Claim a handle", desc: "Pick a @handle. That's your identity on Shado. No wallet address needed — ever.", icon: "◈"},
            {num: "02", title: "Prove, don't reveal", desc: "Transactions are proved on your device using ZK proofs. Only a hash hits the chain.", icon: "⬡"},
            {num: "03", title: "Total invisibility", desc: "Your balance, history, and counterparties are private. No explorer can trace you.", icon: "◎"},
          ].map((f) => (
            <div key={f.title} className="rounded-2xl p-7" style={{background: "rgba(13,13,13,0.6)", border: "1px solid rgba(255,255,255,0.05)"}}>
              <div className="text-xs font-bold mb-6 tracking-widest" style={{color: "#FF6B00"}}>{f.num}</div>
              <div className="text-2xl mb-4" style={{color: "#FF6B00", opacity: 0.6}}>{f.icon}</div>
              <h3 className="font-bold mb-3" style={{fontSize: "17px", letterSpacing: "-0.5px"}}>{f.title}</h3>
              <p style={{color: "#444", fontSize: "14px", lineHeight: "1.7"}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-8 max-w-5xl mx-auto">
        <div className="rounded-3xl p-12 relative overflow-hidden" style={{background: "rgba(13,13,13,0.6)", border: "1px solid rgba(255,107,0,0.1)"}}>
          <div className="absolute top-0 right-0 pointer-events-none" style={{width: "400px", height: "400px", background: "radial-gradient(ellipse at top right, rgba(255,107,0,0.06) 0%, transparent 70%)"}}/>
          <div className="max-w-xl relative">
            <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px"}}>PRIVACY GUARANTEE</p>
            <h2 style={{fontSize: "36px", fontWeight: "800", letterSpacing: "-1.5px", marginBottom: "16px"}}>What no one can ever see</h2>
            <p style={{color: "#444", fontSize: "15px", lineHeight: "1.7", marginBottom: "32px"}}>Shado is built on Miden's ZK rollup. Client-side proving means your data never leaves your device.</p>
            <div className="space-y-3">
              {["Your wallet balance", "Who you sent money to", "How much you sent", "Your transaction history", "Your real identity"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)"}}>
                    <span style={{color: "#FF6B00", fontSize: "10px"}}>✓</span>
                  </div>
                  <span style={{color: "#666", fontSize: "14px"}}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="text-center px-6 py-32">
        <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "24px"}}>GET STARTED</p>
        <h2 style={{fontSize: "56px", fontWeight: "800", letterSpacing: "-2px", marginBottom: "16px"}}>Ready to go dark?</h2>
        <p style={{color: "#444", fontSize: "16px", marginBottom: "40px"}}>Claim your handle. Start sending privately.</p>
        <Link href="/register" className="inline-block px-12 py-5 rounded-xl font-bold text-sm" style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff", boxShadow: "0 0 40px rgba(255,107,0,0.35)", fontSize: "15px"}}>
          Claim @handle →
        </Link>
      </section>

      <footer className="px-8 py-10 border-t" style={{borderColor: "rgba(255,255,255,0.04)"}}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
            </svg>
            <span style={{color: "#333", fontSize: "13px"}}>shado</span>
          </div>
          <p style={{color: "#222", fontSize: "12px"}}>Built on Miden · Private by default</p>
        </div>
      </footer>

    </main>
  );
}
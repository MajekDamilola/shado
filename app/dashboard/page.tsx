"use client";
import { useState } from "react";
import Link from "next/link";
import { useAccount } from "@miden-sdk/react";
import { useMidenFiWallet } from "@miden-sdk/miden-wallet-adapter";

export default function Dashboard() {
  const { address, connected, disconnect } = useMidenFiWallet();
  const { assets, isLoading } = useAccount(address ?? undefined);
  const [activeTab, setActiveTab] = useState<"send" | "receive" | null>(null);
  const [sendHandle, setSendHandle] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const userHandle = typeof window !== "undefined" ? localStorage.getItem("shado-handle") || "anon" : "anon";

  const balance = assets?.[0]?.amount?.toString() ?? "0";

  return (
    <main className="min-h-screen flex flex-col" style={{background: "var(--bg-main)", color: "var(--text-main)"}}>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{background: "var(--nav-bg)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(128,128,128,0.1)"}}>
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
            <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
          </svg>
          <span className="font-bold tracking-tight" style={{fontSize: "18px"}}>shado</span>
        </Link>
        {connected && (
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-400 rounded-full" style={{boxShadow: "0 0 6px #4ade80"}}></div>
            <span className="text-sm" style={{color: "#FF6B00"}}>@{userHandle}</span>
            <button onClick={disconnect} className="text-xs px-3 py-1.5 rounded-lg" style={{background: "rgba(128,128,128,0.1)", color: "var(--text-muted)", border: "1px solid rgba(128,128,128,0.15)"}}>Disconnect</button>
          </div>
        )}
      </nav>

      <div className="flex flex-col flex-1 px-6 pt-24 pb-24 max-w-md mx-auto w-full">
        <div className="rounded-2xl p-6 mb-4" style={{background: "var(--card-bg)", border: "1px solid rgba(128,128,128,0.1)"}}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{color: "var(--text-muted)", opacity: 0.5}}>Private balance</p>
          <h2 style={{fontSize: "48px", fontWeight: "800", letterSpacing: "-2px"}}>
            {isLoading ? "..." : `${balance}`}
          </h2>
          <p className="text-xs mt-3" style={{color: "var(--text-muted)", opacity: 0.3}}>Only you can see this</p>
          {connected && (
            <div className="mt-4 px-3 py-2 rounded-lg inline-block" style={{background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.15)"}}>
              <p className="text-xs" style={{color: "#FF6B00", fontFamily: "monospace"}}>✓ Miden wallet connected</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <button onClick={() => setActiveTab("send")} className="py-4 rounded-2xl font-medium" style={{background: "var(--card-bg)", border: activeTab === "send" ? "1px solid #FF6B00" : "1px solid rgba(128,128,128,0.1)"}}>↑ Send</button>
          <button onClick={() => setActiveTab("receive")} className="py-4 rounded-2xl font-medium" style={{background: "var(--card-bg)", border: activeTab === "receive" ? "1px solid #FF6B00" : "1px solid rgba(128,128,128,0.1)"}}>↓ Receive</button>
        </div>

        <div className="rounded-2xl p-6" style={{background: "var(--card-bg)", border: "1px solid rgba(128,128,128,0.1)"}}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{color: "var(--text-muted)", opacity: 0.5}}>Activity</p>
          <div className="flex flex-col items-center justify-center py-8">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.1)"}}>
              <div className="w-3 h-3 rounded-full" style={{background: "#FF6B00", boxShadow: "0 0 8px #FF6B00"}}></div>
            </div>
            <p className="text-sm font-medium mb-1">No transactions yet</p>
            <p className="text-xs" style={{color: "var(--text-muted)", opacity: 0.5}}>Your history is private and stored locally</p>
          </div>
        </div>
      </div>
    </main>
  );
}

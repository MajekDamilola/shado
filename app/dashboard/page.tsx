"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useWallet, WalletName } from "@demox-labs/miden-wallet-adapter";

export default function Dashboard() {
  const { wallets, select, wallet, disconnect, connecting, connected } = useWallet();
  const [activeTab, setActiveTab] = useState<"send" | "receive" | null>(null);
  const [sendHandle, setSendHandle] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [balance, setBalance] = useState("0.00");

  useEffect(() => {
    if (wallet?.adapter?.address) {
      fetch(`/api/balance?accountId=${wallet.adapter.address}`)
        .then(r => r.json())
        .then(d => setBalance(d.balance || "0.00"));
    }
  }, [wallet]);
  const [userHandle, setUserHandle] = useState<string>("anon");

  useEffect(() => {
    const saved = localStorage.getItem("shado-handle");
    if (saved) setUserHandle(saved);
  }, []);

  const handleConnect = async () => {
    try {
      if (wallets.length > 0) {
        select(wallets[0].adapter.name as WalletName);
      }
    } catch (err) {
      console.error("Connect error:", err);
    }
  };

  return (
    <main className="min-h-screen flex flex-col" style={{background: "var(--bg-main)", color: "var(--text-main)"}}>
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
        <div className="flex items-center gap-3">
          {connected ? (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" style={{boxShadow: "0 0 6px #4ade80"}}></div>
              <span className="text-sm" style={{color: "var(--text-muted)"}}>@{userHandle}</span>
              <button
                onClick={() => disconnect()}
                className="text-xs px-3 py-1.5 rounded-lg"
                style={{background: "rgba(128,128,128,0.1)", color: "var(--text-muted)", border: "1px solid rgba(128,128,128,0.15)"}}
              >
                Disconnect
              </button>
            </div>
          ) : (
            <button
              onClick={handleConnect}
              disabled={connecting}
              className="text-sm font-semibold px-5 py-2.5 rounded-xl transition"
              style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff", boxShadow: "0 0 20px rgba(255,107,0,0.25)"}}
            >
              {connecting ? "Connecting..." : "Connect Wallet"}
            </button>
          )}
        </div>
      </nav>

      <div className="max-w-lg mx-auto w-full px-6 pt-28 pb-12 flex flex-col gap-4">
        {!connected ? (
          <div className="rounded-2xl p-12 flex flex-col items-center justify-center text-center" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{background: "rgba(255,107,0,0.08)", border: "1px solid rgba(255,107,0,0.15)"}}>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
                <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
              </svg>
            </div>
            <h3 style={{fontSize: "20px", fontWeight: "700", marginBottom: "8px", color: "var(--text-main)"}}>Connect your Miden wallet</h3>
            <p style={{color: "var(--text-muted)", fontSize: "14px", marginBottom: "24px", lineHeight: "1.6"}}>
              Connect your Miden extension wallet to access your private dashboard.
            </p>
            <button
              onClick={handleConnect}
              disabled={connecting}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition"
              style={{background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff", boxShadow: "0 0 30px rgba(255,107,0,0.3)"}}
            >
              {connecting ? "Connecting..." : "Connect Miden Wallet"}
            </button>
            {wallets.length === 0 && (
              <p className="mt-6 text-xs" style={{color: "var(--text-muted)", opacity: 0.5}}>
                No Miden wallet detected. Please install the Miden extension.
              </p>
            )}
            {wallets.length > 0 && (
              <p className="mt-6 text-xs" style={{color: "#FF6B00", opacity: 0.7}}>
                ✓ Miden wallet detected
              </p>
            )}
          </div>
        ) : (
          <>
            <div className="rounded-2xl p-8 relative overflow-hidden" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{background: "#FF6B00"}}></div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs uppercase tracking-widest" style={{color: "var(--text-muted)", opacity: 0.5}}>Private balance</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{boxShadow: "0 0 6px #4ade80"}}></div>
                  <span className="text-xs font-medium" style={{color: "#FF6B00"}}>@{userHandle}</span>
                </div>
              </div>
              <h2 style={{fontSize: "48px", fontWeight: "800", letterSpacing: "-2px", color: "var(--text-main)"}}>${balance}</h2>
              <p className="text-xs mt-3" style={{color: "var(--text-muted)", opacity: 0.3}}>Only you can see this</p>
              {wallet && (
                <div className="mt-4 px-3 py-2 rounded-lg inline-block" style={{background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.1)"}}>
                  <p className="text-xs" style={{color: "#FF6B00", fontFamily: "monospace"}}>
                    ✓ Miden wallet connected
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setActiveTab(activeTab === "send" ? null : "send")}
                className="py-4 rounded-xl font-semibold text-sm transition"
                style={{
                  background: activeTab === "send" ? "linear-gradient(135deg, #FF6B00, #FF8C00)" : "var(--bg-card)",
                  color: activeTab === "send" ? "#fff" : "var(--text-muted)",
                  border: activeTab === "send" ? "1px solid #FF6B00" : "1px solid rgba(128,128,128,0.1)"
                }}
              >
                ↑ Send
              </button>
              <button
                onClick={() => setActiveTab(activeTab === "receive" ? null : "receive")}
                className="py-4 rounded-xl font-semibold text-sm transition"
                style={{
                  background: activeTab === "receive" ? "linear-gradient(135deg, #FF6B00, #FF8C00)" : "var(--bg-card)",
                  color: activeTab === "receive" ? "#fff" : "var(--text-muted)",
                  border: activeTab === "receive" ? "1px solid #FF6B00" : "1px solid rgba(128,128,128,0.1)"
                }}
              >
                ↓ Receive
              </button>
            </div>

            {activeTab === "send" && (
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
                <p className="text-xs uppercase tracking-widest" style={{color: "#FF6B00"}}>Send privately</p>
                <div className="flex items-center rounded-xl px-4 py-3 gap-2" style={{background: "var(--bg-main)", border: "1px solid rgba(128,128,128,0.15)"}}>
                  <span style={{color: "#FF6B00"}}>@</span>
                  <input
                    type="text"
                    placeholder="recipient handle"
                    value={sendHandle}
                    onChange={(e) => setSendHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                    className="bg-transparent outline-none flex-1 placeholder:text-zinc-600 text-sm"
                    style={{color: "var(--text-main)"}}
                  />
                </div>
                <div className="flex items-center rounded-xl px-4 py-3 gap-2" style={{background: "var(--bg-main)", border: "1px solid rgba(128,128,128,0.15)"}}>
                  <span className="text-sm" style={{color: "#FF6B00"}}>$</span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={sendAmount}
                    onChange={(e) => setSendAmount(e.target.value)}
                    className="bg-transparent outline-none flex-1 placeholder:text-zinc-600 text-sm"
                    style={{color: "var(--text-main)"}}
                  />
                </div>
                <button
                  disabled={!sendHandle || !sendAmount}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold transition"
                  style={{
                    background: sendHandle && sendAmount ? "linear-gradient(135deg, #FF6B00, #FF8C00)" : "rgba(128,128,128,0.1)",
                    color: sendHandle && sendAmount ? "#fff" : "var(--text-muted)",
                    cursor: sendHandle && sendAmount ? "pointer" : "not-allowed"
                  }}
                >
                  Send to @{sendHandle || "handle"} →
                </button>
              </div>
            )}

            {activeTab === "receive" && (
              <div className="rounded-2xl p-6 flex flex-col gap-4" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
                <p className="text-xs uppercase tracking-widest" style={{color: "#FF6B00"}}>Receive</p>
                <div className="rounded-xl px-5 py-6 text-center" style={{background: "var(--bg-main)", border: "1px solid rgba(128,128,128,0.15)"}}>
                  <p className="text-xs mb-2" style={{color: "var(--text-muted)", opacity: 0.5}}>Your handle</p>
                  <p style={{fontSize: "28px", fontWeight: "800", color: "#FF6B00"}}>@{userHandle}</p>
                </div>
                <p className="text-xs text-center" style={{color: "var(--text-muted)", opacity: 0.5}}>
                  Share your handle. They send — you receive privately.
                </p>
                <button
                  onClick={() => navigator.clipboard.writeText(`@${userHandle}`)}
                  className="w-full py-3.5 rounded-xl text-sm font-semibold"
                  style={{background: "rgba(128,128,128,0.08)", color: "var(--text-main)", border: "1px solid rgba(128,128,128,0.15)"}}
                >
                  Copy @{userHandle}
                </button>
              </div>
            )}

            <div className="rounded-2xl p-6" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
              <p className="text-xs uppercase tracking-widest mb-6" style={{color: "var(--text-muted)", opacity: 0.4}}>Activity</p>
              <div className="flex flex-col items-center justify-center py-8 gap-3">
                <div className="w-10 h-10 rounded-xl border flex items-center justify-center" style={{borderColor: "rgba(128,128,128,0.15)", color: "#FF6B00"}}>◎</div>
                <p className="text-sm" style={{color: "var(--text-muted)"}}>No transactions yet</p>
                <p className="text-xs" style={{color: "var(--text-muted)", opacity: 0.3}}>Your history is private and stored locally</p>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
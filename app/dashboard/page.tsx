"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"send" | "receive" | null>(null);
  const [sendHandle, setSendHandle] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  return (
    <main className="min-h-screen text-white flex flex-col" style={{background: "#080808"}}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{borderColor: "#1a1a1a"}}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm" style={{background: "linear-gradient(135deg, #FF6B00, #FF9A00)"}}></div>
          <Link href="/" className="text-lg font-bold tracking-tight">shado</Link>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm" style={{color: "#555"}}>@tunde</span>
        </div>
      </nav>

      <div className="max-w-lg mx-auto w-full px-6 py-12 flex flex-col gap-4">

        <div className="rounded-2xl p-8 border relative overflow-hidden" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none" style={{background: "#FF6B00"}}></div>
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: "#444"}}>Private balance</p>
          <h2 className="text-5xl font-bold tracking-tighter mb-1">$0.00</h2>
          <p className="text-xs mt-3" style={{color: "#333"}}>Only you can see this</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setActiveTab(activeTab === "send" ? null : "send")}
            className="py-4 rounded-xl font-semibold text-sm transition"
            style={{background: activeTab === "send" ? "#FF6B00" : "#0d0d0d", color: activeTab === "send" ? "#fff" : "#666", border: activeTab === "send" ? "1px solid #FF6B00" : "1px solid #1a1a1a"}}
          >
            ↑ Send
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "receive" ? null : "receive")}
            className="py-4 rounded-xl font-semibold text-sm transition"
            style={{background: activeTab === "receive" ? "#FF6B00" : "#0d0d0d", color: activeTab === "receive" ? "#fff" : "#666", border: activeTab === "receive" ? "1px solid #FF6B00" : "1px solid #1a1a1a"}}
          >
            ↓ Receive
          </button>
        </div>

        {activeTab === "send" && (
          <div className="rounded-2xl p-6 border flex flex-col gap-4" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
            <p className="text-xs uppercase tracking-widest" style={{color: "#FF6B00"}}>Send privately</p>
            <div className="flex items-center rounded-xl px-4 py-3 gap-2 border" style={{background: "#080808", borderColor: "#222"}}>
              <span style={{color: "#FF6B00"}}>@</span>
              <input
                type="text"
                placeholder="recipient handle"
                value={sendHandle}
                onChange={(e) => setSendHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-700 text-sm"
              />
            </div>
            <div className="flex items-center rounded-xl px-4 py-3 gap-2 border" style={{background: "#080808", borderColor: "#222"}}>
              <span className="text-sm" style={{color: "#FF6B00"}}>$</span>
              <input
                type="number"
                placeholder="0.00"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-700 text-sm"
              />
            </div>
            <button
              disabled={!sendHandle || !sendAmount}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition"
              style={{background: sendHandle && sendAmount ? "#FF6B00" : "#111", color: sendHandle && sendAmount ? "#fff" : "#333", cursor: sendHandle && sendAmount ? "pointer" : "not-allowed"}}
            >
              Send to @{sendHandle || "handle"} →
            </button>
          </div>
        )}

        {activeTab === "receive" && (
          <div className="rounded-2xl p-6 border flex flex-col gap-4" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
            <p className="text-xs uppercase tracking-widest" style={{color: "#FF6B00"}}>Receive</p>
            <div className="rounded-xl px-5 py-6 text-center border" style={{background: "#080808", borderColor: "#222"}}>
              <p className="text-xs mb-2" style={{color: "#444"}}>Your handle</p>
              <p className="text-3xl font-bold tracking-tighter" style={{color: "#FF6B00"}}>@tunde</p>
            </div>
            <p className="text-xs text-center" style={{color: "#444"}}>Share your handle. They send — you receive privately.</p>
            <button
              onClick={() => navigator.clipboard.writeText("@tunde")}
              className="w-full py-3.5 rounded-xl text-sm font-semibold transition"
              style={{background: "#111", color: "#fff", border: "1px solid #222"}}
            >
              Copy @handle
            </button>
          </div>
        )}

        <div className="rounded-2xl p-6 border" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
          <p className="text-xs uppercase tracking-widest mb-6" style={{color: "#333"}}>Activity</p>
          <div className="flex flex-col items-center justify-center py-8 gap-3">
            <div className="w-10 h-10 rounded-xl border flex items-center justify-center" style={{borderColor: "#1a1a1a", color: "#FF6B00"}}>◎</div>
            <p className="text-sm" style={{color: "#444"}}>No transactions yet</p>
            <p className="text-xs" style={{color: "#2a2a2a"}}>Your history is private and stored locally</p>
          </div>
        </div>

      </div>
    </main>
  );
}
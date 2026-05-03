"use client";
import { useState } from "react";
import Link from "next/link";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"send" | "receive" | null>(null);
  const [sendHandle, setSendHandle] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  return (
    <main className="min-h-screen bg-black text-white flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-900">
        <Link href="/" className="text-xl font-bold tracking-tighter">shado</Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-zinc-400">@tunde</span>
        </div>
      </nav>

      <div className="max-w-lg mx-auto w-full px-6 py-12 flex flex-col gap-6">

        {/* Balance Card */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-8 text-center">
          <p className="text-zinc-600 text-xs uppercase tracking-widest mb-3">Private balance</p>
          <h2 className="text-5xl font-bold tracking-tighter mb-1">$0.00</h2>
          <p className="text-zinc-600 text-xs mt-2">Only you can see this</p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => setActiveTab(activeTab === "send" ? null : "send")}
            className={`py-4 rounded-2xl font-medium text-sm transition ${
              activeTab === "send"
                ? "bg-white text-black"
                : "bg-zinc-950 border border-zinc-900 text-white hover:border-zinc-700"
            }`}
          >
            ↑ Send
          </button>
          <button
            onClick={() => setActiveTab(activeTab === "receive" ? null : "receive")}
            className={`py-4 rounded-2xl font-medium text-sm transition ${
              activeTab === "receive"
                ? "bg-white text-black"
                : "bg-zinc-950 border border-zinc-900 text-white hover:border-zinc-700"
            }`}
          >
            ↓ Receive
          </button>
        </div>

        {/* Send Panel */}
        {activeTab === "send" && (
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-zinc-400 uppercase tracking-widest">Send privately</h3>
            <div className="flex items-center bg-black border border-zinc-800 rounded-2xl px-4 py-3 gap-2">
              <span className="text-zinc-600">@</span>
              <input
                type="text"
                placeholder="recipient handle"
                value={sendHandle}
                onChange={(e) => setSendHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
                className="bg-transparent outline-none flex-1 text-white placeholder:text-zinc-700 text-sm"
              />
            </div>
            <div className="flex items-center bg-black border border-zinc-800 rounded-2xl px-4 py-3 gap-2">
              <span className="text-zinc-600 text-sm">$</span>
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
              className={`w-full py-3 rounded-2xl text-sm font-medium transition ${
                sendHandle && sendAmount
                  ? "bg-white text-black hover:bg-zinc-200"
                  : "bg-zinc-900 text-zinc-600 cursor-not-allowed"
              }`}
            >
              Send to @{sendHandle || "handle"}
            </button>
          </div>
        )}

        {/* Receive Panel */}
        {activeTab === "receive" && (
          <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6 flex flex-col gap-4">
            <h3 className="font-semibold text-sm text-zinc-400 uppercase tracking-widest">Receive</h3>
            <div className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 text-center">
              <p className="text-zinc-600 text-xs mb-2">Your handle</p>
              <p className="text-2xl font-bold tracking-tighter">@tunde</p>
            </div>
            <p className="text-zinc-600 text-xs text-center">
              Share your handle with anyone. They send — you receive privately.
            </p>
            <button
              onClick={() => navigator.clipboard.writeText("@tunde")}
              className="w-full py-3 rounded-2xl text-sm font-medium bg-zinc-900 text-white hover:bg-zinc-800 transition"
            >
              Copy @handle
            </button>
          </div>
        )}

        {/* Activity */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-3xl p-6">
          <h3 className="font-semibold text-sm text-zinc-600 uppercase tracking-widest mb-6">Activity</h3>
          <div className="flex flex-col items-center justify-center py-8 gap-2">
            <div className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-700">◎</div>
            <p className="text-zinc-600 text-sm">No transactions yet</p>
            <p className="text-zinc-800 text-xs">Your history is private and stored locally</p>
          </div>
        </div>

      </div>
    </main>
  );
}
import Link from "next/link";

export default function Privacy() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden" style={{background: "#050505"}}>
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)`,
        backgroundSize: "64px 64px"
      }}/>

      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4" style={{
        background: "rgba(5,5,5,0.8)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)"
      }}>
        <Link href="/" className="flex items-center gap-2.5">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
            <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
          </svg>
          <span className="font-bold tracking-tight" style={{fontSize: "18px"}}>shado</span>
        </Link>
        <Link href="/register" className="text-sm font-semibold px-5 py-2.5 rounded-xl" style={{
          background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff",
          boxShadow: "0 0 20px rgba(255,107,0,0.25)"
        }}>Get started</Link>
      </nav>

      <section className="pt-40 pb-32 px-8 max-w-4xl mx-auto">
        <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px"}}>PRIVACY</p>
        <h1 style={{fontSize: "56px", fontWeight: "800", letterSpacing: "-2px", marginBottom: "16px"}}>
          What stays private.<br/>Always.
        </h1>
        <p style={{color: "#444", fontSize: "18px", lineHeight: "1.7", marginBottom: "80px", maxWidth: "560px"}}>
          Shado is built on Miden's ZK rollup. Privacy isn't a feature — it's the foundation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            {title: "Your balance", desc: "Stored privately on your device. No one — not even the Miden node — can read your balance."},
            {title: "Transaction amounts", desc: "Every amount is hidden inside a ZK proof. Only a cryptographic commitment goes on-chain."},
            {title: "Sender identity", desc: "When you send, your identity is never exposed to the recipient or the network."},
            {title: "Receiver identity", desc: "Receiving a payment doesn't reveal your wallet address or any on-chain footprint."},
            {title: "Transaction history", desc: "No blockchain explorer can trace your history. It lives locally on your device only."},
            {title: "Your real identity", desc: "Shado never asks for KYC, email, or any personal information. Zero data collected."},
          ].map((item) => (
            <div key={item.title} className="rounded-2xl p-6" style={{
              background: "rgba(13,13,13,0.6)",
              border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                  background: "rgba(255,107,0,0.1)",
                  border: "1px solid rgba(255,107,0,0.15)"
                }}>
                  <span style={{color: "#FF6B00", fontSize: "10px"}}>✓</span>
                </div>
                <h3 style={{fontSize: "15px", fontWeight: "700"}}>{item.title}</h3>
              </div>
              <p style={{color: "#444", fontSize: "14px", lineHeight: "1.7"}}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl p-10 relative overflow-hidden" style={{
          background: "rgba(13,13,13,0.6)",
          border: "1px solid rgba(255,107,0,0.1)"
        }}>
          <div className="absolute top-0 right-0 pointer-events-none" style={{
            width: "300px", height: "300px",
            background: "radial-gradient(ellipse at top right, rgba(255,107,0,0.06) 0%, transparent 70%)"
          }}/>
          <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px"}}>THE TECH</p>
          <h2 style={{fontSize: "28px", fontWeight: "800", letterSpacing: "-1px", marginBottom: "16px"}}>
            Powered by Miden ZK rollup
          </h2>
          <p style={{color: "#444", fontSize: "15px", lineHeight: "1.8", maxWidth: "560px"}}>
            Miden uses client-side proving — your device generates ZK proofs locally before anything is sent to the network. The rollup node only ever sees cryptographic commitments, never your actual data. This is privacy at the protocol level, not a patch on top.
          </p>
        </div>
      </section>

      <footer className="px-8 py-10 border-t" style={{borderColor: "rgba(255,255,255,0.04)"}}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
            </svg>
            <span style={{color: "#333", fontSize: "13px"}}>shado</span>
          </Link>
          <p style={{color: "#222", fontSize: "12px"}}>Built on Miden · Private by default</p>
        </div>
      </footer>
    </main>
  );
}
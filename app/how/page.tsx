import Link from "next/link";

export default function HowItWorks() {
  return (
    <main className="min-h-screen overflow-x-hidden" style={{background: "var(--bg-main)", color: "var(--text-main)"}}>
      <div className="fixed inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(255,107,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.03) 1px, transparent 1px)`,
        backgroundSize: "64px 64px"
      }}/>

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
        <Link href="/register" className="text-sm font-semibold px-5 py-2.5 rounded-xl" style={{
          background: "linear-gradient(135deg, #FF6B00, #FF8C00)", color: "#fff", boxShadow: "0 0 20px rgba(255,107,0,0.25)"
        }}>Get started</Link>
      </nav>

      <section className="pt-40 pb-32 px-8 max-w-4xl mx-auto">
        <p style={{color: "#FF6B00", fontSize: "11px", letterSpacing: "3px", marginBottom: "16px"}}>HOW IT WORKS</p>
        <h1 style={{fontSize: "56px", fontWeight: "800", letterSpacing: "-2px", marginBottom: "16px", color: "var(--text-main)"}}>Private by design</h1>
        <p style={{color: "var(--text-muted)", fontSize: "18px", lineHeight: "1.7", marginBottom: "80px", maxWidth: "560px"}}>
          Every layer of Shado is built to ensure zero exposure. Here's exactly how it works.
        </p>

        <div className="flex flex-col gap-4">
          {[
            {num: "01", title: "Claim a handle", desc: "Pick a @handle — that's your identity on Shado. It maps to your Miden account ID on-chain. Your handle can be public so people can find you, but everything behind it stays completely private.", detail: "Username Registry smart contract maps @handle → Miden Account ID"},
            {num: "02", title: "Connect your Miden wallet", desc: "Shado connects to your Miden wallet. Your wallet lives on your device — no custodian, no third party holds your keys. You are always in full control.", detail: "Client-side key management via Miden SDK"},
            {num: "03", title: "Send privately", desc: "When you send to @handle, a private note is created on your device. A ZK proof is generated locally — proving the transaction is valid without revealing any details. Only a hash goes on-chain.", detail: "Private UTXO notes + client-side ZK proof generation"},
            {num: "04", title: "Receive and consume", desc: "The recipient sees an incoming note. They consume it locally, generating another proof. Their balance updates — privately. No one else sees the amount, sender, or receiver.", detail: "Note consumption with recipient-enforced scripts"},
            {num: "05", title: "Nothing on-chain reveals anything", desc: "The Miden node validates proofs and finalizes transactions. It only sees cryptographic commitments — hashes. Your balance, history, and counterparties are invisible to everyone including the node.", detail: "Miden rollup node — verifies proofs, stores commitments only"},
          ].map((s) => (
            <div key={s.num} className="rounded-2xl p-8 flex gap-8" style={{background: "var(--bg-card)", border: "1px solid rgba(128,128,128,0.1)"}}>
              <div className="flex-shrink-0">
                <span style={{color: "#FF6B00", fontSize: "13px", fontWeight: "700", letterSpacing: "2px"}}>{s.num}</span>
              </div>
              <div>
                <h3 style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", marginBottom: "10px", color: "var(--text-main)"}}>{s.title}</h3>
                <p style={{color: "var(--text-muted)", fontSize: "15px", lineHeight: "1.8", marginBottom: "16px"}}>{s.desc}</p>
                <div className="inline-flex px-3 py-1.5 rounded-lg" style={{background: "rgba(255,107,0,0.06)", border: "1px solid rgba(255,107,0,0.1)"}}>
                  <span style={{color: "#FF6B00", fontSize: "11px", fontFamily: "monospace"}}>{s.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-8 py-10 border-t" style={{borderColor: "rgba(128,128,128,0.1)"}}>
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 28 28" fill="none">
              <polygon points="14,2 26,9 26,21 14,28 2,21 2,9" fill="none" stroke="#FF6B00" strokeWidth="1.5"/>
              <circle cx="14" cy="15" r="4" fill="#FF6B00"/>
            </svg>
            <span style={{color: "var(--text-muted)", fontSize: "13px"}}>shado</span>
          </Link>
          <p style={{color: "var(--text-muted)", fontSize: "12px", opacity: 0.4}}>Built on Miden · Private by default</p>
        </div>
      </footer>
    </main>
  );
}
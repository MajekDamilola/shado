import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen text-white" style={{background: "#080808"}}>
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{borderColor: "#1a1a1a"}}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-sm" style={{background: "linear-gradient(135deg, #FF6B00, #FF9A00)"}}></div>
          <span className="text-lg font-bold tracking-tight">shado</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#how" className="text-sm" style={{color: "#666"}}>How it works</Link>
          <Link href="/dashboard" className="text-sm" style={{color: "#666"}}>Dashboard</Link>
          <Link href="/register" className="text-sm font-medium px-4 py-2 rounded-lg" style={{background: "#FF6B00", color: "#fff"}}>
            Get started
          </Link>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none" style={{background: "#FF6B00"}}></div>
        <div className="inline-flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full mb-8 border" style={{background: "#111", borderColor: "#222", color: "#FF6B00"}}>
          <div className="w-1.5 h-1.5 rounded-full" style={{background: "#FF6B00"}}></div>
          Built on Miden · Private by default
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          Send crypto.<br />
          <span style={{color: "#FF6B00"}}>Stay invisible.</span>
        </h1>
        <p className="text-lg max-w-lg mb-10 leading-relaxed" style={{color: "#888"}}>
          Shado lets you send and receive crypto using just a @handle.
          No wallet addresses. No transaction history. No trace.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/register" className="px-8 py-3.5 rounded-xl font-semibold text-sm" style={{background: "#FF6B00", color: "#fff"}}>
            Claim your handle →
          </Link>
          <Link href="#how" className="px-8 py-3.5 rounded-xl text-sm font-medium border" style={{border: "1px solid #222", color: "#888"}}>
            How it works
          </Link>
        </div>

        <div className="mt-20 w-full max-w-md mx-auto rounded-2xl border p-6" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs uppercase tracking-widest" style={{color: "#444"}}>Private balance</span>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              <span className="text-xs" style={{color: "#444"}}>@tunde</span>
            </div>
          </div>
          <div className="text-4xl font-bold tracking-tighter mb-6">$0.00</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="py-3 rounded-xl text-center text-sm font-medium" style={{background: "#FF6B00", color: "#fff"}}>↑ Send</div>
            <div className="py-3 rounded-xl text-center text-sm font-medium border" style={{borderColor: "#222", color: "#666"}}>↓ Receive</div>
          </div>
        </div>
      </section>

      <section id="how" className="px-8 py-24 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest mb-3" style={{color: "#FF6B00"}}>How it works</p>
          <h2 className="text-4xl font-bold tracking-tighter">Private by design</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { num: "01", title: "Send to a handle", desc: "No more copying wallet addresses. Just type @handle and send." },
            { num: "02", title: "Zero knowledge proofs", desc: "Every transaction proved on your device. Only a hash goes on-chain." },
            { num: "03", title: "Your history is yours", desc: "No app or explorer can link transactions back to you. Ever." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl p-6 border" style={{background: "#0d0d0d", borderColor: "#1a1a1a"}}>
              <div className="text-xs font-bold mb-4" style={{color: "#FF6B00"}}>{f.num}</div>
              <h3 className="font-semibold mb-2 text-base">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{color: "#555"}}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center px-6 py-24 border-t" style={{borderColor: "#1a1a1a"}}>
        <p className="text-xs uppercase tracking-widest mb-4" style={{color: "#FF6B00"}}>Get started</p>
        <h2 className="text-5xl font-bold tracking-tighter mb-4">Ready to go dark?</h2>
        <p className="mb-10 text-sm" style={{color: "#555"}}>Claim your handle and start sending privately.</p>
        <Link href="/register" className="px-10 py-4 rounded-xl font-semibold text-sm" style={{background: "#FF6B00", color: "#fff"}}>
          Claim @handle →
        </Link>
      </section>

      <footer className="text-center py-8 text-xs border-t" style={{borderColor: "#1a1a1a", color: "#333"}}>
        shado · built on Miden · private by default
      </footer>
    </main>
  );
}
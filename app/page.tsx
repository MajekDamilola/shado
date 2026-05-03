import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-zinc-900">
        <span className="text-xl font-bold tracking-tighter">shado</span>
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-sm text-zinc-400 hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/register" className="text-sm bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition">
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <div className="inline-block text-xs font-medium bg-zinc-900 text-zinc-400 px-4 py-1.5 rounded-full mb-8 border border-zinc-800">
          Built on Miden · Private by default
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-none">
          Send crypto.<br />
          <span className="text-zinc-500">Stay invisible.</span>
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mb-10">
          Shado lets you send and receive crypto using just a @handle.
          No wallet addresses. No transaction history. No trace.
        </p>
        <div className="flex items-center gap-4">
          <Link href="/register" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
            Claim your handle
          </Link>
          <Link href="#how" className="px-6 py-3 text-zinc-400 hover:text-white transition text-sm">
            How it works →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="how" className="px-8 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center">
          Private by design
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "◎",
              title: "Send to a handle",
              desc: "No more copying wallet addresses. Just type @handle and send. Clean and simple.",
            },
            {
              icon: "⬡",
              title: "Zero knowledge proofs",
              desc: "Every transaction is proved on your device. Only a hash goes on-chain. No one sees your amounts.",
            },
            {
              icon: "◈",
              title: "Your history is yours",
              desc: "No app, no server, no blockchain explorer can link transactions back to you.",
            },
          ].map((f) => (
            <div key={f.title} className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 hover:border-zinc-700 transition">
              <div className="text-2xl mb-4 text-zinc-500">{f.icon}</div>
              <h3 className="font-semibold mb-2">{f.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-24 border-t border-zinc-900">
        <h2 className="text-4xl font-bold tracking-tighter mb-4">
          Ready to go dark?
        </h2>
        <p className="text-zinc-500 mb-8 text-sm">Claim your handle and start sending privately.</p>
        <Link href="/register" className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-zinc-200 transition">
          Claim @handle
        </Link>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-700 text-xs border-t border-zinc-900">
        shado · built on Miden · private by default
      </footer>

    </main>
  );
}
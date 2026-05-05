"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    if (dark) {
      document.documentElement.style.setProperty("--bg-main", "#050505");
      document.documentElement.style.setProperty("--bg-card", "#0d0d0d");
      document.documentElement.style.setProperty("--text-main", "#ffffff");
      document.documentElement.style.setProperty("--text-muted", "#555");
      document.documentElement.style.setProperty("--border-main", "rgba(255,255,255,0.05)");
      document.documentElement.style.setProperty("--nav-bg", "rgba(5,5,5,0.8)");
    } else {
      document.documentElement.style.setProperty("--bg-main", "#f8f8f8");
      document.documentElement.style.setProperty("--bg-card", "#ffffff");
      document.documentElement.style.setProperty("--text-main", "#0a0a0a");
      document.documentElement.style.setProperty("--text-muted", "#666");
      document.documentElement.style.setProperty("--border-main", "rgba(0,0,0,0.08)");
      document.documentElement.style.setProperty("--nav-bg", "rgba(248,248,248,0.8)");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)"
      }}
      title="Toggle theme"
    >
      <span style={{fontSize: "14px"}}>{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
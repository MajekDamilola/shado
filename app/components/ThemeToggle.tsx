"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  const applyTheme = (isDark: boolean) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--bg-main", "#050505");
      root.style.setProperty("--bg-card", "#0d0d0d");
      root.style.setProperty("--text-main", "#ffffff");
      root.style.setProperty("--text-muted", "#555555");
      root.style.setProperty("--border-main", "rgba(255,255,255,0.05)");
      root.style.setProperty("--nav-bg", "rgba(5,5,5,0.85)");
      document.body.style.background = "#050505";
      document.body.style.color = "#ffffff";
    } else {
      root.style.setProperty("--bg-main", "#f5f5f5");
      root.style.setProperty("--bg-card", "#ffffff");
      root.style.setProperty("--text-main", "#0a0a0a");
      root.style.setProperty("--text-muted", "#666666");
      root.style.setProperty("--border-main", "rgba(0,0,0,0.06)");
      root.style.setProperty("--nav-bg", "rgba(245,245,245,0.85)");
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#0a0a0a";
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem("shado-theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    applyTheme(isDark);
  }, []);

  const toggle = () => {
    const newDark = !dark;
    setDark(newDark);
    localStorage.setItem("shado-theme", newDark ? "dark" : "light");
    applyTheme(newDark);
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200"
      style={{
        background: "rgba(128,128,128,0.1)",
        border: "1px solid rgba(128,128,128,0.15)"
      }}
      title="Toggle theme"
    >
      <span style={{fontSize: "14px"}}>{dark ? "☀️" : "🌙"}</span>
    </button>
  );
}
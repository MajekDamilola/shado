"use client";
import { useEffect } from "react";

export default function ThemeInit() {
  useEffect(() => {
    const saved = localStorage.getItem("shado-theme");
    const isDark = saved ? saved === "dark" : true;
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--bg-main", "#050505");
      root.style.setProperty("--bg-card", "#0d0d0d");
      root.style.setProperty("--text-main", "#ffffff");
      root.style.setProperty("--text-muted", "#555555");
      root.style.setProperty("--nav-bg", "rgba(5,5,5,0.85)");
      document.body.style.background = "#050505";
      document.body.style.color = "#ffffff";
    } else {
      root.style.setProperty("--bg-main", "#f5f5f5");
      root.style.setProperty("--bg-card", "#ffffff");
      root.style.setProperty("--text-main", "#0a0a0a");
      root.style.setProperty("--text-muted", "#666666");
      root.style.setProperty("--nav-bg", "rgba(245,245,245,0.85)");
      document.body.style.background = "#f5f5f5";
      document.body.style.color = "#0a0a0a";
    }
  }, []);

  return null;
}
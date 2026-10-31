"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "all 0.3s",
        background: scrolled ? "rgba(10,10,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <span
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 16,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
        }}
      >
        rodrigo<span style={{ color: "var(--accent)" }}>.</span>dev
      </span>

      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {[
          { href: "#sobre", label: "sobre" },
          { href: "#apis", label: "apis" },
          { href: "#stack", label: "stack" },
          { href: "#contato", label: "contato" },
        ].map((link) => (
          <a key={link.href} href={link.href} className="nav-link">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

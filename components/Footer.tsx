export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: 900,
        margin: "0 auto",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "var(--text-muted)",
        }}
      >
        rodrigo<span style={{ color: "var(--accent)" }}>.</span>dev — {new Date().getFullYear()}
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 12,
          color: "var(--text-muted)",
        }}
      >
        built with next.js · hosted on bare metal
      </span>
    </footer>
  );
}

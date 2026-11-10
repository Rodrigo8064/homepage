export default function Footer() {
  return (
    <footer className="footer">
      <span>
        rodrigo<span style={{ color: "var(--accent)" }}>.</span>dev —{" "}
        {new Date().getFullYear()}
      </span>
      <span>built with next.js · hosted on bare metal</span>
    </footer>
  );
}

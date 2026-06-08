export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 24px",
        maxWidth: 900,
        margin: "0 auto",
      }}
    >
      <div className="animate-fade-in-up delay-100">
        <div className="available-badge" style={{ marginBottom: 32 }}>
          disponível para oportunidades
        </div>
      </div>

      <div className="animate-fade-in-up delay-200">
        <h1
          style={{
            fontSize: "clamp(48px, 8vw, 88px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          Rodrigo
          <br />
          <span style={{ color: "var(--text-secondary)" }}>Lima</span>
          <span style={{ color: "var(--accent)" }}>.</span>
        </h1>
      </div>

      <div className="animate-fade-in-up delay-300">
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 560,
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          Desenvolvedor backend Python. Construo APIs REST com{" "}
          <span style={{ color: "var(--text-primary)" }}>FastAPI</span> e{" "}
          <span style={{ color: "var(--text-primary)" }}>Django-Ninja</span>,
          dados em{" "}
          <span style={{ color: "var(--text-primary)" }}>PostgreSQL</span>,
          tudo containerizado com{" "}
          <span style={{ color: "var(--text-primary)" }}>Docker</span>.
        </p>
      </div>

      <div
        className="animate-fade-in-up delay-400"
        style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
      >
        <a href="#apis" className="btn-primary">
          Ver projetos
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
        <a href="#contato" className="btn-ghost">
          Entrar em contato
        </a>
      </div>

      <div
        className="animate-fade-in-up delay-500"
        style={{
          display: "flex",
          gap: 24,
          marginTop: 64,
          paddingTop: 32,
          borderTop: "1px solid var(--border)",
        }}
      >
        {[
          { value: "3+", label: "APIs em produção" },
          { value: "2+", label: "anos estudando backend" },
          { value: "USP", label: "Ciências da Informação" },
        ].map((stat) => (
          <div key={stat.label}>
            <div
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 2 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

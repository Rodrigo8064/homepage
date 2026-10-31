export default function About() {
  return (
    <section
      id="sobre"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <div className="section-label">// sobre mim</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              marginBottom: 20,
              lineHeight: 1.15,
            }}
          >
            Código limpo,
            <br />
            <span style={{ color: "var(--accent)" }}>APIs que funcionam.</span>
          </h2>

          <p style={{ color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.7 }}>
            Tenho 33 anos, sou formado em{" "}
            <span style={{ color: "var(--text-primary)" }}>
              Ciências da Informação e da Documentação pela USP/Ribeirão Preto
            </span>{" "}
            e atualmente curso{" "}
            <span style={{ color: "var(--text-primary)" }}>
              Engenharia de Software na PUCMinas
            </span>.
          </p>

          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Apaixonado por tecnologia, séries e livros. Acredito que boas APIs
            são como bons livros: precisas, bem estruturadas e fáceis de entender.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>
              formação acadêmica
            </div>
            <div style={{ fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>
              Engenharia de Software
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              PUCMinas · em andamento
            </div>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>
              formação acadêmica
            </div>
            <div style={{ fontSize: 14, color: "var(--text-primary)", marginBottom: 4 }}>
              Ciências da Informação e da Documentação
            </div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)" }}>
              USP · Ribeirão Preto · concluído
            </div>
          </div>

          <div
            style={{
              background: "var(--accent-dim)",
              border: "1px solid rgba(108,99,255,0.2)",
              borderRadius: 12,
              padding: "16px 20px",
            }}
          >
            <div style={{ fontSize: 12, color: "var(--accent)", fontFamily: "'DM Mono', monospace", marginBottom: 8 }}>
              foco atual
            </div>
            <div style={{ fontSize: 14, color: "var(--text-primary)" }}>
              Backend Python · APIs REST · Sistemas escaláveis
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const skills = [
  { name: "Python", icon: "🐍", level: "principal" },
  { name: "FastAPI", icon: "⚡", level: "principal" },
  { name: "Django-Ninja", icon: "🎸", level: "principal" },
  { name: "PostgreSQL", icon: "🐘", level: "principal" },
  { name: "Docker", icon: "🐳", level: "principal" },
  { name: "REST APIs", icon: "🔌", level: "principal" },
  { name: "Git / GitHub", icon: "📦", level: "principal" },
  { name: "Linux", icon: "🐧", level: "principal" },
  { name: "SQLAlchemy", icon: "🔗", level: "complementar" },
  { name: "Pydantic", icon: "✅", level: "complementar" },
  { name: "Nginx", icon: "⚙️", level: "complementar" },
  { name: "TypeScript", icon: "📘", level: "estudando" },
];

const levelStyle: Record<string, React.CSSProperties> = {
  principal: { color: "var(--text-primary)" },
  complementar: { color: "var(--text-secondary)" },
  estudando: { color: "var(--text-muted)" },
};

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="section-label">// stack</div>

      <h2 className="section-title">
        Ferramentas &{" "}
        <span style={{ color: "var(--accent)" }}>tecnologias</span>
      </h2>

      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: 40,
          fontSize: 14,
        }}
      >
        Foco em backend Python. As ferramentas principais estão em produção.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-pill"
            style={levelStyle[skill.level]}
          >
            <span style={{ fontSize: 14 }}>{skill.icon}</span>
            <span style={{ fontSize: 13 }}>{skill.name}</span>
            {skill.level === "estudando" && (
              <span
                style={{
                  fontSize: 9,
                  fontFamily: "'DM Mono', monospace",
                  color: "var(--text-muted)",
                  letterSpacing: "0.05em",
                }}
              >
                WIP
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="stack-grid">
        {[
          { label: "linguagem principal", value: "Python 3.11+" },
          { label: "frameworks", value: "FastAPI · Django-Ninja" },
          { label: "banco de dados", value: "PostgreSQL" },
          { label: "containerização", value: "Docker · Compose" },
          { label: "versionamento", value: "Git · GitHub" },
          { label: "OS do servidor", value: "Ubuntu Linux" },
        ].map((item) => (
          <div key={item.label} className="stack-item">
            <div
              style={{
                fontSize: 10,
                fontFamily: "'DM Mono', monospace",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              {item.label}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--text-primary)",
                fontWeight: 500,
              }}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

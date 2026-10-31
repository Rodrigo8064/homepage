"use client";

const projects = [
  {
    id: "wishlist",
    name: "Wishlist API",
    description:
      "API REST para gerenciamento de listas de desejos em e-commerce. Permite CRUD em usuários, qautenticação via Bearer Token,",
    tech: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    tags: ["tag-fastapi", "tag-postgres", "tag-docker"],
    endpoints: [
      { method: "GET", path: "api/favorites/" },
      { method: "POST", path: "api/favorites/" },
      { method: "PUT", path: "api/products/{product_id}" },
      { method: "DELETE", path: "api/favorite/{product_id}" },
    ],
    githubUrl: "https://github.com/Rodrigo8064/Wishlist_with_fastAPI.git",
    docsPath: "https://wishlist.rodrigoolima.com.br/docs",
    color: "#6c63ff",
  },
  {
    id: "inventory",
    name: "Car Inventory API",
    description:
      "API REST de gerenciamento de carros e usuários.",
    tech: ["FastAPI", "Python", "PostgreSQL", "Docker"],
    tags: ["tag-fastapi", "tag-postgres", "tag-docker"],
    endpoints: [
      { method: "GET", path: "api/v1/cars/" },
      { method: "GET", path: "api/v1/cars/{car_id}" },
      { method: "POST", path: "api/v1/cars/" },
      { method: "PUT", path: "api/v1/cars/{car_id}" },
      { method: "DELETE", path: "API/v1/cars/{car_id}" },
    ],
    githubUrl: "https://github.com/Rodrigo8064/car_api_pycode.git",
    docsPath: "https://inventory.rodrigoolima.com.br/docs",
    color: "#3ecf8e",
  },
  {
    id: "backoffice",
    name: "E-commerce Backoffice API",
    description:
      "API de backoffice para catalogo de e-commerce. Gestão de atributos, tipos de produtos, categorias.",
    tech: ["Django-Ninja", "Python", "PostgreSQL", "Docker"],
    tags: ["tag-django", "tag-postgres", "tag-docker"],
    endpoints: [
      { method: "GET", path: "/categories/" },
      { method: "POST", path: "/categories/{category_id}" },
      { method: "GET", path: "/attributes/" },
      { method: "PUT", path: "//attributes/{attribute_id}" },
    ],
    githubUrl: "https://github.com/Rodrigo8064/backoffice-api.git",
    docsPath: "https://backoffice.rodrigoolima.com.br/api/docs",
    color: "#f59e0b",
  },
];

const methodColors: Record<string, string> = {
  GET: "method-get",
  POST: "method-post",
  PUT: "method-put",
  DELETE: "method-delete",
};

export default function Projects() {
  return (
    <section
      id="apis"
      style={{ padding: "80px 24px", maxWidth: 900, margin: "0 auto" }}
    >
      <div className="section-label">// projetos</div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 40,
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontSize: 40,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
          }}
        >
          APIs em{" "}
          <span style={{ color: "var(--accent)" }}>produção</span>
        </h2>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: "var(--text-muted)",
          }}
        >
          clique para testar ↓
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: `linear-gradient(90deg, ${project.color}40, transparent)`,
                borderRadius: "16px 16px 0 0",
              }}
            />

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "start" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <h3
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: 20,
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "var(--text-primary)",
                    }}
                  >
                    {project.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10,
                      padding: "2px 8px",
                      borderRadius: 4,
                      background: "rgba(62,207,142,0.1)",
                      color: "#3ecf8e",
                      border: "1px solid rgba(62,207,142,0.2)",
                    }}
                  >
                    LIVE
                  </span>
                </div>

                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: 16,
                    maxWidth: 500,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`tag ${tag}`}>
                      {project.tech[i]}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {project.endpoints.map((ep, i) => (
                    <div key={i} className="endpoint-line">
                      <span className={methodColors[ep.method]} style={{ minWidth: 44, fontSize: 11, fontWeight: 500 }}>
                        {ep.method}
                      </span>
                      <span style={{ color: "var(--text-secondary)" }}>{ep.path}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 130 }}>
                <a
                  href={project.docsPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ justifyContent: "center", fontSize: 13 }}
                >
                  Testar API
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{ justifyContent: "center", fontSize: 13 }}
                >
                  GitHub
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

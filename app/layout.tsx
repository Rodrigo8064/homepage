import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodrigo Lima — Backend Developer",
  description: "Desenvolvedor backend Python especializado em APIs REST com FastAPI e Django-Ninja. Estudante de Engenharia de Software na PUCMinas.",
  keywords: ["backend developer", "python", "fastapi", "django", "API REST", "portfolio"],
  openGraph: {
    title: "Rodrigo Lima — Backend Developer",
    description: "APIs REST em produção. FastAPI, Django-Ninja, PostgreSQL, Docker.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="glow-blob" />
        <div className="content-layer">
          {children}
        </div>
      </body>
    </html>
  );
}

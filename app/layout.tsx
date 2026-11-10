import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rodrigo Lima — Backend Developer",
  description:
    "Desenvolvedor backend Python especializado em APIs REST com FastAPI e Django-Ninja. Estudante de Engenharia de Software na PUCMinas.",
  keywords: [
    "backend developer",
    "python",
    "fastapi",
    "django",
    "API REST",
    "portfolio",
  ],
  openGraph: {
    title: "Rodrigo Lima — Backend Developer",
    description:
      "APIs REST em produção. FastAPI, Django-Ninja, PostgreSQL, Docker.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#120e0b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <div className="glow-blob" aria-hidden="true" />
        <div className="content-layer">{children}</div>
      </body>
    </html>
  );
}

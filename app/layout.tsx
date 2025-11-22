import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Guide Rapport Hiérarchique | Maladies Professionnelles",
  description:
    "Guide étape par étape pour rédiger un rapport hiérarchique lié aux maladies professionnelles."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}

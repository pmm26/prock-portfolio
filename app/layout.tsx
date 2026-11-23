import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/portfolio/Header";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "400 800",
  variable: "--font-geist",
  display: "swap",
});
const title = "Pedro Roque — Full-Stack Software Engineer";
const description =
  "Selected software engineering work by Pedro Roque, spanning commerce platforms, NHS rostering, mobile applications and Linux infrastructure.";
export const metadata: Metadata = {
  metadataBase: new URL(profile.url),
  title: { default: title, template: "%s — Pedro Roque" },
  description,
  authors: [{ name: profile.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "prock.dev",
    title,
    description,
    url: "/",
    images: [
      {
        url: "/social.jpg",
        width: 1200,
        height: 630,
        alt: "Pedro Roque, full-stack software engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/social.jpg"],
  },
};
export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: profile.url,
  jobTitle: "Full-Stack Software Engineer",
  sameAs: [profile.gitlab],
  email: "mailto:" + profile.email,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>
        <a className="skip-link" href="#top">
          Skip to content
        </a>
        <Header />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  metadataBase: "https://veravino.de",
  title: {
    default: "Vera Vino",
    template: `%s | Vera Vino`,
  },
  description: "Vera Vino ist eine KI-Sommelierin, die Ihnen bei der Weinauswahl hilft.",
  robots: { index: true, follow: true },
  openGraph: {
    url: "https://veravino.de",
    title: "Vera Vino",
    description: "Vera Vino ist eine KI-Sommelierin, die Ihnen bei der Weinauswahl hilft.",
    siteName: "Vera Vino",
    type: 'website',
    locale: 'de_DE',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Vera Vino",
    description: "Vera Vino ist eine KI-Sommelierin, die Ihnen bei der Weinauswahl hilft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-cursive",
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vidian.in'),
  title: "Vidian — VLSI Services, Training & Software",
  description: "Vidian delivers silicon-to-system VLSI design services, industry-grade VLSI training, and custom software engineering — from RTL to tape-out and beyond.",
  keywords: ["VLSI Design", "Semiconductor Engineering", "RTL Design", "ASIC", "Physical Design", "DFT", "VLSI Training", "EDA Tooling", "FPGA"],
  authors: [{ name: "Vidian" }],
  openGraph: {
    title: "Vidian — VLSI Services, Training & Software",
    description: "Vidian delivers silicon-to-system VLSI design services, industry-grade VLSI training, and custom software engineering.",
    url: "https://vidian.in",
    siteName: "Vidian",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidian — VLSI Services, Training & Software",
    description: "Vidian delivers silicon-to-system VLSI design services, industry-grade VLSI training, and custom software engineering.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${pacifico.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Vidian",
              "url": "https://vidian.in",
              "logo": "https://vidian.in/icon.jpg",
              "description": "Silicon-to-system VLSI engineering services, training, and software development.",
              "sameAs": [
                "https://www.linkedin.com/company/vidian",
                "https://twitter.com/vidian"
              ],
              "offers": [
                {
                  "@type": "Service",
                  "name": "VLSI Design Services",
                  "description": "End-to-end semiconductor design from RTL to GDSII."
                },
                {
                  "@type": "Course",
                  "name": "VLSI Training Academy",
                  "description": "Industry-built programs covering RTL, Verification, DFT, and Physical Design.",
                  "provider": {
                    "@type": "Organization",
                    "name": "Vidian",
                    "sameAs": "https://vidian.in"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

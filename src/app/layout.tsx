import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Loki",
  description: "Loki is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
  keywords: ["Loki", "VCS", "Version Control", "Development", "Open Source"],
  authors: [{ name: "Loki Team" }],
  icons: {
    icon: "/Vector.svg",
  },
  openGraph: {
    title: "Loki - Modern Version Control",
    description: "Control Your Workflow with Ease - Free and open source distributed version control system",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Loki - Modern Version Control",
    description: "Control Your Workflow with Ease",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
            {children}
            <link rel="icon" href="/Vector.png" type="image/png" />
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "DRY | Don't Repeat Yourself",
  description: "Inovação sob medida, resultados impulsionados por dados.",
  openGraph: {
    title: "DRY | Don't Repeat Yourself",
    description: "Inovação sob medida, resultados impulsionados por dados.",
    type: "website",
    url: "https://www.dry.com.br",
    images: [
      {
        url: "https://www.dry.com.br/image.jpg",
        width: 800,
        height: 600,
        alt: "Imagem de exemplo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRY | Don't Repeat Yourself",
    description: "Inovação sob medida, resultados impulsionados por dados.",
    images: ["https://www.dry.com.br/image.jpg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}

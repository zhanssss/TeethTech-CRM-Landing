import type { Metadata } from "next";
import "./globals.css";

const title = "TeethTech CRM — управление зуботехнической лабораторией";
const description =
  "Заказы, производство, команда, склад, финансы и аналитика зуботехнической лаборатории в одной CRM-системе.";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  keywords: [
    "CRM для зуботехнической лаборатории",
    "управление зуботехнической лабораторией",
    "TeethTech CRM",
    "учёт заказов лаборатории",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title,
    description,
    siteName: "TeethTech CRM",
    images: [
      {
        url: "/og.png",
        width: 1740,
        height: 912,
        alt: "TeethTech CRM — лаборатория работает как система",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

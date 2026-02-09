import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#06b6d4",
};

export const metadata: Metadata = {
  title: {
    default: "Moshi Dryclean | Professional Dry Cleaning Service",
    template: "%s | Moshi Dryclean",
  },
  description:
    "Premium dry cleaning and laundry services. Fast turnaround, eco-friendly practices, and professional care for your garments.",
  keywords: [
    "dry cleaning",
    "laundry service",
    "professional cleaning",
    "garment care",
    "eco-friendly",
  ],
  authors: [
    {
      name: "Moshi Dryclean",
      url: "https://moshi-dryclean.com",
    },
  ],
  creator: "Moshi Dryclean",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moshi-dryclean.com",
    siteName: "Moshi Dryclean",
    title: "Moshi Dryclean | Professional Dry Cleaning Service",
    description:
      "Premium dry cleaning and laundry services with eco-friendly practices.",
    images: [
      {
        url: "https://moshi-dryclean.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moshi Dryclean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moshi Dryclean | Professional Dry Cleaning Service",
    description:
      "Premium dry cleaning and laundry services with eco-friendly practices.",
    images: ["https://moshi-dryclean.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://moshi-dryclean.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

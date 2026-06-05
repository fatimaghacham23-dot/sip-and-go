import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sip & Go Coffee House | Practical daytime coffee shop in Beirut",
  description: "Sip & Go Coffee House: A straightforward coffee shop focused on daytime espresso operations for local professionals, commuters, and early risers.",
  keywords: [
  "Sip and Go Coffee House Beirut",
  "Sip & Go Beirut",
  "daytime coffee Beirut",
  "espresso Beirut District"
],
  openGraph: {
    title: "Sip & Go Coffee House | Practical daytime coffee shop in Beirut",
    description: "Sip & Go Coffee House: A straightforward coffee shop focused on daytime espresso operations for local professionals, commuters, and early risers.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preload" as="image" href="/sequence/frame_001.webp" />
        <link rel="preload" as="image" href="/sequence/frame_002.webp" />
        <link rel="preload" as="image" href="/sequence/frame_003.webp" />
        <link rel="preload" as="image" href="/sequence/frame_004.webp" />
        <link rel="preload" as="image" href="/sequence/frame_005.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}

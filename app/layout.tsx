import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Find Alcohol Rehab Near You | UK Locations & Treatment Guide",
  description:
    "Find alcohol rehab near you. Explore residential treatment locations across the UK, understand whether to stay local or travel for care, and get compassionate guidance on your options.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}

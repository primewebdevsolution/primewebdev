import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimeWebDev | Web Development & Design Agency",
  description:
    "PrimeWebDev is a creative agency offering custom website development, UI/UX design, WordPress development, Shopify store setup, thumbnail design, and seamless deployment services.",
  keywords: [
    "website development",
    "UI/UX design",
    "WordPress development",
    "Shopify store development",
    "thumbnail design",
    "web deployment",
    "web design agency",
    "PrimeWebDev",
    "freelance web developer",
  ],
  icons: {
    icon: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "PrimeWebDev | Web Development & Design Agency",
    description:
      "We build responsive websites, modern UI&#47;UX designs, WordPress & Shopify stores, and provide complete deployment services. Let&rsquo;s create your digital presence.",
    url: "https://primewebdev.in",
    siteName: "PrimeWebDev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrimeWebDev Website Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

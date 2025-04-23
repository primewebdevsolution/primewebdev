import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// Lazy load ThemeProvider
const ThemeProvider = dynamic(() => import("@/components/theme-provider"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        backgroundColor: "#000319",
        color: "#FFFFFF",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.2rem",
      }}
    >
      Loading...
    </div>
  ),
});

export const metadata: Metadata = {
  title: "Prime Web Developers Web Development & Design Agency",
  description:
    "Prime Web Dev is a creative agency offering custom website development, UI/UX design, WordPress development, Shopify store setup, thumbnail design, and seamless deployment services.",
  keywords: [
    "website development",
    "UI/UX design",
    "WordPress development",
    "Shopify store development",
    "thumbnail design",
    "web deployment",
    "web design agency",
    "Prime Web Dev",
    "freelance web Developers",
    "web development services",
    "professional website design",
    "custom website development",
    "full stack web development",
    "mobile responsive websites",
    "eCommerce website development",
    "website redesign services",
    "freelance website developer",
    "modern web design",
    "WordPress expert",
    "Shopify expert",
    "UI UX designer for hire",
    "affordable web development agency",
    "hire freelance web developer India",
    "best Shopify store developers",
    "WordPress website for small business",
    "UI UX design services for startups",
    "SEO-friendly website development",
    "fast loading website design",
    "convert Figma to website",
    "deploy website on Vercel",
    "deploy website on Netlify",
    "deploy website on cPanel",
    "responsive web design",
    "custom theme development",
    "CMS website development",
    "user experience optimization",
    "conversion focused design",
    "landing page design",
    "branding and web identity",
    "performance optimization",
    "domain and hosting setup",
    "Prime Web Dev services",
    "Prime Web Dev reviews",
    "Prime Web Dev portfolio",
    "Prime Web Dev contact",
    "Prime Web Dev website",
    "Prime Web Dev India",
    "website development company in India",
    "freelance web developer near me",
    "top web design agency in Jaipur",
    "local Shopify expert India",
    "WordPress development services in India",
    "AI-integrated website development",
    "dark mode website design",
    "minimalist UI design",
    "Webflow vs WordPress 2025",
    "headless CMS development",
    "custom React website",
    "Next.js website development",
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
    title: "Prime Web Developers Web Development & Design Agency",
    description:
      "We build responsive websites, modern UI&#47;UX designs, WordPress & Shopify stores, and provide complete deployment services. Let&rsquo;s create your digital presence.",
    url: "https://primewebdev.in",
    siteName: "Prime Web Developers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prime Web Developers Website Preview",
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

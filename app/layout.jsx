import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";

// Vercel speed insights
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

// Import components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const haasGrotesk = localFont({
  src: [
    { path: "./fonts/AlteHaasGroteskRegular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/AlteHaasGroteskBold.ttf",    weight: "700", style: "normal" },
  ],
  variable: "--font-haas",
});

export const metadata = {
  title: "Atlas Racing - HWUD",
  description: "Official website of Atlas Racing, the student-led Racing Club at Heriot-Watt University, Dubai.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Atlas Racing - HWUD" />
        <meta
          property="og:description"
          content="The official website of Atlas Racing, the student-led Racing Club at Heriot-Watt University, Dubai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://atlasracing.ae/" />
        <meta property="og:image" content="/assets/photo.png" />
        <meta
          property="og:image:alt"
          content="Preview of my personal portfolio website"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aditya S - Personal Portfolio" />
        <meta
          name="twitter:description"
          content="Check out my personal portfolio showcasing my projects and skills."
        />
        <meta name="twitter:image" content="/assets/photo.png" />
        <meta
          name="twitter:image:alt"
          content="Preview of my personal portfolio website"
        />

        {/* Additional meta for SEO */}
        <meta name="author" content="Atlas Racing" />
        <meta
          name="keywords"
          content="Atlas, HWUD Racing, FS-AI, Heriot Watt Dubai, Atlas Racing, Formula Student AI"
        />
      </head>
      <body className={`${jetBrainsMono.variable} ${haasGrotesk.variable}`}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Social Tap | Meta Ads That Actually Convert",
  description: "We've generated 500,000+ leads for coaches, summits & online education. Worked with Tony Robbins, Alex Hormozi, Gabor Maté & more. Book your free strategy call.",
  keywords: "facebook ads agency, meta ads, lead generation, coaches, online summits, webinar ads",
  openGraph: {
    title: "The Social Tap | Meta Ads That Actually Convert",
    description: "500,000+ leads generated. Sub-$2 cost per lead. Book your free strategy call.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}

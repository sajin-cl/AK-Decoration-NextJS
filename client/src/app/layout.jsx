import { Geist, Geist_Mono, Bodoni_Moda } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleAnalytics } from "@next/third-parties/google"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "production"
      ? "https://ak-decoration.vercel.app"
      : "http://localhost:3000"
  ),
  title: "AK Decoration Service",
  description: `AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.`,
  keywords: [
    'event decoration in kanyakumari',
    'wedding decoration in marthandam',
    'birthday decoration kanyakumari',
    'ak decoration marthandam',
    'event decorators near me',
    'wedding stage decoration kanyakumari',
    'party decoration in nagercoil',
    'event management kanyakumari',
    'balloon decoration near me',
    'professional decorators kanyakumari',
    'birthday party organizers kanyakumari',
    'event decorators nagercoil',
    'event planning kanyakumari',
    'marwadi decoration kanyakumari',
    'floral decoration in marthandam',
    'best event decorators kanyakumari',
    'event decorators near nagercoil',
    'decoration services kanyakumari',
    'ak decoration nagercoil',
    'event decorators kanyakumari price'
  ],
  authors: [{ name: "Sajin C L" }],
  creator: "Sajin C L",
  publisher: "Sajin C L",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    apple: "/apple-touch-icon.png"
  },

  openGraph: {

    title: "AK Decoration Service | Best Event Decoration in Kanyakumari",
    description:
      "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
    url: "/",
    siteName: "AK Decoration",
    type: "website",
    images: [
      {
        url: "/preview-image.webp",
        width: 1200,
        height: 630,
        alt: "AK Decoration service",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AK Decoration Service | Best Event Decoration in Kanyakumari",
    description:
      "AK Decoration provides professional wedding, birthday, and event decoration services in Kanyakumari district and marthandam surrounding areas. Affordable, creative, and customized designs.",
    images: ["/preview-image.webp"],
  },

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col w-full overflow-x-clip">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ToastContainer
          position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick
          pauseOnHover draggable theme="light" style={{ top: "80px", }}
        />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
    </html>
  );
} 

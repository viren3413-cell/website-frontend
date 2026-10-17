import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "VM Solutions | Product Engineering & IT Consulting",
  description: "End-to-end product engineering and IT consulting for digital businesses.",
  keywords: "product engineering, IT consulting, SaaS, cloud architecture, Node.js, Next.js",
  authors: [{ name: "VM Solutions" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

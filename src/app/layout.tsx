import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "whx",
  description: "whx portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="max-w-3xl mx-auto px-5">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

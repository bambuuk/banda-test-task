import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreProvider } from "@/store/StoreProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </StoreProvider>
  );
}

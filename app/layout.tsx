import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Navbar />
        <main className="max-w-4xl mx-auto p-6 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

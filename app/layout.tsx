import "./globals.css";
import ThemeInit from "./components/ThemeInit";
import ClientProviders from "./components/ClientProviders";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeInit />
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
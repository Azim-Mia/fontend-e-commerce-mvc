import "../globals.css";
import NavbarWrapper from '@/components/NavbarWrapper'
import Footer from '@/components/Footer';

export const metadata = {
  title: "ecommerce",
  description: "Dewangonj morden fashion"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          <header className="w-auto index-full top-0 sticky">
            <NavbarWrapper />
          </header>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

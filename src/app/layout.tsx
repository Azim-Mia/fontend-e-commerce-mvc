import "./globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {CartProvider} from '../contexts/CartContext.jsx'
/*const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
*/

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
      <body className="" >
          <CartProvider>
       <header className="index-full top-0 sticky">
          <Navbar /> 
      </header>
      <main>
        {children}
        </main>
        <footer>
        <Footer />
        </footer>
        </CartProvider>
      </body>
    </html>
  );
}
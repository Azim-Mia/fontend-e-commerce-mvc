import "../globals.css";
import Navbar from '@/components/Navbar';
export const metadata = {
  title: "ecommerce",
  description: "Dewangonj morden fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p>yesdv</p>
        {children}
      </body>
    </html>
  );
}

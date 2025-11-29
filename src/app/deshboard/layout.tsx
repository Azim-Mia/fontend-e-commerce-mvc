import "../globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "ecommerce",
  description: "Dewangonj modern fashion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

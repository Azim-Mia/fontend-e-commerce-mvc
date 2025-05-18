//import "./globals.css"
export const metadata = {
  title: "deshboard",
  description: "Dewangonj morden fashion"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<html lang="en">
      <body>
      <main>
        {children}
        </main>
      </body>
    </html>
  );
}
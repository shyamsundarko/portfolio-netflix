import "./globals.css";

export const metadata = {
  title: "Shyam Sundar",
  description: "Welcome to my page!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

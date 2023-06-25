import "@styles/globals.css";
import Navbar from "@components/Navbar";

export const metadata = {
  title: "E-commerce",
  description: "Static e-commerce website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

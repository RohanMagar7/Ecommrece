"use client"
import "./globals.css";
import { BrowserRouter , Route, Link} from 'react-router-dom';

export const metadata = {
  title: "Instand Store",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BrowserRouter> <body>{children}</body></BrowserRouter>
    </html>
  );
}

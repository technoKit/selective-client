// components/layout.js

import Navbar from "./navbar";
import Footer from "./footer/index";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

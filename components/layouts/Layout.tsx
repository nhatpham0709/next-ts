import * as React from "react";
import Header from "@components/layouts/Header";
import Footer from "@components/layouts/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

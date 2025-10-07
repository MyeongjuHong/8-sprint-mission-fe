import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="px-4">
        <div className="max-w-300 mx-auto mt-6">{children}</div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;

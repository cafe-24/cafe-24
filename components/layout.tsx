import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>;
    </>
  );
}

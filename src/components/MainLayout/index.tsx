import React from "react";
import { Footer } from "../Footer";
import { LandingPageHeader } from "../LandingPageHeader";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <LandingPageHeader />
      <div className="w-screen">{children}</div>
      <Footer />
    </div>
  );
};

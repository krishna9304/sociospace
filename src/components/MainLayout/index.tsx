import React, { useEffect } from "react";
import { Footer } from "../Footer";
import { LandingPageHeader } from "../LandingPageHeader";
import { useCurrentUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/feed");
    }
  }, [user]);

  return (
    <div>
      <LandingPageHeader />
      <div className="w-screen">{children}</div>
      <Footer />
    </div>
  );
};

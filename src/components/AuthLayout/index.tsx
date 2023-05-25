import React from "react";
import { AuthHeader } from "../AuthHeader";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <AuthHeader />
      {children}
    </div>
  );
};

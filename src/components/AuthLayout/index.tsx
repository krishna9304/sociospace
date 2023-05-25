import React from "react";
import { AuthHeader } from "../AuthHeader";
import { SideNav } from "../SideNav";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full min-h-[7%]">
        <AuthHeader />
      </div>
      <div className="w-screen flex h-[93%]">
        <div className="hidden lg:block w-[18%] h-full">
          <SideNav />
        </div>
        <div className="w-full lg:w-[82%] h-full">{children}</div>
      </div>
    </div>
  );
};

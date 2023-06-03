import React, { useEffect } from "react";
import { AuthHeader } from "../AuthHeader";
import { SideNav } from "../SideNav";
import { useCurrentUser } from "../../hooks/user";
import { useNavigate } from "react-router-dom";
import { OnlineSideBar } from "../OnlineSidebar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const { user } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full min-h-[7%]">
        <AuthHeader />
      </div>
      <div className="w-screen flex h-[93%]">
        <div className="hidden lg:block w-[18%] h-full">
          <SideNav />
        </div>
        <div className="w-full lg:w-[64%] h-full">{children}</div>
        <div className="hidden lg:block w-[18%] h-full">
          <OnlineSideBar />
        </div>
      </div>
    </div>
  );
};

import { useParams } from "react-router-dom";
import { AuthForm } from "../../components/AuthForm";
import { MainLayout } from "../../components/MainLayout";

const LoginPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  return (
    <MainLayout>
      <div className="w-full flex justify-center items-center">
        <AuthForm authType={type ?? "login"} />
      </div>
    </MainLayout>
  );
};

export default LoginPage;

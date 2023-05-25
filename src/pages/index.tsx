import { FeatureInfo } from "../components/FeatureInfo";
import { LandingPageHero } from "../components/LandingPageHero";
import { MainLayout } from "../components/MainLayout";

const LandingPage: React.FC = () => {
  return (
    <MainLayout>
      <LandingPageHero />
      <FeatureInfo />
    </MainLayout>
  );
};

export default LandingPage;

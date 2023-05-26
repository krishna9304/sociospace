import React from "react";
import { AuthLayout } from "../../components/AuthLayout";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  return (
    <AuthLayout>
      <div className="w-full h-full"></div>
    </AuthLayout>
  );
};

export default Feed;

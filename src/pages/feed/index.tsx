import React from "react";
import { AuthLayout } from "../../components/AuthLayout";
import { Divider, Textarea } from "@mantine/core";
import { DropzoneButton } from "../../components/DropzoneButton";

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  return (
    <AuthLayout>
      <div className="w-full h-full p-3 flex flex-col items-center">
        <div className="max-w-[100rem] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <Textarea
              placeholder="Write something..."
              label="Create a post"
              labelProps={{
                style: {
                  fontSize: "1rem",
                  fontWeight: 400,
                  marginBottom: "0.5rem",
                },
              }}
              autosize
              minRows={2}
              maxRows={6}
            />
            <DropzoneButton />
          </div>
          <div className="w-full flex justify-center">
            <Divider className="my-12 w-48 border-[4px] border-white rounded-full" />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Feed;

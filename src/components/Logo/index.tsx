import { Group, Title } from "@mantine/core";
import { IconSocial } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const SocioSpaceLogo = () => {
  const navigate = useNavigate();
  return (
    <Group
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
      position="center"
    >
      <IconSocial />
      <Title size={28}>sociospace</Title>
    </Group>
  );
};

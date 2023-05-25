import { Group, Title, useMantineTheme } from "@mantine/core";
import { IconSocial } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export const SocioSpaceLogo = () => {
  const navigate = useNavigate();
  const { colorScheme } = useMantineTheme();
  return (
    <Group
      onClick={() => navigate("/")}
      style={{ cursor: "pointer" }}
      position="center"
    >
      <IconSocial color={colorScheme === "dark" ? "white" : "black"} />
      <Title
        className="text-xl md:text-3xl"
        color={colorScheme === "dark" ? "white" : "black"}
      >
        sociospace
      </Title>
    </Group>
  );
};

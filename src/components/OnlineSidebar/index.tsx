import { Navbar, Text } from "@mantine/core";
import { useStyles } from "./styles";

export function OnlineSideBar() {
  const { classes } = useStyles();

  return (
    <Navbar className={classes.navbar}>
      <Navbar.Section>
        <Text
          weight={500}
          size="sm"
          className={classes.title}
          color="dimmed"
          mb="xs"
        >
          ONLINE MEMBERS
        </Text>
      </Navbar.Section>
    </Navbar>
  );
}

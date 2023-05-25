import { Title, Text, Button, Container } from "@mantine/core";
import { useStyles } from "./styles";
import { Dots } from "./Dots";

export function LandingPageHero() {
  const { classes } = useStyles();

  return (
    <Container className={classes.wrapper} size={1700}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: -60 }} />
      <Dots className={classes.dots} style={{ left: 0, top: -40 }} />
      <Dots className={classes.dots} style={{ right: 0, top: -20 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Automated AI{" "}
          <Text component="span" className={classes.highlight} inherit>
            code reviews
          </Text>{" "}
          for any stack
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" color="dimmed" className={classes.description}>
            Build more reliable software with AI companion. AI is also trained
            to detect lazy developers who do nothing and just complain on
            Twitter.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button variant="gradient" className={classes.control} size="lg">
            Create a new account
          </Button>
        </div>
      </div>
    </Container>
  );
}

import {
  AppShell,
  Burger,
  Header,
  Image,
  MediaQuery,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { ReactNode, useState } from "react";

type Props = {
  children?: ReactNode;
};

const CustomAppShell = ({ children }: Props) => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      padding='md'
      header={
        <Header height={80} p='md'>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <Image width={80} height={80} src='nesdc-logo.png' />
            <Text weight={700}>
              Office of the National Economic and Social Development Council
            </Text>
            <MediaQuery largerThan='sm' styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                color={theme.colors.gray[6]}
                mr='xl'
              />
            </MediaQuery>
          </div>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}>
      {children}
    </AppShell>
  );
};

export default CustomAppShell;

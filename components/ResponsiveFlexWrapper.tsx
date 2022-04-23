import { ReactNode } from "react";
import { Group, Stack, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

type Props = {
  children?: ReactNode;
};

export const ResponsiveFlexWrapper = ({ children }: Props) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`);
  return (
    <>{matches ? <Stack>{children}</Stack> : <Group grow>{children}</Group>};</>
  );
};

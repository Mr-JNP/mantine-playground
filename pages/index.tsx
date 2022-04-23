import { useState } from "react";
import type { NextPage } from "next";
import { Box, Group } from "@mantine/core";

import CustomAppShell from "../components/Layout";
import CustomRadarChart from "../components/CustomRadarChart";
import DataPointForm from "../components/DataPointForm";
import DataPointFormValues from "../types/DataPointFormValues";
import { ResponsiveFlexWrapper } from "../components/ResponsiveFlexWrapper";

const Home: NextPage = () => {
  const [formValues, setFormValues] = useState<number[]>([]);
  const handleFormSubmit = (values: DataPointFormValues) => {
    setFormValues(Object.values(values));
  };

  return (
    <CustomAppShell>
      <ResponsiveFlexWrapper>
        <Group grow position='center' my='100px'>
          <Box sx={{ maxWidth: 360 }} mx='auto'>
            <DataPointForm handleFormSubmit={handleFormSubmit} />
          </Box>
        </Group>
        <Group grow position='center' my='100px'>
          <Box sx={{ maxWidth: 640 }} mx='auto'>
            <CustomRadarChart data={formValues} />
          </Box>
        </Group>
      </ResponsiveFlexWrapper>
    </CustomAppShell>
  );
};

export default Home;

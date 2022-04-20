import { Box } from "@mantine/core";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type Props = {
  data: number[];
};

const setChartData = (data: number[]) => ({
  labels: ["A", "B", "C", "D", "E", "F"],
  datasets: [
    {
      label: "My Values",
      data: data,
      fill: true,
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      pointBackgroundColor: "rgb(255, 99, 132)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(255, 99, 132)",
    },
    {
      label: "Demo Values",
      data: [72, 68, 25, 55, 34, 99],
      fill: true,
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgb(54, 162, 235)",
      pointBackgroundColor: "rgb(54, 162, 235)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgb(54, 162, 235)",
    },
  ],
});
const options = {
  elements: {
    line: {
      borderWidth: 3,
    },
  },
  scales: {
    r: {
      suggestedMin: 0,
      suggestedMax: 100,
    },
  },
};

const CustomRadarChart = ({ data }: Props) => {
  return <Radar data={setChartData(data)} options={options} />;
};

export default CustomRadarChart;

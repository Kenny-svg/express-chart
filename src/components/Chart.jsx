import { Bar } from "react-chartjs-2";
import data from "../../data.json";
import { useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);
const ChartComp = () => {
  const [chartData, setChartData] = useState({
    labels: data.map((item) => item.day),
    datasets: [
      {
        label: "",
        data: data.map((amount) => amount.amount),
        backgroundColor: [
          "#F87171",
          "#F87171",
          "#60A5FA",
          "#F87171",
          "#F87171",
        ],
        borderWidth: 0,
        stepped: true,
        padding: 0,
      },
    ],
  });

  return (
    <>
      <Bar
        className="mt-4"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Spending last 7 days   ",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </>
  );
};

export default ChartComp;

import React from "react";

import { Bar } from "react-chartjs-2";

const OpenInterestChart = ({ exchangeData }) => {
  const openInterest = exchangeData.map(
    ({ open_interest_dollar }) => open_interest_dollar
  );

  const labels = exchangeData.map(({ name }) => name);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "24h Open Interest (BTC)",
        backgroundColor: "rgba(0,246,255,0.2)",
        borderColor: "rgba(0,246,255,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: openInterest,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Derivatives Exchanges",
            fontColor: "blue",
          },
          ticks: {
            fontColor: "#F0F4F8", //gray
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "#F0F4F8",
          },
        },
      ],
    },
    legend: {
      labels: {
        fontColor: "white",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default OpenInterestChart;

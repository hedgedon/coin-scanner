import React from "react";

import { HorizontalBar } from "react-chartjs-2";

const VolumeChart = ({ exchangeData, labels }) => {
  const volume = exchangeData.map(
    ({ trade_volume_24h_btc }) => trade_volume_24h_btc
  );

  // chart data
  const data = {
    labels: labels,
    datasets: [
      {
        label: "24h Volume (BTC)",
        backgroundColor: "rgba(255,65,180,0.2)",
        borderColor: "rgba(255,65,180,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: volume,
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
            fontColor: "red",
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

  return <HorizontalBar data={data} options={options} />;
};

export default VolumeChart;

import React from "react";

import { HorizontalBar } from "react-chartjs-2";

const VolumeChart = ({ exchangeData, options, labels }) => {
  const volume = exchangeData.map(
    ({ trade_volume_24h_btc }) => trade_volume_24h_btc
  );

  const dataSets = [
    {
      label: "24h Volume (BTC)",
      backgroundColor: "rgba(255,65,180,0.2)",
      borderColor: "rgba(255,65,180,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: volume,
    },
  ];

  // chart data
  const data = {
    labels: labels,
    datasets: dataSets,
  };

  return <HorizontalBar data={data} options={options} />;
};

export default VolumeChart;

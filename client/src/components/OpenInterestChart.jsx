import React from "react";

import { HorizontalBar } from "react-chartjs-2";

const OpenInterestChart = ({ exchangeData, options, labels }) => {
  const openInterest = exchangeData.map(
    ({ open_interest_btc }) => open_interest_btc
  );

  const dataSets = [
    {
      label: "24h Open Interest (BTC)",
      backgroundColor: "rgba(0,246,255,0.2)",
      borderColor: "rgba(0,246,255,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: openInterest,
    },
  ];

  // chart data
  const data = {
    labels: labels,
    datasets: dataSets,
  };

  return <HorizontalBar data={data} options={options} />;
};

export default OpenInterestChart;

import React from "react";
import { Table } from "semantic-ui-react";

import { HorizontalBar } from "react-chartjs-2";
import { Container, Divider, Grid, Header, Image } from "semantic-ui-react";

const CoinTable = ({ marketData, exchangeData }) => {
  // loading..
  if (marketData.length === 0 && exchangeData.length === 0) {
    console.log("loading", new Date().toLocaleString());
    return <div className="ui active centered inline loader"></div>;
  }

  // TODO:
  // pass `name` to labels. by mapping over our exchangeData array and destructure out the `name`
  // return an array
  // transform volume to current dollar value in $billion (prob should handle this server side)
  const labels = exchangeData.map(({ name }) => name);
  const volumes = exchangeData.map(
    ({ trade_volume_24h_btc }) => trade_volume_24h_btc
  );

  // chart data
  const dataSets = [
    {
      label: "24h Volume (BTC)",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: volumes,
    },
  ];

  // chart options
  const options = {
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: "Derivatives Exchanges",
          },
        },
      ],
    },
  };

  // chart data
  const data = {
    labels: labels,
    datasets: dataSets,
  };

  // creates rows for each coin
  const marketDataRowContent = marketData.map(
    ({
      id,
      market_cap_rank,
      name,
      current_price,
      market_cap,
      high,
      price_change_percentage_24h,
    }) => (
      <Table.Row key={id}>
        <Table.Cell>{market_cap_rank}</Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell textAlign="left">{current_price}</Table.Cell>
        <Table.Cell>${market_cap}</Table.Cell>
        <Table.Cell>${high}</Table.Cell>
        <Table.Cell>{price_change_percentage_24h}%</Table.Cell>
      </Table.Row>
    )
  );

  return (
    <Grid>
      <Grid.Row columns={2} textAlign="center">
        <Grid.Column>
          <HorizontalBar data={data} options={options} />
        </Grid.Column>
        <Grid.Column>
          <HorizontalBar data={data} options={options} />
        </Grid.Column>
      </Grid.Row>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="left">Price</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Price % Change (24h)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{marketDataRowContent}</Table.Body>
      </Table>
    </Grid>
  );
};

export default CoinTable;

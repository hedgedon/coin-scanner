import React from "react";
import { Table } from "semantic-ui-react";

import { Grid, Image } from "semantic-ui-react";

import VolumeChart from "./VolumeChart";
import OpenInterestChart from "./OpenInterestChart";

const CoinTable = ({ marketData, exchangeData }) => {
  // loading..
  if (marketData.length === 0 && exchangeData.length === 0) {
    console.log("loading", new Date().toLocaleString());
    return <div className="ui active centered inline loader"></div>;
  }

  const labels = exchangeData.map(({ name }) => name);

  // TODO:
  // move options into separate charts since we will be using diff kinda style on different charts
  // chart options (24h Volume Chart & Open Interest)
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
            fontColor: "yellow",
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: "green",
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

  // creates rows for each coin
  const marketDataRowContent = marketData.map(
    ({
      id,
      image,
      symbol,
      market_cap_rank,
      name,
      current_price,
      market_cap,
      high_24h,
      low_24h,
      price_change_percentage_24h,
    }) => (
      <Table.Row key={id}>
        <Table.Cell>{market_cap_rank}</Table.Cell>
        <Table.Cell>
          <Image src={image} avatar />
          {symbol.toUpperCase()}
        </Table.Cell>
        <Table.Cell>{name}</Table.Cell>
        <Table.Cell>${current_price}</Table.Cell>
        <Table.Cell>${market_cap}</Table.Cell>
        <Table.Cell>${high_24h}</Table.Cell>
        <Table.Cell>${low_24h}</Table.Cell>
        <Table.Cell>{price_change_percentage_24h}%</Table.Cell>
      </Table.Row>
    )
  );

  return (
    <div>
      <Grid>
        <Grid.Row columns={2} textAlign="center">
          <Grid.Column>
            <VolumeChart
              exchangeData={exchangeData}
              options={options}
              labels={labels}
            />
          </Grid.Column>
          <Grid.Column>
            <OpenInterestChart
              exchangeData={exchangeData}
              options={options}
              labels={labels}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Table unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>Symbol</Table.HeaderCell>
            <Table.HeaderCell>Asset</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
            <Table.HeaderCell>24h High</Table.HeaderCell>
            <Table.HeaderCell>24h Low</Table.HeaderCell>
            <Table.HeaderCell>24h % Change</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{marketDataRowContent}</Table.Body>
      </Table>
    </div>
  );
};

export default CoinTable;

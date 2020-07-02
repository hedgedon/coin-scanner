import React from "react";
import { Table } from "semantic-ui-react";

import { Grid } from "semantic-ui-react";

import VolumeChart from "./VolumeChart";
import OpenInterestChart from "./OpenInterestChart";

const CoinTable = ({ marketData, exchangeData }) => {
  // loading..
  if (marketData.length === 0 && exchangeData.length === 0) {
    console.log("loading", new Date().toLocaleString());
    return <div className="ui active centered inline loader"></div>;
  }

  const labels = exchangeData.map(({ name }) => name);

  // chart options (24h Volume Chart & Open Interest)
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
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign="left">Price</Table.HeaderCell>
            <Table.HeaderCell>Market Cap</Table.HeaderCell>
            <Table.HeaderCell>High</Table.HeaderCell>
            <Table.HeaderCell>Price % Change (24h)</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{marketDataRowContent}</Table.Body>
      </Table>
    </div>
  );
};

export default CoinTable;

import React from "react";
// import { Table } from "semantic-ui-react";

import { StyledTable } from "./styledComponents";

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
      <StyledTable.Row key={id}>
        <StyledTable.Cell>{market_cap_rank}</StyledTable.Cell>
        <StyledTable.Cell>
          <Image src={image} avatar />
          {symbol.toUpperCase()}
        </StyledTable.Cell>
        <StyledTable.Cell>{name}</StyledTable.Cell>
        <StyledTable.Cell>${current_price}</StyledTable.Cell>
        <StyledTable.Cell>${market_cap}</StyledTable.Cell>
        <StyledTable.Cell>${high_24h}</StyledTable.Cell>
        <StyledTable.Cell>${low_24h}</StyledTable.Cell>
        <StyledTable.Cell>{price_change_percentage_24h}%</StyledTable.Cell>
      </StyledTable.Row>
    )
  );

  return (
    <div>
      <Grid>
        <Grid.Row columns={2} textAlign="center">
          <Grid.Column>
            <VolumeChart exchangeData={exchangeData} labels={labels} />
          </Grid.Column>
          <Grid.Column>
            <OpenInterestChart exchangeData={exchangeData} labels={labels} />
            {/* <BarChart /> */}
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <StyledTable celled inverted selectable>
        <StyledTable.Header>
          <StyledTable.Row>
            <StyledTable.HeaderCell>#</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>Symbol</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>Asset</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>Price</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>Market Cap</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>24h High</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>24h Low</StyledTable.HeaderCell>
            <StyledTable.HeaderCell>24h % Change</StyledTable.HeaderCell>
          </StyledTable.Row>
        </StyledTable.Header>
        <StyledTable.Body>{marketDataRowContent}</StyledTable.Body>
      </StyledTable>
    </div>
  );
};

export default CoinTable;

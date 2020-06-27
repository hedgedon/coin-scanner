import React from "react";
import { Table } from "semantic-ui-react";

const CoinTable = ({ marketData, exchangeData }) => {
  // loading..
  if ((marketData.length === 0) && (exchangeData.length === 0)) {
    console.log('loading', new Date().toLocaleString())
    return (
      <div className="ui active centered inline loader"></div>
    )
  }

  // console.log(marketData, new Date().toLocaleString())

  return (
    <div>
      <ul>
        {
          exchangeData.map(({ id, name, trade_volume_24h_btc, open_interest_btc }) => { 
            return <li key={id}>{name} | 24h volume (btc): {trade_volume_24h_btc} || open interest: {open_interest_btc} </li> 
          })
        }
      </ul>
      {console.log(exchangeData)}
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
        <Table.Body>
          {marketData.map(({ id, market_cap_rank, name, current_price, market_cap, high, price_change_percentage_24h }) => (
              <Table.Row key={id}>
                <Table.Cell>{market_cap_rank}</Table.Cell>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell textAlign="left">{current_price}</Table.Cell>
                <Table.Cell>${market_cap}</Table.Cell>
                <Table.Cell>${high}</Table.Cell>
                <Table.Cell>{price_change_percentage_24h}%</Table.Cell>
              </Table.Row>
            )
          )}
        </Table.Body>
      </Table>
    </div>
  );
}

export default CoinTable;

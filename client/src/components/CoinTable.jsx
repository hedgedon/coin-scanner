import React from "react";
import { Table } from "semantic-ui-react";

const CoinTable = ({ data }) => {
  // loading..
  if (data.length === 0) {
    console.log('loading', new Date().toLocaleString())
    return 'loading ...'
  }

  console.log(data, new Date().toLocaleString())

  return (
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
        {data.map(({ id, market_cap_rank, name, current_price, market_cap, high, price_change_percentage_24h }) => (
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
  );
}

export default CoinTable;

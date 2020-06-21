import React from "react";
import { Table } from "semantic-ui-react";

const CoinTable = ({ data }) => {
  console.log(data)

  // loading..
  if (!data) {
    return 'loading ...'
  }

  return (
    <div>
          <Table unstackable>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell textAlign="left">Price</Table.HeaderCell>
                <Table.HeaderCell>Market Cap</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
          {data.map((coin) => {
            return (
              <Table.Row key={coin.id}>
                <Table.Cell>{coin.rank}</Table.Cell>
                <Table.Cell>{coin.name}</Table.Cell>
                <Table.Cell textAlign="left">{coin.price}</Table.Cell>
                <Table.Cell>${coin.market_cap}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

export default CoinTable;

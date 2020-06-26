import React from 'react';
import { Card } from 'semantic-ui-react';


// TODO:
// make functional component using useState and useEffect
// grab data from exchanges endpoint, store that data to the state
// replace `exchanges` with our actual data
// pass in array of objects into items={}


const exchanges = [
  {
    header: 'Header 1',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  }, 
  {
    header: 'Header 2',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  }, 
  {
    header: 'Header 3',
    description:
      'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  }
]

const Cards = () => <Card.Group centered items={exchanges} />

export default Cards;
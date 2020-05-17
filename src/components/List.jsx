import React from 'react';
import './../css/List.css';
import Card from 'react-bootstrap/Card';

import ListCard from './ListCard.jsx';
import AddListCard from './AddListCard.jsx';

const List = ( { list } ) => {
  return (
      <Card key= { list.id }>
        <Card.Header>
          <Card.Title>{ list.title }</Card.Title>
        </Card.Header>
        <Card.Body id="cards">
          { (list.cards).map( (card) => (
            <ListCard key={card.id} card={card}/>
          ))}
        </Card.Body>
        <Card.Footer>
          <AddListCard/>
        </Card.Footer>
      </Card>
  );
}

export default List;

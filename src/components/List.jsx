import React from 'react';
import './../css/List.css';
import Card from 'react-bootstrap/Card';

import ListCard from './ListCard.jsx';
import AddListItem from './AddListItem.jsx';

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
          <AddListItem text={"tarjeta"}/>
        </Card.Footer>
      </Card>
  );
}

export default List;

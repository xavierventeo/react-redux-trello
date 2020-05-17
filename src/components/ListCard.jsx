import React from 'react';
import './../css/ListCard.css';
import Card from 'react-bootstrap/Card';

const ListCard = ( { card } ) => {
  return (
    <Card key = { card.id } id="list-card" className="bg-light">
      <Card.Body>{ card.text }</Card.Body>
    </Card>
  );
}

export default ListCard;
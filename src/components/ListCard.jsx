import React from 'react';
import './../css/ListCard.css';
import Card from 'react-bootstrap/Card';

const ListCard = ( {card} ) => {
  return (
    <Card key= { card.id } className="bg-light">
      { card.text }
    </Card>
  );
}

export default ListCard;
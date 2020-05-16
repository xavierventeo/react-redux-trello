import React from 'react';
import './../css/ListCard.css';
import Toast from 'react-bootstrap/Toast';

const ListCard = ( {card} ) => {
  console.log('card: ' + card.text);
  return (
    <Toast key= { card.id }>
      { card.text }
    </Toast>
  );
}

export default ListCard;
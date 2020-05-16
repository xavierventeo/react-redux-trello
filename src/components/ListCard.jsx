import React from 'react';
import './../css/ListCard.css';

const ListCard = ( {card} ) => {
  console.log('card: ' + card.text);
  return (
    <div key={ card.id } class="card"> { card.text }</div>
  );
}

export default ListCard;
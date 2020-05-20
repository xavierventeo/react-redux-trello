import React from 'react';
import './../css/ListCard.css';
import Card from 'react-bootstrap/Card';

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

const ListCard = ( { card } ) => {
  return (
    <Card key = { card.id } id="list-card" className="bg-light" draggable="true" onDragStart={drag}>
      <Card.Body>{ card.text }</Card.Body>
    </Card>
  );
}

export default ListCard;
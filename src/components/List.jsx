import React from 'react';
import './../css/List.css';
import Card from 'react-bootstrap/Card';

import ListCard from './ListCard.jsx';
import AddListItem from './AddListItem.jsx';

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

const List = ( { list } ) => {
  return (
      <Card key= { list.id }>
        <Card.Header>
          <Card.Title>{ list.title }</Card.Title>
        </Card.Header>
        <Card.Body id="cards" onDrop={drop} onDragOver={allowDrop}>
          { (list.cards).map( (card) => (
            <ListCard key={card.id} card={card}/>
          ))}
        </Card.Body>
        <Card.Footer>
          <AddListItem text={"tarjeta"} listID={ list.id }/>
        </Card.Footer>
      </Card>
  );
}

export default List;

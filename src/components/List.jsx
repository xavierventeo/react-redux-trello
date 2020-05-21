import React from 'react';
import './../css/List.css';

import ListCard from './ListCard.jsx';
import { Droppable } from "react-beautiful-dnd";

const grid = 8;


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const List = ( { list } ) => {
  return (
    <Droppable droppableId={String(list.id)}> 
      { (provided, snapshot) => (
        <div className="divlista" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
          <div>{list.title}</div>  
          <div>
            { (list.cards).map( (card, index) => (
              <ListCard card={card} index={index} key={card.id} />
            ))}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable> 
  )}

export default List;

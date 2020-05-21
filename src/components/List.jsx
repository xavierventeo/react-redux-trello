import React from 'react';
import './../css/List.css';

import ListCard from './ListCard.jsx';
import AddListItem from './AddListItem.jsx';

import { Droppable } from "react-beautiful-dnd";

const grid = 8;


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const List = ( { list } ) => {
  return (
    <div key={list.id}>
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
      <div key={list.id}>
        <AddListItem text={"tarjeta"} listID={ list.id }/>
      </div>
    </div>
  )}

export default List;

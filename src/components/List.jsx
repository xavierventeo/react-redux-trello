import React from 'react';
import './../css/List.css';

import ListCard from './ListCard.jsx';
import AddListItem from './AddListItem.jsx';

import { Droppable, Draggable } from "react-beautiful-dnd";

const grid = 8;


const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});


const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const List = ( props ) => {
  return (
    <div key={`draggableListDiv${String(props.list.id)}`}>
    <Draggable draggableId={String(props.list.id)} key={props.list.id} index={props.listIndex}>
      { (provided, snapshot) => (
        <div className="divdragablelist" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <Droppable droppableId={String(props.list.id)} type="CARD">  
            { (provided, snapshot) => (
              <div className="divlista" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                <div>{props.list.title}</div>  
                <div>
                  { (props.list.cards).map( (card, index) => (
                    <ListCard card={card} index={index} key={card.id} />
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable> 
        </div>
      )}
      </Draggable>

      <div key={`addCardDiv${String(props.list.id)}`}>
        <AddListItem text={"tarjeta"} listID={ props.list.id }/>
      </div>
    </div>
  )}

export default List;

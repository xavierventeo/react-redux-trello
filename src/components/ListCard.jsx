import React from 'react';
import './../css/ListCard.css';
import { Draggable } from "react-beautiful-dnd";

const grid = 8;

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

const ListCard = ( props ) => {
  return (
    <Draggable draggableId={String(props.card.id)} key={props.card.id} index={props.index}>
      { (provided, snapshot) => (
        <div className="divcard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <div style={{borderStyle: "solid", display: "flex",justifyContent: "space-around"}}>
            {props.card.text}
            <button type="button">delete</button>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default ListCard;
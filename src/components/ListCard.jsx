import React from 'react';
import './../css/ListCard.css';
import { Draggable } from 'react-beautiful-dnd';
import { getItemStyle } from './dndUtils'

const ListCard = ( props ) => {
  return ( 
    <Draggable draggableId={`droppableCard${String(props.card.id)}`} key={`droppableCard${String(props.card.id)}`} index={props.index}>
      { (provided, snapshot) => (
        <div className="divcard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <div style={{borderStyle: "solid", display: "flex",justifyContent: "space-around"}}>
            {props.card.text}
            <button type="button"> <span role="img" aria-label="delete-card">❌</span></button>
          </div>
        </div>
      )}
    </Draggable>
  )
}

export default ListCard;
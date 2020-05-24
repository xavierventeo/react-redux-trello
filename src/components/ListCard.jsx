import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { getItemStyle } from './dndUtils'

import { connect } from 'react-redux'; 
import { removeCardAction  } from './../actions/actionRemoveItems';

const ListCard = ( props ) => {
  return ( 
    <Draggable draggableId={`droppableCard${String(props.card.id)}`} key={`droppableCard${String(props.card.id)}`} index={props.index}>
      { (provided, snapshot) => (
        <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <div className="card-text card-custom-alignment">
            <span>{props.card.text}</span>
            <span role="img" aria-label="delete-card" onClick={() => props.removeCard(props.listID, props.card.id)}>❌</span>
          </div>
        </div>
      )}
    </Draggable>
  )
}

const mapDispatchToProps = (dispatch) => ({
  removeCard : (listID, cardID) => removeCardAction(dispatch, listID, cardID)
})

const connectedListCard = connect(null, mapDispatchToProps)(ListCard);

export default connectedListCard;

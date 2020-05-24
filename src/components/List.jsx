import React from 'react';
import './../css/List.css';

import ListCard from './ListCard.jsx';
import FormAddItem from './FormAddItem.jsx';
import { getListStyle, getItemStyle } from './dndUtils'

import { connect } from 'react-redux'; 
import { removeListAction  } from './../actions/actionRemoveItems';

import { Droppable, Draggable } from "react-beautiful-dnd";

const List = ( props ) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={`draggableListDiv${String(props.list.id)}`}>
    <Draggable draggableId={String(props.list.id)} key={props.list.id} index={props.listIndex}>
      { (provided, snapshot) => (
        <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <Droppable droppableId={String(props.list.id)} type="CARD">  
            { (provided, snapshot) => (
              <div className="divlista" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                <div className="card-header card-custom-alignment">
                  <span>{props.list.title}</span>
                  <span role="img" aria-label="remove-list" className="remove-icon" onClick={() => props.removeList(props.list.id)}>🗑️</span>
                </div>  
                <div className="card-body">
                  { (props.list.cards).map( (card, index) => (
                    <ListCard card={card} index={index} key={card.id} listID={props.list.id}/>
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
        <FormAddItem listID={ props.list.id } isCard={true} text={"tarjeta"} />
      </div>
    </div>
  )}

const mapDispatchToProps = (dispatch) => ({
  removeList : (listID) => removeListAction(dispatch, listID)
})

const connectedList = connect(null, mapDispatchToProps)(List);

export default connectedList;
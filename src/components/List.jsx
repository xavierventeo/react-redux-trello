import React from 'react';
import './../css/List.css';

import ListCard from './ListCard.jsx';
import AddListItem from './AddListItem.jsx';
import { getListStyle, getItemStyle } from './dndUtils'

import { connect } from 'react-redux'; 
import { removeListAction  } from './../actions/actionRemoveItems';

import { Droppable, Draggable } from "react-beautiful-dnd";

const List = ( props ) => {
  return (
    <div key={`draggableListDiv${String(props.list.id)}`}>
    <Draggable draggableId={String(props.list.id)} key={props.list.id} index={props.listIndex}>
      { (provided, snapshot) => (
        <div className="divdragablelist" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
          <Droppable droppableId={String(props.list.id)} type="CARD">  
            { (provided, snapshot) => (
              <div className="divlista" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                <div>
                  {props.list.title}
                  <span role="img" aria-label="delete-card" onClick={() => props.removeList(props.list.id)}>❌</span>
                </div>  
                <div>
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
        <AddListItem text={"tarjeta"} listID={ props.list.id }/>
      </div>
    </div>
  )}

const mapDispatchToProps = (dispatch) => ({
  removeList : (listID) => removeListAction(dispatch, listID)
})

const connectedList = connect(null, mapDispatchToProps)(List);

export default connectedList;
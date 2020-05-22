import React from 'react';
import { connect } from 'react-redux'; 
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import List from './List.jsx';
import AddList from './AddListItem';

import { orderCardAction } from './../actions/actionDnd.jsx';

import './../css/Board.css';

const Board = (props) => {

  const onDragEnd = (result) => {
    const { source, destination, type } = result;
  console.log(result);
    // dropped outside the list
    if (!destination) {
      return;
    }
    if (type === "CARD") {
      props.orderCard(source.droppableId, destination.droppableId, source.index, destination.index);
    } else {
      console.log("Mover lista");
    }
  }
  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lists" direction="horizontal" type="LIST">
        { (provided) => (
          <div key="lists" className="lists" {...provided.droppableProps} ref={provided.innerRef}>
            { (props.lists).map( (list, index) => (
              <List key={list.id} list={list} listIndex={index}/>
            ))}
            {provided.placeholder}
          </div>
        )}
        </Droppable>  
      </DragDropContext>
      <div className="lists">
        <AddList text={"lista"}/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const mapDispatchToProps = (dispatch) => ({
  orderCard : (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => orderCardAction(dispatch, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd),
});

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board);

export default connectedBoard;

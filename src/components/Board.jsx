import React from 'react';
import { connect } from 'react-redux'; 
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import List from './List.jsx';
import AddList from './AddListItem';

import { orderCardAction } from './../actions/actionDnd.jsx';

import './../css/Board.css';

const grid = 8;

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const Board = (props) => {

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    // dropped outside the list
    if (!destination) {
      return;
    }

    props.orderCard(source.droppableId, destination.droppableId, source.index, destination.index);
  }
  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="lists" direction="horizontal" type="LIST">
        { (provided, snapshot) => (
          <div key="" className="lists" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
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

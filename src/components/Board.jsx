import React from 'react';
import { connect } from 'react-redux'; 
import { DragDropContext } from "react-beautiful-dnd";

import List from './List.jsx';
import AddList from './AddListItem';

import { orderCardAction } from './../actions/actionDnd.jsx';

import './../css/Board.css';

const Board = (props) => {

  const onDragEnd = (result) => {
    const { source, destination } = result;
  
    // dropped outside the list
    if (!destination) {
      return;
    }
  
  
  }
  return (
    <div className="board">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="lists">
          { (props.lists).map( (list, ind) => (
            <List key={list.id} list={list}/>
          ))}
        </div>
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
  orderCard : (droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId) => orderCardAction(dispatch, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId),
});

const connectedBoard = connect(mapStateToProps, mapDispatchToProps)(Board);

export default connectedBoard;

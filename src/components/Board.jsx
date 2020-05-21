import React from 'react';
import { connect } from 'react-redux'; 
import './../css/Board.css';
import { DragDropContext } from "react-beautiful-dnd";

import List from './List.jsx';
import AddList from './AddListItem';

const onDragEnd = (result) => {


}

const Board = (props) => {
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

const connectedBoard = connect(mapStateToProps)(Board);

export default connectedBoard;

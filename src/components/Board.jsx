import React from 'react';
import { connect } from 'react-redux'; 
import './../css/tmp.css';
import { DragDropContext } from "react-beautiful-dnd";

import List from './List.jsx';

const onDragEnd = (result) => {


}

const Board = (props) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="lists">
        { (props.lists).map( (list, ind) => (
          <List key={list.id} list={list}/>
        ))}
    </div>
    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedBoard = connect(mapStateToProps)(Board);

export default connectedBoard;

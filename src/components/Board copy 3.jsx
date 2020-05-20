import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';

import List from './List.jsx';
import AddList from './AddListItem';


const Board = (props) => {
  return (
    <div className="lists">
        { (props.lists).map( (list) => (
        <List key={list.id} list={list}/>
        ))}
        <AddList text={"lista"}/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedBoard = connect(mapStateToProps)(Board);

export default connectedBoard;

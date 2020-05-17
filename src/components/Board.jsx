import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';

import Button from 'react-bootstrap/Button';
import List from './List.jsx';


const Board = (props) => {
  return (
    <div className="lists">
      { (props.lists).map( (list) => (
        <List key={list.id} list={list}/>
      ))}
      <Button variant="primary">Add List</Button>{' '}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedBoard = connect(mapStateToProps)(Board);

export default connectedBoard;

import React from 'react';
import './List.css';
import ListCard from './ListCard.jsx';

const List = ({title}) => {
  return (
    <div className="list">
      <p>{title}</p>
      <ListCard/>
    </div>
  );
}

export default List;
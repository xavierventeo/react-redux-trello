import React from 'react';
import './../css/List.css';
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
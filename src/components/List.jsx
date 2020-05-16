import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';
import ListCard from './ListCard.jsx';

const List = (props) => {
  return (
    <div className="lists">
      
      { console.log(props.lists) }

      { (props.lists).map( (list) => (
          <div key={ list.id } id="list" class="list">{ list.title }
            <div id="cards" class="cards">
              { (list.cards).map( (card) => (
                <ListCard key={card.id} card={card}/>
              ))}
            </div>
          </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;

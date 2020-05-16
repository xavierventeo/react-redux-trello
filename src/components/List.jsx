import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';

const List = (props) => {
  return (
    <div className="lists">
      
      { console.log(props.lists) }

      { (props.lists).map( (list) => (
          <div key={ list.id } id="list">{ list.title }
            <div id="cards">
              { (list.cards).map( (card) => (
                <div key={ card.id } > { card.text }</div>
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

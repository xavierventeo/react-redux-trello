import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import ListCard from './ListCard.jsx';

const List = (props) => {
  return (
    <div className="lists">
      
      { console.log(props.lists) }

      { (props.lists).map( (list) => (
          <Jumbotron key= { list.id }>
            { list.title }
            <div id="cards" className="cards">
              { (list.cards).map( (card) => (
                <ListCard key={card.id} card={card}/>
              ))}
            </div>
            <Button variant="primary">Add Card</Button>{' '}

          </Jumbotron>

      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;

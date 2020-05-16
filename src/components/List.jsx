import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import ListCard from './ListCard.jsx';

const List = (props) => {
  return (
    <div className="lists">
      { (props.lists).map( (list) => (
          <Card key= { list.id }>
            <Card.Header>{ list.title }</Card.Header>
            <Card.Body id="cards">
              <Card.Text>
                { (list.cards).map( (card) => (
                  <ListCard key={card.id} card={card}/>
                ))}
              </Card.Text>
              <Button variant="primary">Add Card</Button>{' '}
            </Card.Body>
          </Card>
      ))}
      <Button variant="primary">Add List</Button>{' '}
    </div>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedList = connect(mapStateToProps)(List);

export default connectedList;

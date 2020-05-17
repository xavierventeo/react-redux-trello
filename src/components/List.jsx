import React from 'react';
import { connect } from 'react-redux'; 
import './../css/List.css';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';
import ListCard from './ListCard.jsx';
import AddListCard from './AddListCard.jsx';

const List = (props) => {
  return (
    <div className="lists">
      { (props.lists).map( (list) => (
          <Card key= { list.id }>
            <Card.Header>
              <Card.Title>{ list.title }</Card.Title>
            </Card.Header>
            <Card.Body id="cards">
              { (list.cards).map( (card) => (
                <ListCard key={card.id} card={card}/>
              ))}
            </Card.Body>
            <Card.Footer>
              <AddListCard/>
            </Card.Footer>
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

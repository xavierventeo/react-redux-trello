import React from 'react';
import './../css/App.css';
import Board from './Board.jsx';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container fluid>
      <h1>Hello Trello</h1>
      <Board/>
    </Container>
  );
}

export default App;

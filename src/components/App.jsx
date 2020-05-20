import React from 'react';
import './../css/App.css';
import Board from './Board.jsx';
import Header from './Header.jsx';

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <Board/>
    </Container>
  );
}

export default App;

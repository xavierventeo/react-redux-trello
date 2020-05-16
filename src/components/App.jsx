import React from 'react';
import './../css/App.css';
import List from './List.jsx';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container fluid>
      <h1>Hello Trello</h1>
      <List/>
    </Container>
  );
}

export default App;

import React from 'react';
import Board from './Board.jsx';
import Header from './Header.jsx';
import { Provider } from 'react-redux';
import store from './../store/store'

import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Container fluid>
      <Header/>
      <Provider store={store}>
        <Board/>
      </Provider>
    </Container>
  );
}

export default App;

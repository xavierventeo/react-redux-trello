import React from 'react';
import Board from './Board.jsx';
import Header from './Header.jsx';
import { Provider } from 'react-redux';
import store from './../store/store'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div claasName="container-fluid">
      <Header/>
      <Provider store={store}>
        <Board/>
      </Provider>
    </div>

  );
}

export default App;

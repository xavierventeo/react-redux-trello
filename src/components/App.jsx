import React from 'react';
import './../css/App.css';
import List from './List.jsx';

const App = () => {
  return (
    <div className="App">
      <h1>Hello Trello</h1>
      <List title='List 1'/>
    </div>
  );
}

export default App;

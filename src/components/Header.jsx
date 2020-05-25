import React from 'react';
import './../css/Header.css';

import AddList from './FormAddItem';

const Header = (props) => {
  return (
    <div id="header" className="header container-fluid" >
        <h1>React Redux Trello</h1>
        <AddList text={"list"} isCard={false}/>
    </div>
  );
}

export default Header;




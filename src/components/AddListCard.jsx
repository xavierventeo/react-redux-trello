import React from 'react';
import './../css/ListCard.css';
import Button from 'react-bootstrap/Button';

const AddListCard = (props) => {
  return (
    <Button variant="primary">Añada otra tarjeta</Button>
  );
}

export default AddListCard;

/*

<div class="card-composer-container js-card-composer-container"><a class="open-card-composer js-open-card-composer" href="#"><span class="icon-sm icon-add"></span><span class="js-add-a-card hide">Añada una tarjeta</span><span class="js-add-another-card">Añada otra tarjeta</span></a><div class="js-card-templates-button card-templates-button-container dark-background-hover"><div class="js-react-root"><div><a class="_2arBFfwXVxA0AM" role="button" href="#"><span class="icon-sm icon-template-card dark-background-hover"></span></a></div></div></div></div>
*/
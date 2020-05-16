import React from 'react';
import './../css/ListCard.css';
import Button from 'react-bootstrap/Button';

const AddListCard = (props) => {
    let isFormOpen = false;

    const openForm = () => {
        isFormOpen = true;
    }

    const renderAddButton = () => {
        return <Button variant="primary" onClick={openForm}>Añada otra tarjeta</Button>;
    };

    const renderFormAddCard = () => {
        return 'hello';
    };

    return isFormOpen ? renderFormAddCard() : renderAddButton();
}

export default AddListCard;

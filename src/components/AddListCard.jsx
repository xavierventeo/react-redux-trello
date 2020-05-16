import React, {useState}  from 'react';
import './../css/ListCard.css';
import Button from 'react-bootstrap/Button';

const AddListCard = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const openForm = () => {
        setFormOpen(true);
    }

    const renderAddButton = () => {
        return <Button variant="primary" onClick={openForm}>Añada otra tarjeta</Button>;
    };

    const renderFormAddCard = () => {
        return 'hello';
    };

    return formOpen ? renderFormAddCard() : renderAddButton();
}

export default AddListCard;

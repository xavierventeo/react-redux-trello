import React, {useState}  from 'react';
import './../css/AddListCard.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AddListCard = ({ text }) => {
    const [formOpen, setFormOpen] = useState(false);

    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    const renderAddButton = (text) => {
        return <span onClick={openForm}>+ Añade otra {text}</span>
    };

    const renderFormAddCard = (text) => {
        return (
            <Container>
                <textarea className="form-control" id="newCard" rows="2"></textarea>
                    <Button variant="success" size="sm" onClick={openForm}>Añadir {text}</Button>
                <button type="button" className="close" aria-label="Close" onClick={closeForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Container>
        )
    };

    return formOpen ? renderFormAddCard(text) : renderAddButton(text);
}

export default AddListCard;

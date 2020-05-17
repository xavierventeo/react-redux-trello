import React, {useState}  from 'react';
import './../css/AddListCard.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const AddListCard = (props) => {
    const [formOpen, setFormOpen] = useState(false);

    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    const renderAddButton = () => {
        return <span onClick={openForm}>+ Añade otra tarjeta</span>
    };

    const renderFormAddCard = () => {
        return (
            <Container>
                <textarea class="form-control" id="newCard" rows="2"></textarea>
                <Button variant="success" size="sm" onClick={openForm}>Añadir tarjeta</Button>
                <button type="button" class="close" aria-label="Close" onClick={closeForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </Container>
        )
    };

    return formOpen ? renderFormAddCard() : renderAddButton();
}

export default AddListCard;

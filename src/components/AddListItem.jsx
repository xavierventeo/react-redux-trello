import React, {useState}  from 'react';
import './../css/AddListCard.css';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'; 
import { addListAction } from './../actions/actionAddItems';

const AddListItem = ( props, { text }) => {
    const [formOpen, setFormOpen] = useState(false);
    const [textArea, setTextArea] = useState("");

    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    const renderAddButton = (text) => {
        return <span onClick={openForm}>+ Añade otra {text}</span>
    };

    const handleChange = (event) => {
        setTextArea(event.target.value);
    };

    const addItem = () => {
        if (textArea) {
            props.addList(textArea);
        }
        setTextArea("");
        closeForm();
    }

    const renderFormAddCard = (text) => {
        return (
            <div>
                <textarea className="form-control" id="text-new-card" rows="2" cols="20" onChange={handleChange}></textarea>
                <Button variant="success" size="sm" onClick={addItem}>Añadir {text}</Button>
                <button type="button" className="close" aria-label="Close" onClick={closeForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    };

    return formOpen ? renderFormAddCard(text) : renderAddButton(text);
}

const mapDispatchToProps = (dispatch) => ({
    addList : (title) => addListAction(dispatch, title)
})

const connectedControls = connect(null, mapDispatchToProps)(AddListItem);

export default connectedControls;
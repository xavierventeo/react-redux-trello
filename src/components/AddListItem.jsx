import React, {useState}  from 'react';
import './../css/AddListItem.css'
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux'; 
import { addListAction } from './../actions/actionAddItems';

const AddListItem = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const [textArea, setTextArea] = useState("");
    
    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    const renderAddButton = () => {
        return <span onClick={openForm}>+ Añade otra {props.text}</span>
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

    const renderFormAddCard = () => {
        return (
            <div>
                <textarea className="form-control" id="text-new-card" rows="2" cols="20" onChange={handleChange}></textarea>
                <Button variant="success" size="sm" onClick={addItem}>Añadir {props.text}</Button>
                <button type="button" className="close" aria-label="Close" onClick={closeForm}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    };

    return formOpen ? renderFormAddCard() : renderAddButton();
}

const mapDispatchToProps = (dispatch) => ({
    addList : (title) => addListAction(dispatch, title)
})

const connectedControls = connect(null, mapDispatchToProps)(AddListItem);

export default connectedControls;
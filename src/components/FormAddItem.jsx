import React, {useState}  from 'react';
import './../css/FormAddItem.css'
import { connect } from 'react-redux'; 
import { addListAction, addCardAction } from '../actions/actionAddItems';

const FormAddItem = (props) => {
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
            if (props.listID) {
                props.addCard(textArea, props.listID);
            } else {
                props.addList(textArea);
            }
        }
        setTextArea("");
        closeForm();
    }

    const renderFormAddCard = () => {
        if (props.isCard) {
            return (
                <div class="form-item" onBlur={addItem} >
                    <input  className="form-control" id="text-new-card" onChange={handleChange} autoFocus></input>
                    <button className="btn-success" size="sm" onClick={addItem}>Añadir {props.text}</button>
                    <button className="close" aria-label="Close" onClick={closeForm}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )    
        } else {
            return (
                <div class="form-item" onBlur={addItem}>
                    <input  className="form-control" id="text-new-card" onChange={handleChange} autoFocus></input>
                </div>
            )    
        }
    };

    return formOpen ? renderFormAddCard() : renderAddButton();
}

const mapDispatchToProps = (dispatch) => ({
    addList : (title) => addListAction(dispatch, title),
    addCard : (title, listID) => addCardAction(dispatch, title, listID)
})

const connectedControls = connect(null, mapDispatchToProps)(FormAddItem);

export default connectedControls;
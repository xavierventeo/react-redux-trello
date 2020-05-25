import React, {useState}  from 'react';
import { connect } from 'react-redux'; 
import { addListAction, addCardAction } from '../actions/actionAddItems';

const FormAddItem = (props) => {
    const [formOpen, setFormOpen] = useState(false);
    const [fieldNewItem, setFieldNewItem] = useState("");
    
    const openForm = () => {
        setFormOpen(true);
    }

    const closeForm = () => {
        setFormOpen(false);
    }

    const renderAddButton = () => {
        return <span onClick={openForm}>+ Add a {props.text}</span>
    };

    const handleChange = (event) => {
        setFieldNewItem(event.target.value.trim());
    };
    
    const onKeyUpHandle = (event) => {    
        if (event.keyCode === 13 && event.target.value.trim()) {
            setFieldNewItem(event.target.value.trim());
            addItem();
        }
    };

    const addItem = () => {
        if (fieldNewItem) {
            if (props.listID) {
                props.addCard(fieldNewItem, props.listID);
            } else {
                props.addList(fieldNewItem);
            }
        }
        setFieldNewItem("");
        closeForm();
    }

    const renderFormAddCard = () => {
        if (props.isCard) {
            return (
                <div className="form-item" onBlur={addItem} >
                    <input  className="form-control" id="text-new-card" onChange={handleChange} onKeyUp={(event) => onKeyUpHandle(event)} autoFocus></input>
                    <button className="btn-success btn-sm" onClick={addItem}>Add {props.text}</button>
                    <button className="close" aria-label="Close" onClick={closeForm}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            )    
        } else {
            return (
                <div className="form-item" onBlur={addItem}>
                    <span><input  className="form-control" id="text-new-card" onChange={handleChange} onChange={handleChange} onKeyUp={(event) => onKeyUpHandle(event)} autoFocus></input></span>
                    <span><button className="btn-success btn-sm" onClick={addItem}><span>Add&nbsp;{props.text}</span></button></span>
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
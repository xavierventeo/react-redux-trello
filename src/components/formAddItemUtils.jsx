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
    setFieldNewItem(event.target.value);
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

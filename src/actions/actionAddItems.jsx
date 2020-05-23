import {actionDispatch} from './actionsDefinition';

export const addListAction = (dispatch, title) => {
    dispatch({
        type: actionDispatch.ADD_LIST,
        payload: title
    });
};

export const addCardAction = (dispatch, title, listID) => {
    dispatch({
        type: actionDispatch.ADD_CARD,
        payload: title, 
        listID: listID
    });
};


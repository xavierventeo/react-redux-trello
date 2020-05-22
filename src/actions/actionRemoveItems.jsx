import {actionDispatch} from './actionsDefinition';

export const removeListAction = (dispatch, listID) => {
    dispatch({
        type: actionDispatch.REMOVE_LIST,
        payload: listID
    });
};

export const removeCardAction = (dispatch, listID, cardID) => {
    dispatch({
        type: actionDispatch.REMOVE_CARD,
        payload: {listID, cardID}
    });
};


import {actionDispatch} from './../actions/actionsDefinition';

export const addListAction = (dispatch, title) => 
    dispatch({
        type: actionDispatch.ADD_LIST,
        payload: title
});
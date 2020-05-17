export const addCardAction = (dispatch, list_id, text) => 
    dispatch({
        type: 'ADD_CARD',
        payload: text,
        id: Date.now(),
});


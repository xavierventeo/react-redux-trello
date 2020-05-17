export const addListAction = (dispatch, text) => 
    dispatch({
        type: 'ADD_LIST',
        payload: text,
        cards: [],
        id: Date.now(),
});
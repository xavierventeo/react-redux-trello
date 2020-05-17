export const addListAction = (dispatch, title) => 
    dispatch({
        type: 'ADD_LIST',
        payload: title
});
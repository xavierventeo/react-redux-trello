export const addListAction = (dispatch, title) =>  {
    alert(title);
    dispatch({
        type: 'ADD_LIST',
        payload: title
});
}

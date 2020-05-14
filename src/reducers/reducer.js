const initialState = {
    visibility: 'ALL',
    todos:[
        {
            text: 'tarea demo 1',
            id: 1,
            completed: true,
          },
          {
            text: 'tarea demo 2',
            id: 2,
            completed: false,
          },
          {
            text: 'tarea demo 3',
            id: 3,
            completed: false,
          },      
    ]
}
    
function reducer(state = initialState, action) {
    return state;
}

export default reducer;
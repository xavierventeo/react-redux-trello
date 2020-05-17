
const initialState = {
  lists:[
    {
      id: 0,
      title: "Pending",
      cards:[
        {
          id: 1,
          text: 'tarea demo 1',
        },
        {
          id: 2,
          text: 'tarea demo 2',
        },  
      ]    
    },
    {
      id: 1,
      title: "In Progress",
      cards:[
        {
          id: 3,
          text: 'tarea demo 3',
        },      
      ]    
    },
    {
      id: 3,
      title: "Done",
      cards:[]    
    },      
  ]
};
    
function reducerList(state = initialState, action) {
    switch (action.type) {
      case "ADD_LIST":
        let newList = {
          id: Date.now(),
          title: action.payload.title,
          cards: []
        };
        return [...state, newList];

      default:
          return state;
    }
}

export default reducerList;
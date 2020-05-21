import {actionDispatch} from './../actions/actionsDefinition';

const initialState = {
  lists:[
    {
      id: 1,
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
      id: 2,
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
      case actionDispatch.ADD_LIST:
        return {
          ...state,
          lists: [
              ...state.lists,
              {
                id: Date.now(),
                title: action.payload,
                cards: []
              }
          ]
        };

      case actionDispatch.ADD_CARD:
        const newState = { ...state };

        newState.lists = (state.lists).map(list => {
          if (list.id === action.listID) {
            return {
              ...list,
              cards: [
                ...list.cards,
                {
                  id: Date.now(),
                  text: action.payload,
                }
              ]
            };
          } else {
            return list;
          };
        });
        return newState;

        case actionDispatch.ORDER_CARD:
          const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd, draggableId } = action.payload;
          const newStateDnd = { ...state };
console.log(droppableIdStart);
console.log(droppableIdEnd);
console.log(droppableIndexStart);
console.log(droppableIndexEnd);
console.log(draggableId);
console.log(newStateDnd.lists[droppableIdStart -1]);
console.log(newStateDnd.lists[droppableIdStart -1].cards);


          if (droppableIdStart === droppableIdEnd) {

            const result = newStateDnd.lists[droppableIdStart -1].cards
            const [removed] = result.splice(droppableIndexStart, 1);
            result.splice(droppableIndexEnd, 0, removed);
            console.log(result);
          


          } else {

          }


          return newStateDnd;
  
      default:
          return state;
    }
}

export default reducerList;
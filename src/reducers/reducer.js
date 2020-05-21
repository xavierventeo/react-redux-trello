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

          if (droppableIdStart === droppableIdEnd) {
            const cardsArray = newStateDnd.lists[droppableIdStart -1].cards;
            const [removed] = cardsArray.splice(droppableIndexStart, 1);
            cardsArray.splice(droppableIndexEnd, 0, removed);
          } else {
            const cardsArraySource = newStateDnd.lists[droppableIdStart -1].cards;
            const cardsArrayDestination = newStateDnd.lists[droppableIdEnd -1].cards;

            const [removed] = cardsArraySource.splice(droppableIndexStart, 1);
            cardsArrayDestination.splice(droppableIndexEnd, 0, removed);
          }

          return newStateDnd;
  
      default:
          return state;
    }
}

export default reducerList;
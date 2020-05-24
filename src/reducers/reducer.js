import {actionDispatch} from './../actions/actionsDefinition';

const initialState = {
  lists:[
    {
      id: 1,
      title: "Pending",
      cards:[
        { id: 1, text: 'tarea demo 1'},
        { id: 2, text: 'tarea demo 2'}  
      ]    
    },
    {
      id: 2,
      title: "In Progress",
      cards:[
        { id: 3, text: 'tarea demo 3' },      
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

        case actionDispatch.REMOVE_LIST:
          return {
            ...state,
            lists: state.lists.filter( (list) => list.id !== action.payload.listID),
          };

        case actionDispatch.REMOVE_CARD:
          const newStateRemoveCard = { ...state };

          newStateRemoveCard.lists = (state.lists).map(list => {
            if (list.id === action.payload.listID) {
              let newCards = list.cards.filter( (card) => card.id !== action.payload.cardID);
              return {
                ...list,
                cards: newCards
              };
            } else {
              return list;
            };
          });
          return newStateRemoveCard;

          case actionDispatch.ORDER_LIST:
          const newStateListOrder = { ...state };
          const { droppableIndexStart, droppableIndexEnd } = action.payload;

          let listsArray = newStateListOrder.lists;
          const [removed] = newStateListOrder.lists.splice(droppableIndexStart, 1);
          listsArray.splice(droppableIndexEnd, 0, removed);

          return newStateListOrder;

        case actionDispatch.ORDER_CARD:
          const newStateDnd = { ...state };
          {
            const { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd } = action.payload;
            const listIndexStart = (newStateDnd.lists.map(list => String(list.id))).indexOf(droppableIdStart);

            if (droppableIdStart === droppableIdEnd) {
              const cardsArray = newStateDnd.lists[listIndexStart].cards;
              const [removed] = cardsArray.splice(droppableIndexStart, 1);
              cardsArray.splice(droppableIndexEnd, 0, removed);
            } else {
              const cardsArraySource = newStateDnd.lists[listIndexStart].cards;
              const listIndexDestination = newStateDnd.lists.map(list => String(list.id)).indexOf(droppableIdEnd);
              const cardsArrayDestination = newStateDnd.lists[listIndexDestination].cards;
  
              const [removed] = cardsArraySource.splice(droppableIndexStart, 1);
              cardsArrayDestination.splice(droppableIndexEnd, 0, removed);
            }
          }

          return newStateDnd;
            
      default:
          return state;
    }
}

export default reducerList;
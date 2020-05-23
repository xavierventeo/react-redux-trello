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

        case actionDispatch.REMOVE_LIST:
          console.log("Reducer: remove list");
          return state;

        case actionDispatch.REMOVE_CARD:
          const { listID, cardID } = action.payload;
          const newStateRemoveCard = { ...state };
          newStateRemoveCard.lists.map(list => {
            if (list.id === listID) {
              list.cards = list.cards.filter( (card) => String(card.id) !== String(cardID));
            } 
            return list;
          });

          console.log(newStateRemoveCard);
 


          return newStateRemoveCard;

        case actionDispatch.ORDER_LIST:
          const newStateListOrder = { ...state };
          const { droppableIndexStart, droppableIndexEnd } = action.payload;

          let listsArraySource = newStateListOrder.lists;

          const [removed] = listsArraySource.splice(droppableIndexStart, 1);
          listsArraySource.splice(droppableIndexEnd, 0, removed);

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
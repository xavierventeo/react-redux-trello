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
        let newState = state;
        console.log(state.lists);

        newState = (state.lists).map(list => {
          if (list.id === action.listID) {
            return {
              ...list,
              cards: [...list.cards, 
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

      default:
          return state;
    }
}

export default reducerList;
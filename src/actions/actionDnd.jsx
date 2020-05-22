import {actionDispatch} from './../actions/actionsDefinition';

export const orderCardAction = (dispatch, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => {
    dispatch({
        type: actionDispatch.ORDER_CARD,
        payload: { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd }
    });
};



export const orderListAction = (dispatch, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => {
    dispatch({
        type: actionDispatch.ORDER_LIST,
        payload: { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd }
    });
};


import {actionDispatch} from './actionsDefinition';

export const orderListAction = (dispatch, droppableIndexStart, droppableIndexEnd) => {
    dispatch({
        type: actionDispatch.ORDER_LIST,
        payload: { droppableIndexStart, droppableIndexEnd }
    });
};

export const orderCardAction = (dispatch, droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd) => {
    dispatch({
        type: actionDispatch.ORDER_CARD,
        payload: { droppableIdStart, droppableIdEnd, droppableIndexStart, droppableIndexEnd }
    });
};




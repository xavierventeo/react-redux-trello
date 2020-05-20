import React from 'react';
import { connect } from 'react-redux'; 
import './../css/tmp.css';
import { Droppable, Draggable, DragDropContext } from "react-beautiful-dnd";


const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const onDragEnd = (result) => {
  const { source, destination } = result;

  // dropped outside the list
  if (!destination) {
    return;
  }
  const sInd = +source.droppableId;
  const dInd = +destination.droppableId;
}

const Board = (props) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="lists">
        { (props.lists).map( (list, ind) => (
          <Droppable droppableId={String(list.id)}> 
            { (provided, snapshot) => (
              <div className="divlista" {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                <div>{list.title}</div>  
                <div>
                  { (list.cards).map( (card, index) => (
                    <Draggable draggableId={String(card.id)} index={index}>
                      { (provided, snapshot) => (
                        <div className="divcard" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={getItemStyle(snapshot.isDragging,provided.draggableProps.style)}>
                          <div style={{borderStyle: "solid", display: "flex",justifyContent: "space-around"}}>
                            {card.text}
                            <button type="button">delete</button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable> 
        ))}
    </div>

    </DragDropContext>
  );
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

const connectedBoard = connect(mapStateToProps)(Board);

export default connectedBoard;

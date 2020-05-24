const grid = 8;

export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
});

export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer


  // change background colour if dragging   
  background: isDragging ? "lightgreen" : "#ebecf0",

  // styles we need to apply on draggables
  ...draggableStyle
});

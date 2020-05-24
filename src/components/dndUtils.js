export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
});

export const getItemStyle = (isDragging, draggableStyle) => ({
  background: isDragging ? "lightgreen" : "#ebecf0",

  // styles we need to apply on draggables
  ...draggableStyle
});

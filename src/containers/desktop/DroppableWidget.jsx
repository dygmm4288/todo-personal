import { Draggable, Droppable } from "react-beautiful-dnd";

export default function DroppableWidget({ droppableId, items }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => (
            <DraggableWidget
              key={droppableId + String(item.id)}
              item={item}
              index={index}
              droppableId={droppableId}
            />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

function DraggableWidget({ item, index, droppableId }) {
  return (
    <Draggable draggableId={droppableId + String(item.id)} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
          {item.title}
        </div>
      )}
    </Draggable>
  );
}

import { Droppable } from "react-beautiful-dnd";

export default function withDroppableWidget(DraggableWidget) {
  return ({ droppableId, items }) => {
    return (
      <Droppable droppableId={droppableId} key={droppableId}>
        {(provided, snapshot) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <DraggableWidget
                droppableId={droppableId}
                item={item}
                index={index}
              />
            ))}
          </div>
        )}
      </Droppable>
    );
  };
}

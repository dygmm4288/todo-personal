import { Draggable } from "react-beautiful-dnd";

export default function withDraggableWidget(WidgetComponent) {
  return ({ item, index, droppabledId }) => {
    return (
      <Draggable draggableId={droppabledId + String(item.id)} index={index}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}>
            <WidgetComponent {...item} />
          </div>
        )}
      </Draggable>
    );
  };
}

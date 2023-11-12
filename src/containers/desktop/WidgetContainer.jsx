import React from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTodos,
  toggleFavorite,
  toggleTodo,
} from "../../reducers/todoSlice";
import DroppableWidget from "./DroppableWidget";

export default function WidgetContainer() {
  const [todos, todosByImportant] = useSelector(selectTodos).reduce(classify, [
    [],
    [],
  ]);

  const dispatch = useDispatch();

  const handleToggleTodo = (id) => () => {
    dispatch(toggleTodo(id));
  };
  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) return;

    if (source.droppableId === "droppable-todo") {
      // 'droppable-todo' to 'droppable-important'
      const todo = todos[source.index];
      console.log(todo);
      if (todo.isFavorite) return;

      dispatch(toggleFavorite(todo.id));
      console.log("finish dispatch toggle Favorite");
    } else {
      const todo = todosByImportant[source.index];
      dispatch(toggleFavorite(todo.id));
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <DroppableWidget droppableId='droppable-todo' items={todos} />
      <DroppableWidget
        droppableId='droppable-important'
        items={todosByImportant}
      />
    </DragDropContext>
  );
}
function classify(ret, cur, index, arrRef) {
  ret[0].push(cur);
  cur.isFavorite && ret[1].push(cur);
  if (arrRef.length - 1 === index) {
    ret[0].sort(compare);
    ret[1].sort(compare);
  }
  return ret;
}
// TODO: 비교 함수를 어떻게 만들 것인지를 정해야 한다. 현재는 그저 title의 이름 순으로 정렬을 해놓는다.
function compare(a, b) {
  return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  /* if (a.isDone && b.isDone) {
    return a.title < b.title ? -1 : a.title > b.title ? 1 : 0;
  } else 
  if (!a.isDone && b.isDone) {
    return -1;
  } else if (a.isDone && !b.isDone) {
    return 1;
  } else {
    return 0;
  } */
}

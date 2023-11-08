import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Widget, { LARGE_SIZE } from "../../components/desktop/Widget";
import WidgetItem from "../../components/desktop/WidgetItem";
import TodoWidget from "../../components/todo/TodoWidget";
import { selectTodos, toggleTodo } from "../../reducers/todoSlice";

export default function WidgetContainer() {
  const [todos, todosByImportant] = useSelector(selectTodos).reduce(classify, [
    [],
    [],
  ]);

  const dispatch = useDispatch();

  const handleToggleTodo = (id) => () => {
    dispatch(toggleTodo(id));
  };

  return (
    <>
      <Widget widgetTitle={"Todos"}>
        {todos.map((todo) => (
          <WidgetItem key={todo.id}>
            {<TodoWidget {...todo} handleToggleTodo={handleToggleTodo} />}
          </WidgetItem>
        ))}
      </Widget>
      <Widget widgetTitle={"Important"} type={LARGE_SIZE}>
        {todosByImportant.map((todo) => (
          <WidgetItem key={todo.id}>
            {<TodoWidget {...todo} handleToggleTodo={handleToggleTodo} />}
          </WidgetItem>
        ))}
      </Widget>
    </>
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

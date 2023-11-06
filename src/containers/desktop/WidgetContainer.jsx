import React from "react";
import { useSelector } from "react-redux";
import Widget from "../../components/desktop/Widget";
import WidgetItem from "../../components/desktop/WidgetItem";
import { selectTodos } from "../../reducers/todoSlice";

export default function WidgetContainer() {
  const [todosByDone, todosByFavorite] = useSelector(selectTodos).reduce(
    (a, c) => {
      c.isDone && a[0].push(c);
      c.isFavorite && a[1].push(c);
      return a;
    },
    [[], []],
  );
  const TodoWidget = (todo) => (
    <>
      <h4 className='widget-title'>{todo.title}</h4>
      <p className='widget-content'>{todo.content}</p>
    </>
  );

  return (
    <>
      <Widget widgetTitle={"Done Todos"}>
        {todosByDone.map((todo) => (
          <WidgetItem>{TodoWidget(todo)}</WidgetItem>
        ))}
      </Widget>
      <Widget widgetTitle={"Favorite Todos"}>
        {todosByFavorite.map((todo) => (
          <WidgetItem>{TodoWidget(todo)}</WidgetItem>
        ))}
      </Widget>
    </>
  );
}

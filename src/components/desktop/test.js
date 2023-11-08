import { useState } from "react";
import uuid from "react-uuid";
import { Form } from "./components/header";

function App() {
  const initialState = [
    { id: uuid(), title: "제목1", contents: "내용1", isDone: false },
    { id: uuid(), title: "제목2", contents: "내용2", isDone: true },
    { id: uuid(), title: "제목3", contents: "내용3", isDone: false },
  ];
  const [todos, setTodos] = useState(initialState);

  // 두 번 이상 반복될 것 같으면 멈춘다
  // 컴포넌트를 만든다
  // 무엇이 반복되고 반복되지 않는지르르 확인한다
  // 반복되는 것을 함수의 매개변수로 넣는다.

  // 컴포넌트 분리를 어떻게 하냐

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <main
        style={{
          padding: "30px",
        }}>
        <TodoList
          todos={todos}
          setTodos={setTodos}
          title={"작업중"}
          condition={function (todo) {
            return todo.isDone === false;
          }}
          complete={"완료"}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          title={"완료"}
          condition={function (todo) {
            return todo.isDone === true;
          }}
          complete={"취소"}
        />
      </main>
    </>
  );
}
function TodoList({ todos, setTodos, title, condition, complete }) {
  return (
    <div>
      <h1>{title}</h1>
      {todos.filter(condition).map(function (todo) {
        return (
          <div
            key={todo.id}
            style={{
              border: "1px solid #bbb",
              margin: "10px",
              padding: "10px",
              width: "250px",
            }}>
            <h3>{todo.title}</h3>
            <p>{todo.contents}</p>
            <button
              onClick={function () {
                const newTodos = todos.map(function (item) {
                  if (item.id === todo.id) {
                    return { ...item, isDone: !item.isDone };
                  } else {
                    return item;
                  }
                });
                setTodos(newTodos);
              }}>
              {complete}
            </button>
            <button
              onClick={function () {
                const delTodo = todos.filter((item) => item.id !== todo.id);
                return setTodos(delTodo);
              }}>
              삭제
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;

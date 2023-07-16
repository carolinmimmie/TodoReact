import Input from "./Input";
import Todos from "./Todos";
import "./display.css";
import Todo from "./todoClass";
import { useState } from "react";
const Display = () => {
  const todoList = [
    new Todo(11, "Fixa present", false),
    new Todo(23, "Göra klart plugget", false),
    new Todo(32, "Gå Hammarbybacken", false),
    new Todo(41, "Ringa mamma", false),
  ];

  const [todo, setTodo] = useState(todoList);
  const [input, setInput] = useState("");

  const addTodo = () => {
    const newTodo = new Todo(Math.random() + 1, input, false);
    setTodo([newTodo, ...todo]);
    console.log(todo);
  };
  const deleteTodo = (id: number) => {
    const updatedTodo = todo.filter((x) => id !== x.id);
    setTodo(updatedTodo);
    console.log(todo);
  };
  const statusTodo = (id: number) => {
    const updatedStatus = todo.map((x) => {
      if (id == x.id) {
        return { ...x, completed: !x.completed };
      }
      return x;
    });
    setTodo(updatedStatus);
    console.log(updatedStatus);
  };
  return (
    <div className="display">
      <h1>Lägg till saker i listan!</h1>
      <Input addTodo={addTodo} setInput={setInput}></Input>
      <Todos
        todo={todo}
        deleteTodo={deleteTodo}
        statusTodo={statusTodo}
      ></Todos>
    </div>
  );
};
export default Display;

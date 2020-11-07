import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./TodoList"
import NewTodo from "./NewTodo"
import uuid from "uuid/dist/v1";

function App3() {
  const initialData = [
    { id: uuid(), todoText: "Kurt" },
    { id: uuid(), todoText: "Karsten" },
    { id: uuid(), todoText: "Ingerlis" }
  ]
  const [todos, setTodos] = useState(initialData);
  const [newTodo, setNewTodo] = useState({ id: "", todoText: "" });

  console.log(todos)

  const addTodo = todo => {
    if (todo.id === "") { //Indicates a new object
      todo.id = uuid();
      todos.push(todo);
    } else {//if id != "", it must be an existing todo. Find it and add changes
      let todoToEdit = todos.find(t => t.id === todo.id);
      todoToEdit.todoText = todo.todoText;
    }
    setTodos([...todos]);
    setNewTodo({ id: "", todoText: "" })
  };

  const deleteTodo = (id) => {
    if (newTodo.id !== "") {  //Cannot delete while we are editing
      return;
    }
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos([...newTodoList]);
  }

  const editTodo = (id) => {
    const todoToEdit = todos.find(todo => todo.id === id);
    setNewTodo({ ...todoToEdit })
  }


  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>
        Lifting State
              </h2>

      <div className="row">
        <div className="col-6 allTodos">
          <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
        </div>
        <div className="col-5 newTodo">
          <NewTodo
            addTodo={addTodo}
            nextTodo={newTodo}
            setNewTodo={setNewTodo}
          />
        </div>
      </div>

    </div>
  );
}
export default App3;

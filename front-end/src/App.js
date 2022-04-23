import { useEffect, useState } from "react";

import './App.css'

export default function App() {
  const URL = "http://localhost:8080";

  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [todo, setTodo] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleEditInputChange(e) {
    setCurrentTodo({ ...currentTodo, text: e.target.value });
    console.log(currentTodo);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo("");
  }
  function handleEditFormSubmit(e) {
    e.preventDefault();

    handleUpdateTodo(currentTodo.id, currentTodo);
  }
  function handleDeleteClick(id) {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  }

  function handleUpdateTodo(id, updatedTodo) {
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  }

  function handleEditClick(todo) {
    setIsEditing(true);
    setCurrentTodo({ ...todo });
  }

  return (
    <div className="App">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <h2>Edit Todo</h2>
          <label htmlFor="editTodo">แก้ไข </label>
          <input
            name="editTodo"
            type="text"
            id="myInput"
            value={currentTodo.text}
            onChange={handleEditInputChange}
          />
          <button type="submit">อัพเดท</button>
          <button onClick={() => setIsEditing(false)}>ยกเลิก</button>
        </form>
      ) : (
        <form onSubmit={handleFormSubmit}>
          <h2>Todo List</h2>
          <input
            name="todo"
            type="text"
            value={todo}
            onChange={handleInputChange}
          />
          <button type="submit" className="addBtn">เพิ่ม</button>
        </form>
      )}

      <ul id="myUL">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleEditClick(todo)}>แก้ไข</button>
            <button onClick={() => handleDeleteClick(todo.id)}>ลบ</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
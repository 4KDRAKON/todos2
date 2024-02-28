import './App.css';
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 0, title: "nimadir", isCompleted: false },
    { id: 1, title: "kimdir", isCompleted: true },
    { id: 2, title: "qayerdir", isCompleted: true },
  ]);

  const handleDelete = (evt) => {
    const todoId = parseInt(evt.target.dataset.todoId);
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(filteredTodos);
  };

  return (
    <>
      <input type="text" onKeyUp={(evt) => {
        if (evt.code === "Enter") {
          const newTodo = {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
            title: evt.target.value.trim(),
            isCompleted: false
          };
          setTodos([...todos, newTodo]);
          evt.target.value = null;
        }
      }} />

      <ul className='todos'>
        {todos.length > 0 && todos.map((todo) => (
          <li className='todos__item' key={todo.id}>
            {todo.title}
            <button data-todo-id={todo.id} onClick={handleDelete}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

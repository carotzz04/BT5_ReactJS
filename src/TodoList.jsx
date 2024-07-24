import React, { useState } from 'react';
import TodoItem from './TodoItem.jsx';
import Modal from './Modal.jsx';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');
  const [newTodoContent, setNewTodoContent] = useState('');
  const [currentTodo, setCurrentTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodoTitle.trim() === '') return;
    const todo = {
      id: Date.now(),
      title: newTodoTitle,
      content: newTodoContent,
    };
    setTodos([...todos, todo]);
    setNewTodoTitle('');
    setNewTodoContent('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleOpenModal = (todo) => {
    setCurrentTodo(todo);
  };

  const handleCloseModal = () => {
    setCurrentTodo(null);
  };

  return (
    <div>
      <div className="input-container">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter a task..."
        />
        <input
          type="text"
          value={newTodoContent}
          onChange={(e) => setNewTodoContent(e.target.value)}
          placeholder="Enter task details..."
        />
        <button className="add-button" onClick={handleAddTodo}>Add Task</button>
      </div>
      <div className="card-container">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onOpenModal={handleOpenModal}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
      {currentTodo && (
        <Modal content={currentTodo.content} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TodoList;

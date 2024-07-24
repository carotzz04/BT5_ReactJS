import React from 'react';

const TodoItem = ({ todo, onOpenModal, onDelete }) => {
  return (
    <div className="todo-card">
      <span className="todo-title" onClick={() => onOpenModal(todo)}>
        {todo.title}
      </span>        
      <div className="todo-actions">
          <button className="delete-button" onClick={() => onDelete(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;

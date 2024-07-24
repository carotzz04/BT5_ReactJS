import React from 'react';

const TodoItem = ({ todo, onOpenModal, onDelete }) => {
  return (
    <div className="todo-card">
      <div className="todo-title" onClick={() => onOpenModal(todo)}>
        {todo.title}
      </div>
      <div className="todo-actions">
        <button className="delete-button" onClick={() => onDelete(todo.id)}>Delete</button>
        <button className="like-button">👍</button>
        <button className="dislike-button">👎</button>
      </div>
    </div>
  );
};

export default TodoItem;

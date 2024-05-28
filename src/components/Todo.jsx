import React from "react";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ todo, removeTodo, completeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button onClick={() => completeTodo(todo.id)} className="complete">
          <DoneIcon />
        </button>
        <button onClick={() => removeTodo(todo.id)} className="remove">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default Todo;

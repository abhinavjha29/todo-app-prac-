import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, settodoName] = useState("");
  const [todoDate, settodoDate] = useState("");

  const handleNameChange = (e) => {
    settodoName(e.target.value);
  };

  const handleDatechange = (e) => {
    settodoDate(e.target.value);
  };

  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    settodoName("");
    settodoName("");
  };
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleDatechange} />
        </div>
        <div className="col-2">
          <button
            onClick={handleAddButton}
            type="button"
            className="btn btn-success kg-button"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

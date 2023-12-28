import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  let [todoItems, settodoItems] = useState([]);
  let onNewitem = (itemName, itemDueDate) => {
    console.log(`name=${itemName} date is ${itemDueDate}`);
    const newTdodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];

    settodoItems(newTdodoItems);
  };
  const handleDeleteButton = (todoItemName) => {
    let newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    settodoItems(newTodoItems);
    console.log(`item deleted ${todoItemName}`);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={onNewitem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        handleDeleteButton={handleDeleteButton}
      ></TodoItems>
    </center>
  );
}

export default App;

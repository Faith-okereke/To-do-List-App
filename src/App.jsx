import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState([]);

  const AddItem = (e) => {
    e.preventDefault();
    if (!item) {
      alert("Enter a new Task");
      return;
    }
    const items = {
      id: Math.floor(Math.random() * 1000),
      value: item,
    };
    setTasks((prevList) => [...prevList, items]);
    setItem("");
  };
  const DeleteItems = (id) => {
    const newArray = tasks.filter((itemsi) => itemsi.id !== id);
    setTasks(newArray);
    console.log(id);
  };
  return (
    <div>
      <h2>My To-do List</h2>
      <form id="form" action="">
        <input
          onChange={(event) => {
            setItem(event.target.value);
          }}
          type="text"
          className="inputtask"
          value={item}
          name="Input"
          placeholder="What do you want to do?"
        />
        <button onClick={AddItem}>Add task</button>
      </form>
      <ul>
        {tasks.map((item) => {
          return (
            <div className="enter">
              <li key={item.id}>{item.value}</li>

              <span onClick={() => DeleteItems(item.id)}>&times;</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

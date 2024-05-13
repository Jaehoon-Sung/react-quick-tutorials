import { useState } from "react";

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDoList((prev) => [toDo, ...prev]);
    setToDo("");
  };
  console.log(toDoList);

  return (
    <div>
      <h1>My TO Dos! currently {toDoList.length} tasks.</h1>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={toDo} placeholder="Write your To Do!" />
        <button>Add To Do!</button>
      </form>
      <div>
        <ul>
          {toDoList.map((item, index) => (
            <li key={index}>item</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDo;

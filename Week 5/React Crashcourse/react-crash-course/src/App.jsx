import "./App.css";
import Todo from "./Components/Todo.jsx";
import TodoHeader from "./Components/TodoHeader.jsx";
import Modal from "./Components/Modal";
import React, { useState, useEffect } from "react";
import Counter from "./Components/Counter";

function App() {
  // return <Counter></Counter>
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }


  useEffect(() => {
    console.log("on mount")
  }, [])

  return (
    <>
      <TodoHeader></TodoHeader>
      <div className="todo__wrapper">
        <div>
          <input
            type="text"
            onChange={(event) => {
              console.log(event.target.value);
            }}
          />
          <button onClick={() => setShowModal(true)}>Add todo</button>
        </div>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
          para="Code along with FES step by step"
        ></Todo>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish interview section"
          para="Finish every interviw questions in the next 6 weeks"
        ></Todo>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Land a $100k job"
          para="apply to 100 jobs"
        ></Todo>
      </div>

      {showModal && (
        <Modal closeModal={closeModal} title="Are you sure?"></Modal>
      )}
    </>
  );
}

export default App;

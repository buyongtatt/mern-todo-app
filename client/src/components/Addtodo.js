import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import axios from "../axios";

function Addtodo() {
  const [input, setInput] = useState("");
  const [{ todos }, dispatch] = useStateValue();

  const addTodo = (e) => {
    e.preventDefault();
    axios.post("/todos", { title: input }).then((res) =>
      dispatch({
        type: "ADD",
        payload: res.data,
      })
    );

    setInput("");
  };

  return (
    <form action="">
      <input
        type="text"
        className="form-control rounded-0"
        placeholder="Write your todo here ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="form-control rounded-0 btn-secondary"
        type="submit"
        onClick={addTodo}
        disabled={!input}
      >
        Add Todo
      </button>
    </form>
  );
}

export default Addtodo;

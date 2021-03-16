import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import Todo from "./Todo";
import axios from "../axios";

function Todos() {
  const [{ todos }, dispatch] = useStateValue();

  useEffect(() => {
    axios.get("/todos").then((res) => {
      dispatch({
        type: "INITIAL",
        payload: res.data,
      });
    });
    console.log(todos);
  }, []);

  return todos.map((t) => (
    <Todo title={t.title} id={t._id} complete={t.complete}></Todo>
  ));
}

export default Todos;

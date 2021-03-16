import { useStateValue } from "../StateProvider";
import axios from "../axios";

function Todo({ title, id, complete }) {
  const [{}, dispatch] = useStateValue();

  const taskStatus = () => {
    if (!complete) {
      dispatch({
        type: "DONE",
        payload: id,
      });
    } else {
      dispatch({
        type: "UNDO",
        payload: id,
      });
    }
  };

  const remove = () => {
    axios.delete(`/todos/${id}`).then(() =>
      dispatch({
        type: "REMOVE",
        payload: id,
      })
    );
  };

  return (
    <h3
      className="text-dark text-center p-1 bg-light border-bottom d-flex justify-content-between"
      style={
        complete
          ? { textDecoration: "line-through" }
          : { textDecoration: "none" }
      }
    >
      <i
        className="far fa-times-circle fa-sm float-left m-1 text-danger"
        onClick={remove}
      ></i>
      {title}

      <input
        type="checkbox"
        className="m-2 float-right"
        value={complete}
        onChange={taskStatus}
      />
    </h3>
  );
}

export default Todo;

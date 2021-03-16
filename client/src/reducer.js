export const initialState = {
  todos: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIAL":
      return {
        todos: action.payload,
      };

    case "DONE":
      return {
        todos: state.todos.map((t) => {
          if (t._id === action.payload) {
            t.complete = true;
          }

          return t;
        }),
      };
    case "UNDO":
      return {
        todos: state.todos.map((t) => {
          if (t._id === action.payload) {
            t.complete = false;
          }

          return t;
        }),
      };

    case "REMOVE":
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };

    case "ADD":
      return {
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};

export default reducer;

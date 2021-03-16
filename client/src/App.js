import Addtodo from "./components/Addtodo";
import Header from "./components/Header";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="app-container">
      <Header />
      <Addtodo />
      <Todos />
    </div>
  );
}

export default App;

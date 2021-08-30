import NewTodo from "./components/newTodo";
import Todos from "./components/Todos";
import "./App.css";
import TodosContextProvider from "./store/todos-context";

function App() {
    return (
        <TodosContextProvider>
            <NewTodo />
            <Todos />
        </TodosContextProvider>
    );
}

export default App;

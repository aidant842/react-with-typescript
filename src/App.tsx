import NewTodo from "./components/newTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

import { useState } from "react";

import "./App.css";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    /* const todos = [new Todo("Learn React"), new Todo("Learn Typescript")]; */

    const addTodoHandler = (todoText: string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler} />
            <Todos items={todos} />
        </div>
    );
}

export default App;

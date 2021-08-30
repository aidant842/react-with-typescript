import React, { useContext } from "react";
import TodoItem from "./todoItem";

import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

// React.FC is a generic type, FC stands for functional component
const Todos: React.FC = () => {
    const todosCtx = useContext(TodosContext);

    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                <TodoItem
                    key={item.id}
                    text={item.text}
                    onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
                />
            ))}
        </ul>
    );
};

export default Todos;

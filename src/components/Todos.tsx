import React from "react";
import Todo from "../models/todo";
import TodoItem from "./todoItem";

import classes from "./Todos.module.css";

// React.FC is a generic type, FC stands for functional component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} />
            ))}
        </ul>
    );
};

export default Todos;

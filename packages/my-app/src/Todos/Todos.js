import React from 'react';
import { useAsync } from "react-async";
import { createTodoFetcher } from "./createTodoFetcher";
import { Todo } from "./Todo";

const fetchTodos = createTodoFetcher();

export function Todos() {
    const { data : todos, error, isLoading } = useAsync(
        fetchTodos,
        {
            watch: false // Only fetch once for now.
        }
    );
    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>There was an error. Sorry.</div>
    }
    if(!todos.length) {
        return <div>There are no todos.</div>
    }
    return (
        <ul>
            {todos.map(todo=>(
                <li><Todo todo={todo}/></li>
            ))}
        </ul>
    );
}

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";



function TodoForm(
    //     {
    //     todo,
    //     setTodo,
    //     addTodo,
    //     updateTodo
    //   }
) {
    const { todo } = useSelector((state) => state.todosReducer);
    const dispatch = useDispatch();

    return (
        <li className="list-group-item">
            <button onClick={() => addTodo(todo)}> Add </button>
            <button onClick={() => updateTodo(todo)}> Update </button>
            <input
                value={todo.title}
                onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
        </li>
    );
}
export default TodoForm;

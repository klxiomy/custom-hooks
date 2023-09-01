import { useEffect, useReducer } from "react";
import { TodoReducer } from "../08-useReducer/TodoReducer";



const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const UseTodos = () => {

    
    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] Remove Todo',
            payload: id
        })
    }
    const handelToggleTodo = (id) => {
        console.log(id);
        dispatch({
            type:'[TODO] Toggle Todo',
            payload: id
        })
    }
    
        

        return{
            todos,
            todosCount:todos.length,
            pendingTodosCount:todos.filter(todo=> !todo.done).length,
            handelToggleTodo,
            handleDeleteTodo,
            handleNewTodo,init
        }
}
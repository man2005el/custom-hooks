import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-Reducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse( localStorage.getItem('todos') || [])
}

export const useTodo = (todo) => {

    const [state, dispatch] = useReducer(todoReducer, initialState , init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state))
    }, [state])


    const handleNewTodo = (todo) => {
        const addTodo = {
            type:'[TODO] ADD',
            payload:todo,
        }

    dispatch(addTodo);}

    const handleDeleteTodo = (id) => {
        dispatch({
            type:'[TODO] REMOVE',
            payload: id,
        })
    }

    const handleDoneTodo = (id) => {
        dispatch({
            type:'[TODO] DONE',
            payload: id,
        })
    }
    
    return {
        handleDeleteTodo,
        handleDoneTodo,
        handleNewTodo,
        state,
        init,
        pendingTodo: state.filter(todo => !todo.done).length,
        todoCount:state.length,
    }
}

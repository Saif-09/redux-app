//this slice will be responsible for tracking of initial state of the store as well as all the reducers will be collected here.

//It will be like the starting point of the store

import {createSlice, nanoid} from '@reduxjs/toolkit';

//nanoid is given by redux which can be used as a unique id

const initialState = {
    todos:[],
}

export const todoSlice = createSlice({
    name: 'todo', //The name is important for later use in reducers. It should match with reducer's file name
    initialState,//This is where we are going to keep our data initially
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions;

export default todoSlice.reducer
import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

const AddTodos = () => {

    const [input, setInput] = useState("");
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <div>
      
    </div>
  )
}

export default AddTodos

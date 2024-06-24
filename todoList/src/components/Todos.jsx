import { Button } from 'flowbite-react';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';


export default function Todos() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  return (
    <>
    <div className='text-3xl mt-4 m-2'>Todos List Items</div>
    {todos.map((todo) => (
      <div className='flex justify-between items-center list-none bg-slate-900 p-3 rounded w-1/3 mt-2 text-white'>
        <li key={todo.id}>{todo.text}
      </li>
      <Button color="failure" onClick={() => dispatch(removeTodo(todo.id))}>Delete</Button>
      </div>
     
    ))}
    </>
  )
}

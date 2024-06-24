import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-4xl font-bold mt-8'>Learn about redux toolkit</h1>
      <div className='flex flex-col items-center justify-center' >
      <AddTodo />
      <Todos />
      </div>
    </>
  )
}

export default App

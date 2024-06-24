import { useState } from 'react'
import AddTodo from './components/AddTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-4xl font-bold mt-8'>Learn about redux toolkit</h1>
      <div className='flex justify-center' >
      <AddTodo />
      </div>
    </>
  )
}

export default App

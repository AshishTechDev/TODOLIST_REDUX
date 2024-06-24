import { useState } from "react";
import { Button, TextInput } from "flowbite-react";

export default function AddTodo() {
  const [input, setInput] = useState("");

  const addTodoHandler = (e) => {
    e.preventDefault();
    console.log(input);
  }
  return (
    <form onSubmit={addTodoHandler} className="flex flex-row justify-between items-center gap-5 bg-black p-4 rounded w-1/3 mt-6">
      <TextInput id="email1" type="text" placeholder="Add Todo Item" required className="w-4/5" value={input} onChange={(e) => setInput(e.target.value)}  />
  
      <Button type="submit" gradientDuoTone="purpleToBlue" className="w-1/5">Add Todo</Button>

  </form>

  )
}

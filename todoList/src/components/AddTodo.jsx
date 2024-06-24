import { Button, TextInput } from "flowbite-react";
export default function AddTodo() {
  return (
    <form className="flex flex-row justify-between items-center gap-5 bg-black p-4 rounded w-1/3 mt-6">
      <TextInput id="email1" type="email" placeholder="Add Todo Item" required className="w-4/5" />
  
      <Button gradientDuoTone="purpleToBlue" className="w-1/5">Add Todo</Button>

  </form>

  )
}

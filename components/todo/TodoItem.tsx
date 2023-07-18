type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  price: number
  category: string
  description: string
  image: Buffer | null
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({
  id,
  title,
  complete,

  description,
  toggleTodo,
}: TodoItemProps) {
  const handleToggleTodo = () => {
    toggleTodo(id, !complete)
  }

  return (
    <li className="border border-gray-200 rounded-md p-4 mb-2 bg-pink-50 flex flex-col items-start">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p className="mt-2 text-gray-700">{description}</p>
        <button
          onClick={handleToggleTodo}
          className={`mt-4 py-2 px-4 border rounded-md ${
            complete
              ? "border-green-500 text-green-500"
              : "border-red-500 text-red-500"
          }`}
        >
          {complete ? "Undo" : "Complete"}
        </button>
      </div>
    </li>
  )
}

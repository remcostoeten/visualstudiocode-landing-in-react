"use client"

type TodoItemProps = {
  id: string
  title: string
  complete: boolean
  price: number
  category: string
  description: string
  toggleTodo: (id: string, complete: boolean) => void
}

export function TodoItem({
  id,
  title,
  complete,
  price,
  category,
  description,
  toggleTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={complete}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
      >
        {title}
      </label>
      <span>{price}</span>
      <span>{category}</span>
      <span>{description}</span>
    </li>
  )
}

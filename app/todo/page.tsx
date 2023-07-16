import Link from "next/link"

import { prisma } from "@/lib/db"
import { TodoItem } from "@/components/todo/TodoItem"

function getTodos() {
  return prisma.todo.findMany()
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getTodos()

  return (
    <>
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        href="/new"
      >
        New
      </Link>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem
            image={todo.image}
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
          />
        ))}
      </ul>
    </>
  )
}

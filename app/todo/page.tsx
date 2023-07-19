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
    <div className="flex flex-col  min-h-screen py-2">
      <div className="text-3xl font-semibold text-gray-700">Todos</div>
      <Link
        className="inline-block  w-[100px] rounded-md border border-blue-500 px-4 py-2 text-blue-500 mt-4 transition-all hover:bg-blue-500 hover:text-white focus:outline-none"
        href="/new"
      >
        {" "}
        New{" "}
      </Link>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem {...todo} toggleTodo={toggleTodo} />
          </li>
        ))}
      </ul>
    </div>
  )
}

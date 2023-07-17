import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableRow } from "shadcn-ui"

import { prisma } from "@/lib/db"
import { TodoItem } from "@/components/todo/TodoItem"

Table

export default function Home({ todos }) {
  async function toggleTodo(id, complete) {
    await prisma.todo.update({ where: { id }, data: { complete } })
  }

  async function removeTodo(id) {
    await prisma.todo.delete({ where: { id } })
  }

  return (
    <>
      <h1 className="text-2xl">Todos</h1>
      <Link
        className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
        href="/new"
      >
        New
      </Link>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export async function getServerSideProps() {
  const todos = await prisma.todo.findMany()
  return {
    props: {
      todos,
    },
  }
}

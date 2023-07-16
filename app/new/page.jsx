import Link from "next/link"
import { redirect } from "next/navigation"

import { prisma } from "@/lib/db"

async function createTodo(data) {
  "use server"

  const title = data.get("title")?.valueOf()
  const price = data.get("price")?.valueOf()
  const category = data.get("category")?.valueOf()
  const description = data.get("description")?.valueOf()

  const imageFile = data.get("image")
  const image = await imageFile.arrayBuffer()

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
      price: typeof price === "number" ? parseFloat(price) : 0, //Defeating to 0 if price is not provided
      category: typeof category === "string" ? category : "",
      description: typeof description === "string" ? description : "",
      image: new Uint8Array(image),
    },
  })
  redirect("/")
}

export default function Page() {
  return (
    <>
      <form action={createTodo} className="flex gap-2 flex-col max-w-[50%]">
        <input
          type="text"
          name="title"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="number"
          name="price"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <select
          name="category"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        >
          <option value="">Select category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <textarea
          name="description"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <input
          type="file"
          name="image"
          className="border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}
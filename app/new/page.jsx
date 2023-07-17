import Link from "next/link"
import { redirect } from "next/navigation"

import { prisma } from "@/lib/db"
import { Input } from "@/components/ui/input"

async function createTodo(data) {
  "use server"

  const title = data.get("title")?.valueOf()
  const price = data.get("price")?.valueOf()
  const category = data.get("category")?.valueOf()
  const description = data.get("description")?.valueOf()
  const url = data.get("url")?.valueOf() // added url field

  const imageFile = data.get("image")
  const image = await imageFile.arrayBuffer()

  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title")
  }

  await prisma.todo.create({
    data: {
      title,
      complete: false,
      price: typeof price === "number" ? parseFloat(price) : 0, //Defaulting to 0 if price is not provided
      category: typeof category === "string" ? category : "",
      description: typeof description === "string" ? description : "",
      image: new Uint8Array(image),
      url: typeof url === "string" ? url : "", // added the url field
    },
  })
  redirect("/todo")
}

export default function Page() {
  return (
    <>
      <form action={createTodo} className="flex max-w-[50%] flex-col gap-2">
        <Input
          type="text"
          name="title"
          placeholder="Title"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />

        <Input
          type="number"
          placeholder="Price"
          name="price"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <select
          name="category"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        >
          <option value="">Select category</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <Input
          type="file"
          name="image"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <Input
          type="text"
          name="url"
          placeholder="URL"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex justify-end gap-1">
          <Link
            href=".."
            className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
          >
            Create
          </button>
        </div>
      </form>
    </>
  )
}

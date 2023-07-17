import Link from "next/link"
import { redirect } from "next/navigation"

import { prisma } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

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
      price: typeof price === "number" ? parseFloat(price) : 0,
      category: typeof category === "string" ? category : "",
      description: typeof description === "string" ? description : "",
      image: new Uint8Array(image),
      url: typeof url === "string" ? url : "",
    },
  })
  redirect("/")
}

export default function Page() {
  return (
    <Form action={createTodo} className="flex max-w-[50%] flex-col gap-2">
      <Input type="text" name="title" placeholder="Title" />
      <Input type="number" name="price" placeholder="Price" />
      <Input type="text" name="url" placeholder="URL" />
      <div className="flex justify-end gap-1">
        <Link
          href=".."
          className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
        >
          Cancel
        </Link>
        <Button
          type="submit"
          className="rounded border border-slate-300 px-2 py-1 text-slate-300 outline-none focus-within:bg-slate-700 hover:bg-slate-700"
        >
          Create
        </Button>
      </div>
    </Form>
  )
}

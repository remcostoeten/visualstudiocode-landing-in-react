import { prisma } from "@/lib/db"
import { Input } from "@/components/ui/input"

async function createExpense(data) {
  "use server"

  const cost = parseInt(data.get("cost")) // changed from "expense" to "cost"
  const name = data.get("name")

  await prisma.expense.create({
    data: {
      cost: cost,
      name,
    },
  })
}

export default function NewExpense() {
  return (
    <>
      <form action={createExpense} className="flex max-w-[50%] flex-col gap-2">
        <Input
          type="number"
          name="cost" // changed from "expense" to "cost"
          placeholder="amount"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <Input
          type="text"
          name="name"
          placeholder="name"
          className="rounded border border-slate-300 bg-transparent px-2 py-1 outline-none focus-within:border-slate-100"
        />
        <div className="flex justify-end gap-1">
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

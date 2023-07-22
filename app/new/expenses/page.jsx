import { redirect } from "next/navigation"

import { prisma } from "@/lib/db"
import { Input } from "@/components/ui/input"

async function createIncome(data) {
  "use server"

  const income = parseInt(data.get("income"))

  if (isNaN(income)) {
    throw new Error("Invalid income value")
  }

  await prisma.income.create({
    data: {
      income,
    },
  })
  redirect("/expenses")
}

export default function Page() {
  return (
    <>
      <form action={createIncome} className="flex max-w-[50%] flex-col gap-2">
        <Input
          type="text"
          name="income" // <-- Change this to "income"
          placeholder="Income"
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

import { prisma } from "@/lib/db"

function getIncome() {
  return prisma.income.findMany()
}

export default async function renderIncome() {
  const data = await getIncome()

  return (
    <ul>
      {data.map((entry) => (
        <li key={entry.id}>€⟩{entry.income}</li>
      ))}
    </ul>
  )
}

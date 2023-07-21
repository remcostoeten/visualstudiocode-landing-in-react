import { TrashIcon } from "@radix-ui/react-icons"

import { prisma } from "@/lib/db"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import NewExpense from "@/components/expenses/newExpense"

function getIncome() {
  return prisma.income.findMany()
}

function getExpenses() {
  return prisma.expense.findMany()
}

export default async function Home() {
  const data = await getIncome()
  const expenses = await getExpenses()

  const totalExpense = expenses.reduce((total, entry) => total + entry.cost, 0)

  return (
    <>
      <div className="flex justify-between w-[50vw]">
        <ul>
          <h2>Income</h2>
          {data.map((entry) => (
            <li key={entry.id}>€{entry.income}</li>
          ))}
        </ul>
        <div>
          <h2>Expenses</h2>
          <NewExpense />
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Item</TableHead>
              <TableHead>Prijs</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {expenses.map((entry) => (
              <>
                <TableRow key={entry.id}>
                  <TableCell className="font-medium">{entry.item}</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell className="text-right">€{entry.cost}</TableCell>
                </TableRow>
                <TrashIcon />
              </>
            ))}
            <TableHeader>
              <TableRow>
                <TableHead>Total</TableHead>
                <TableHead className="text-right">€{totalExpense}</TableHead>
              </TableRow>
            </TableHeader>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

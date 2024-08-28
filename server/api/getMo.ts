import { sql } from "@vercel/postgres"

export default defineEventHandler(async (event) => {

  const { rows }: { rows: Order[] } = await sql`SELECT * FROM orders WHERE isActive = 1`

  rows.map(async row => {
    row.progress = await JSON.parse(row.progress || '')
  })

  return rows
})

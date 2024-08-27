import { sql } from "@vercel/postgres"

export default defineEventHandler(async (event) => {

  const { rows }: { rows: Planet[] } = await sql`SELECT * FROM activePlanets`

  rows.sort((a, b) => b.percentage - a.percentage)

  return rows
})
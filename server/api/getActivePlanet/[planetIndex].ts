import { sql } from "@vercel/postgres"

export default defineEventHandler(async (event) => {

  const id = getRouterParam(event, 'planetIndex')

  const { rows }: { rows: Planet[] } = await sql`SELECT * FROM activePlanets WHERE planetIndex = ${Number(id)}`

  return rows
})
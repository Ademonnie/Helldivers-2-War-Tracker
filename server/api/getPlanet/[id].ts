import { sql } from "@vercel/postgres"

export default defineEventHandler(async (event) => {

  const id = getRouterParam(event, 'id')

  const { rows }: { rows: InactivePlanet[] } = await sql`SELECT * FROM planets WHERE id = ${Number(id)}`

  return rows 
})

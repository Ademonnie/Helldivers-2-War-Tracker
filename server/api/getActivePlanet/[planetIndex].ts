export default defineEventHandler(async (event) => {
   
  const db = useDatabase('db')

  const id = getRouterParam(event, 'planetIndex')

  const { rows }: { rows: Planet[] } = await db.sql`SELECT * FROM activePlanets WHERE planetIndex = ${Number(id)}`

  return rows
})
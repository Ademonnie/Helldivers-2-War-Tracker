export default defineEventHandler(async (event) => {
   
  const db = useDatabase('db')

  const id = getRouterParam(event, 'id')

  const { rows }: { rows: InactivePlanet[] } = await db.sql`SELECT * FROM planets WHERE id = ${Number(id)}`

  return rows 
})

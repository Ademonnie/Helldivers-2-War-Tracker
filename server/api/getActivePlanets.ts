export default defineEventHandler(async (event) => {
   
  const db = useDatabase('db')

  const { rows }: { rows: Planet[] } = await db.sql`SELECT * FROM activePlanets`

  rows.sort((a, b) => b.percentage - a.percentage)

  return rows
})
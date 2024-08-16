export default defineEventHandler(async (event) => {
   
  const db = useDatabase('db')

  const planets = await db.sql`SELECT * FROM planets`

  return planets.rows 
})

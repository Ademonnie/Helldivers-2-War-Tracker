export default defineEventHandler(async (event) => {
  
  const db = useDatabase('db')

  const { rows }: { rows: Order[] } = await db.sql`SELECT * FROM orders WHERE isActive = 1`

  rows?.map(async row => {
    row.progress = await JSON.parse(row.progress || '')
  })

  return rows
})

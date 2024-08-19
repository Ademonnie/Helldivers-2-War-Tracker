export default defineEventHandler(async (event) => {
  
  const db = useDatabase('db')

  const orders = await db.sql`SELECT * FROM orders`

  return orders.rows
})

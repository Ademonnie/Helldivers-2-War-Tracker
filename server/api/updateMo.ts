import { sql } from "@vercel/postgres"
import { waitUntil } from "@vercel/functions"

export function GET(request: Request) {
  try {
    const getMoData = async () => {
      const response = await fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')
    
      return await response.json()
    }

    waitUntil(getMoData()
      .then((orders) => {
        orders.forEach(async (order) => {
          const brief = order.setting.overrideBrief
          const description = order.setting.taskDescription
  
          const tasks = JSON.stringify(order.setting.tasks)
          const progress = JSON.stringify(order.progress)
  
          await sql`INSERT INTO orders 
            (
              id32,
              expiresIn,
              brief,
              description,
              tasks,
              progress,
              isActive
            )
  
            VALUES 
  
            (
              ${order.id32},
              ${order.expiresIn},
              ${brief},
              ${description},
              ${tasks},
              ${progress},
              ${1}
            )
  
            ON CONFLICT(id32) DO UPDATE SET expiresIn = ${order.expiresIn}, progress = ${progress}
          `
  
          await sql`UPDATE orders SET isActive = 0 WHERE id32 != ${order.id32}`
        }) 
      })
    )

    console.log('Updated MO!')

    return { result: 'success'}
  } catch (e) {
    console.error(e)

    return { result: 'failure'}
  }
}
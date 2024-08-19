import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const getMo = () => {
  const response = fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')

  return response
}

const cleanTable = db.prepare('DELETE FROM orders')
const insertData = db.prepare('INSERT INTO orders (id32, expiresIn, brief, description, tasks) VALUES (?, ?, ?, ?, ?)')

getMo()
  .then((res) => {
    cleanTable.run()
    return res.json()
  }).then(data => {
    data.forEach(order => {
      const brief = order.setting.overrideBrief 
      const description = order.setting.taskDescription

      const tasks = JSON.stringify(order.setting.tasks)

      insertData.run(order.id32, order.expiresIn, brief, description, tasks)
    })
    db.close()
  })
import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const getMo = () => {
  const response = fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')

  return response
}

const insertData = db.prepare(`
  INSERT INTO orders 
    (id32, expiresIn, brief, description, tasks, progress, isActive)
  VALUES 
    ($id32, $expiresIn, $brief, $description, $tasks, $progress, $isActive) 
  ON CONFLICT(id32) DO UPDATE SET 
    expiresIn = $expiresIn,
    progress = $progress
    `)

const updateOldOrders = db.prepare(`
    UPDATE orders SET isActive = 0 WHERE id32 != $id32
`)
    
getMo()
  .then((res) => {
    return res.json()
  }).then(data => {
    if (data.length === 0) {
      updateOldOrders.run({
        id32: 0
      })
    }
    data.forEach(order => {
      const brief = order.setting.overrideBrief 
      const description = order.setting.taskDescription

      const tasks = JSON.stringify(order.setting.tasks)
      const progress = JSON.stringify(order.progress)
      insertData.run({
        id32: order.id32,
        expiresIn: order.expiresIn,
        brief: brief,
        description: description,
        tasks: tasks,
        progress: progress,
        isActive: 1
      })
      updateOldOrders.run({
        id32: order.id32
      })
    })
    db.close()
  })
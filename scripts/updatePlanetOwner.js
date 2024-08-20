import Database from 'better-sqlite3'


const db = new Database('./.data/dbfile.sqlite3')

const getPlanetOwner = () => {
  const response = fetch('https://helldiverstrainingmanual.com/api/v1/war/status')

  return response
}

const updateData = db.prepare(`UPDATE planets SET owner = ? WHERE id = ?`)

const insertMany = db.transaction((owners) => {
  owners.forEach((el) => {
    updateData.run(el.owner, el.index)
  })
}) 

getPlanetOwner()
  .then((res) => {
    return res.json()
  }).then(data => {
    const owners = []
    const planets = data.planetStatus || []
    planets.forEach(planet => {
      let owner = ''
      switch (planet.owner) {
        case 2:
          owner = 'Terminids'
          break
        case 3:
          owner = 'Automatons'
          break
        default: 
          owner = 'Super-Earth'
      }
      owners.push({index: planet.index, owner})
    })
    insertMany(owners)
    db.close()
  })
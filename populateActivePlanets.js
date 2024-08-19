import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const getPlanetData = () => {
  const response = fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')

  return response
}

const cleanTable = db.prepare('DELETE FROM planets')
const insertData = db.prepare('INSERT INTO planets (planetIndex, name, faction, players, health, maxHealth, percentage, defense, majorOrder, biome, expireDateTime) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')

getPlanetData()
  .then((test) => {
    cleanTable.run()
    return test.json()
  }).then(data => {
    data.forEach(planet => {
      const biome = JSON.stringify(planet.biome)
      const majorOrder = planet.majorOrder ? 1 : 0
      const defense = planet.defense ? 1 : 0

      insertData.run(planet.planetIndex, planet.name, planet.faction, planet.players, planet.health, planet.maxHealth, planet.percentage, defense, majorOrder, biome, planet.expireDateTime)
    })
    db.close()
  })




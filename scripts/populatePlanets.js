import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const getPlanetData = () => {
  const response =   fetch('https://helldiverstrainingmanual.com/api/v1/planets')

  return response
}

const cleanTable = db.prepare('DELETE FROM planets')
const insertData = db.prepare('INSERT INTO planets (id, name, biome, environmentals) VALUES (?, ?, ?, ?)')

const insertMany = db.transaction((planets) => {
  planets.forEach((el) => {
    insertData.run(el.index, el.name, el.biome, el.environmentals)
  });
})

getPlanetData()
  .then((res) => {
    cleanTable.run()
    return res.json()
  }).then(data => {
    const planets = []
    Object.keys(data).forEach(el => {
      const biome = JSON.stringify(data[el]?.biome)
      const environmentals =  JSON.stringify(data[el]?.environmentals)
      const name = data[el]?.name

      planets.push({index: el, name, biome, environmentals})
    })
    insertMany(planets)
    db.close()
  })


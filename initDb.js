import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const initOrders = db.prepare(`CREATE TABLE IF NOT EXISTS orders
  
  (
    id32 INTEGER PRIMARY KEY,
    expiresIn INTEGER,
    brief STRING,
    description STRING,
    tasks STRING
  )

`)

const initPlanets = db.prepare(`CREATE TABLE IF NOT EXISTS planets
  
  (
    planetIndex INTEGER PRIMARY KEY,
    name STRING,
    faction STRING,
    players INTEGER,
    health INTEGER,
    maxHealth INTEGER,
    precentage NUMBER,
    defense INTEGER,
    majorOrder INTEGER,
    biome STRING,
    expireDateTime NUMBER,
  )
  
`)

initOrders.run()
initPlanets.run()
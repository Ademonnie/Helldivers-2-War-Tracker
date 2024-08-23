import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const initOrders = db.prepare(`CREATE TABLE IF NOT EXISTS orders
  
  (
    id32 INTEGER PRIMARY KEY,
    expiresIn INTEGER,
    brief STRING,
    description STRING,
    tasks STRING,
    progress STRING
  )

`)

const initActivePlanets = db.prepare(`CREATE TABLE IF NOT EXISTS activePlanets
  
  (
    planetIndex INTEGER PRIMARY KEY,
    name STRING,
    faction STRING,
    players INTEGER,
    health INTEGER,
    maxHealth INTEGER,
    percentage NUMBER,
    defense INTEGER,
    majorOrder INTEGER,
    biome STRING,
    expireDateTime NUMBER
  )
  
`)

const initPlanets = db.prepare(`CREATE TABLE IF NOT EXISTS planets
  
  (
    id INTEGER PRIMARY KEY,
    name STRING,
    biome STRING,
    environmentals STRING,
    owner STRING
  )

`)

initOrders.run()
initActivePlanets.run()
initPlanets.run()
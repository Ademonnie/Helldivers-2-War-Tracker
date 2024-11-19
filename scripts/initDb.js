import Database from 'better-sqlite3'

const db = new Database('./.data/dbfile.sqlite3')

const initOrders = db.prepare(`CREATE TABLE IF NOT EXISTS orders
  
  (
    id32 NUMBER PRIMARY KEY,
    expiresIn NUMBER,
    isActive NUMBER,
    brief STRING,
    description STRING,
    tasks STRING,
    progress STRING
  )

`)

const initActivePlanets = db.prepare(`CREATE TABLE IF NOT EXISTS activePlanets
  
  (
    planetIndex NUMBER PRIMARY KEY,
    name STRING,
    faction STRING,
    players NUMBER,
    health NUMBER,
    maxHealth NUMBER,
    percentage NUMBER,
    defense NUMBER,
    majorOrder NUMBER,
    biome STRING,
    expireDateTime NUMBER
  )
  
`)

const initPlanets = db.prepare(`CREATE TABLE IF NOT EXISTS planets
  
  (
    id NUMBER PRIMARY KEY,
    name STRING,
    biome STRING,
    environmentals STRING,
    owner STRING
  )

`)

initOrders.run()
initActivePlanets.run()
initPlanets.run()
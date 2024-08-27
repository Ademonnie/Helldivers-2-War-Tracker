import { sql } from "@vercel/postgres"

export default defineNitroPlugin(() => {

  try {
  
  sql`CREATE TABLE IF NOT EXISTS orders
  
  (
      id32 INTEGER PRIMARY KEY,
      expiresIn INTEGER,
      brief STRING,
      description STRING,
      tasks STRING,
      progress STRING,
      isActive INTEGER
  )
  
  `
  
  sql`CREATE TABLE IF NOT EXISTS activePlanets
  
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
  
  `
  
  sql`CREATE TABLE IF NOT EXISTS planets
  
  (
      id INTEGER PRIMARY KEY,
      name STRING,
      biome STRING,
      environmentals STRING,
      owner STRING
  )
  
  `
  
  } catch (e) {
    console.error(e, " Failed to initialise database")
  }
})

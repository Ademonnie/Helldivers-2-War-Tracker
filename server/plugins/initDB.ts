import { sql } from "@vercel/postgres"

export default defineNitroPlugin(() => {

  try {
  
  sql`CREATE TABLE IF NOT EXISTS orders
  
  (
      id32 INTEGER PRIMARY KEY,
      expiresIn INTEGER,
      brief TEXT,
      description TEXT,
      tasks TEXT,
      progress TEXT,
      isActive INTEGER
  )
  
  `
  
  sql`CREATE TABLE IF NOT EXISTS activePlanets
  
  (
      planetIndex INTEGER PRIMARY KEY,
      name TEXT,
      faction TEXT,
      players INTEGER,
      health INTEGER,
      maxHealth INTEGER,
      percentage NUMERIC,
      defense INTEGER,
      majorOrder INTEGER,
      biome TEXT,
      expireDateTime NUMERIC
  )
  
  `
  
  sql`CREATE TABLE IF NOT EXISTS planets
  
  (
      id INTEGER PRIMARY KEY,
      name TEXT,
      biome TEXT,
      environmentals TEXT,
      owner TEXT
  )
  
  `

  } catch (e) {
    console.error(e, " Failed to initialise database")
  }
})

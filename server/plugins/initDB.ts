export default defineNitroPlugin(() => {

  const db = useDatabase('db')

  try {
  
    db.sql`CREATE TABLE IF NOT EXISTS orders
    
    (
        id32 BIGINT PRIMARY KEY,
        expiresIn NUMBER,
        brief STRING,
        description STRING,
        tasks STRING,
        progress STRING,
        isActive NUMBER
    )
    
    `
    
   db.sql`CREATE TABLE IF NOT EXISTS activePlanets
    
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
    
    `
    
    db.sql`CREATE TABLE IF NOT EXISTS planets
    
    (
        id NUMBER PRIMARY KEY,
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

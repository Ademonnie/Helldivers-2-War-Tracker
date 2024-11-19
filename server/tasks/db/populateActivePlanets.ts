export default defineTask({
  meta: {
    name: "db:populateActivePlanets",
    description: "Update the currently active planets"
  },
  async run() {

    const db = useDatabase('db')
    try {
      const getPlanetData = async () => {
        const response = await fetch('https://helldiverstrainingmanual.com/api/v1/war/campaign')
      
        return await response.json()    
      }

      await db.sql`DELETE FROM activePlanets`

      const data = await getPlanetData()

      data.forEach(async (planet) => {
        const biome = JSON.stringify(planet.biome)
        const majorOrder = planet.majorOrder ? 1 : 0
        const defense = planet.defense ? 1 : 0

        await db.sql`INSERT INTO activePlanets 
        (
          planetIndex,
          name,
          faction,
          players,
          health,
          maxHealth,
          percentage,
          defense,
          majorOrder,
          biome,
          expireDateTime
        ) 
          VALUES 
        (
          ${planet.planetIndex},
          ${planet.name},
          ${planet.faction},
          ${planet.players},
          ${planet.health},
          ${planet.maxHealth},
          ${planet.percentage},
          ${defense},
          ${majorOrder},
          ${biome},
          ${planet.expireDateTime}
        )`
      })

      console.log("Planets updated!")
      return { result: 'success' }

      } catch (e) {
        console.error(e)
        return { result: 'failure' }
      }
    }
})
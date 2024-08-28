import { sql } from "@vercel/postgres"

export default defineTask({
  meta: {
    name: 'db:populatePlanets',
    description: 'Update general planets data'
  },
  async run() {
    try {

      const getPlanetData = async () => {
        const response = await fetch('https://helldiverstrainingmanual.com/api/v1/planets')
      
        return await response.json()
      }

      const planets = await getPlanetData()

      Object.keys(planets).forEach(async el => {
        const biome = JSON.stringify(planets[el]?.biome)
        const environmentals = JSON.stringify(planets[el]?.environmentals)
        const name = planets[el]?.name

        await sql`INSERT INTO planets
          (
            id,
            name,
            biome,
            environmentals
          )

          VALUES

          (
            ${el},
            ${name},
            ${biome},
            ${environmentals}
          )

        `
      })

      return { result: 'success' }
    } catch (e) {
      console.error(e)
      return { result: 'failed'}
    }
  }
})
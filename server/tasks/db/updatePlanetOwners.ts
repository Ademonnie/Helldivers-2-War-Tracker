import { sql } from "@vercel/postgres"

export default defineTask({
  meta: {
    name: 'db:updatePlanetOwners',
    description: 'Update the current owner of planets'
  },
  async run() {
    try {
      const getPlanetOwner = async () => {
        const response = await fetch('https://helldiverstrainingmanual.com/api/v1/war/status')

        return await response.json()
      }

      const planetOwners = await getPlanetOwner()

      Array.isArray(planetOwners.planetStatus) && planetOwners.planetStatus.forEach(async item => {
        let owner = ''
        switch (item.owner) {
          case 2:
            owner = 'Terminids'
            break
          case 3:
            owner = 'Automatons'
            break
          default:
            owner = 'Super-Earth'
        }

        await sql`UPDATE planets SET owner = ${owner} WHERE id = ${item.index}`
      })

      return { result: 'success'}
    } catch (e) {
      console.error(e)
      return { result: 'failure'}
    }
  }
})
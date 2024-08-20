export { }

declare global {
  interface Planet {
    planetIndex: number,
    name: string,
    faction: string,
    players: number,
    health: number,
    maxHealth: number,
    percentage: number,
    majorOrder: number,
    defense: number,
    biome: string,
    expireDateTime: number,
  }

  interface InactivePlanet {
    id: number,
    name: string,
    biome: string,
    environmentals: string,
    owner: string
  }

  interface Biome {
    slug: string,
    description: string
  }

  interface Order {
    id32: number,
    expiresIn: number,
    brief: string,
    description: string,
    tasks: string,
    progress: number[],
    isActive: number
  }

  interface Task {
    type: number,
    values: number[],
    valueTypes: number[]
  }

  enum taskTypes {
    controlPlanet = 11,
    defendPlanets = 12
  }
}
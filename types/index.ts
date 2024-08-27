export { }

const planeName = {
  TERMINID: 'Terminids',
  AUTOMATON: 'Automatons'
} as const

type ValueOf<Obj> = Obj[keyof Obj];

declare global {
  interface Planet {
    planetIndex: number,
    name:  string,
    faction: ValueOf<typeof planeName>,
    players: number,
    health: number,
    maxHealth: number,
    percentage: string,
    majorOrder: number,
    defense: number,
    biome: string,
    expiredatetime: number,
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
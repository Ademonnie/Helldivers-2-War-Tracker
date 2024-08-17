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
    biome: string
  }

  interface Biome {
    slug: string,
    description: string
  }
}
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('render:html', async () => {
    await runTask('db:updatePlanetOwners')
    await runTask('db:populateActivePlanets')
    await runTask('db:populateMo')
  })
})
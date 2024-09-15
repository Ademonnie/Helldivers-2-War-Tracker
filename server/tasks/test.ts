export default defineTask({
  meta: {
    name:'test',
    description: 'a test task'
  },
  run() {
    console.log('test task')

    return { result: 'success' }
  }
})
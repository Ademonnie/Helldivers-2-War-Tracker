export default  defineTask({
  meta: {
    name:'test',
    description: 'a test task'
  },
  run() {
    console.warn('test task')

    return { result: 'success' }
  }
})
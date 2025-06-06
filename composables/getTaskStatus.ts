export default function (task: Task, progress: number): boolean {
  let status = false

  switch(task.type) {
    case 3:
      status = task.values[2] === progress
      break
    case 12:
      status = task.values[0] === progress
      break
    default:
      status = progress === 1

  }

  return status
}
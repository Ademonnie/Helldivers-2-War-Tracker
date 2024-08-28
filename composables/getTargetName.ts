export default function (faction: number, type: number): string {
  let targetName = ''

  switch (faction) {
    case 1:
      switch (type) {
        case 2514244534:
          targetName = 'Bile Titans'
          break
        default:
          targetName = 'Terminids'
      }
      break

    case 0: 
      targetName = 'Automatons'
      break

    default:
      targetName = 'Targets'
  }

  return targetName
}
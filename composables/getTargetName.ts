export default function (type: number): string {
  let targetName = ''

  switch (type) {
    case 0:
      targetName = 'Terminids'
      break
    case 2514244534:
      targetName = 'Bile Titans'
  }

  return targetName
}
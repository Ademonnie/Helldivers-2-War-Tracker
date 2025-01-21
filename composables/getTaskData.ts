export default function (type: number): {description: string, component: string } {
  
  let data = {
    description: '',
    component: ''
  }
  
  switch (type) {
    case 3:
      data.description = 'Kill the following amount of enemies:'
      data.component = 'killTask'
      break
    case 11:
      data.description = 'The following planets must be under Super Earth control:'
      data.component = 'LiberateTask'
      break
    case 12:
      data.description = 'Succesfully defend the following number of planets:'
      data.component = 'DefenseTask'
      break
    case 13:
      data.description = 'Hold control of the following planet:',
      data.component = 'LiberateTask'
      break
    case 15:
      data.description = 'Liberate more planets than are lost during the order duration'
      data.component = 'AdvanceTask'
      break
  }

  return data
}
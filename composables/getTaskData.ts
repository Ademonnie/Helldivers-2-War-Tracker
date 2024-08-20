import type { ConcreteComponent } from "vue"

export default function (type: number): {description: string, component: string } {
  
  let data = {
    description: '',
    component: ''
  }
  
  switch (type) {
    case 11:
      data.description = 'The following planets must be under Super Earth control :'
      data.component = 'LiberateTask'
      break
    case 12:
      data.description = 'Succesfully defend the follwing number of planets :'
      data.component = 'DefenseTask'
  }

  return data
}
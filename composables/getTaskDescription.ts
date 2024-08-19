export default function (type: number): string {
  
  let description = ''
  
  switch (type) {
    case 11:
      description = "The following planets must be under Super Earth control"
      break
    case 12:
      description = "Succesfully defend the follwing number of planets"
  }

  return description
}
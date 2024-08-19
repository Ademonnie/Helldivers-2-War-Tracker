const getMo = () => {
  const response = fetch('https://helldiverstrainingmanual.com/api/v1/war/major-orders')

  return response
}

getMo()
  .then((res) => {
    return res.json()
  }).then(data => {
    console.log(data)
    console.log(data[0]?.setting.tasks)
  })
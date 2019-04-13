console.log('Client side js file loaded')

fetch('http://localhost:3000/weather?adress=trondheim').then((response) => {
  response.json().then( (data) => {
    if (data.error) {
      console.log(data.error)
    } else {
      console.log(data.location)
      console.log(forecast)
    }
  } )
})
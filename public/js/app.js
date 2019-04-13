console.log('Client side js file loaded')

//form
const weatherForm = document.querySelector('form')

//input-field
const search = document.querySelector('input')

//form on sumbit listener
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const location = search.value

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


})
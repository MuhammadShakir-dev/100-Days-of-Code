const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#result')
  const feedback = document.querySelector('#feedback')

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid heigth ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid weigth ${weight}`
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2)
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are Under Weigth</span>`
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are in Normal Range</span>`
    } else {
      results.innerHTML = `<span>Your BMI is : ${bmi}</span>`
      feedback.innerHTML = `<span>You are Over Weigth</span>`
    }
  }
})

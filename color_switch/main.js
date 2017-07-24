// svg shapes
const shapes = Array
  .from(document.querySelectorAll('.shape'))

// submit button
const post = document.querySelector('#submitBtn')

// evaluates an int and returns a hex color
function colorSwitch(num) {
  if (num === null || num === undefined) console.log('argument is null/undefined')
  if (num >= 30 && num <= 60) {
    return '#e99814'
  } else if (num > 60) {
    return '#e92d14'
  } else {
    return '#0c7d8c'
  }
}

// page instance
document.addEventListener("DOMContentLoaded", function() {

  // set colors with initial values
  const colors = [25, 50, 75].map(n => colorSwitch(n))
  shapes.forEach((s, i) => s.style.fill = colors[i])

  // listens for submit button
  post.addEventListener('click', function(e) {
    e.preventDefault()

    // creates an array of the values from the form
    const inputs = Array
      .from(document.forms.inputs.temp)
      .map(x => parseInt(x.value, 10))

    // set colors with the new values
    const newColors = inputs.map(n => colorSwitch(n))
    shapes.forEach((s, i) => s.style.fill = newColors[i])

    // reset form to 0
    document.forms.inputs.reset()
  })

})

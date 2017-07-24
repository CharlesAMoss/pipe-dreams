const entry = document.querySelector('#entry')

const pipeBody = document.querySelector('.pipebody')
const valve = document.querySelector('.valve')

const blue = '#0c7d8c', yellow = '#e99814', red ='#e92d14'
const colors = [blue, yellow, red]

const mpopup = document.getElementById('mpopup')
const close = document.querySelector('.close')

// open popup modal
valve.onclick = () => mpopup.style.display = "flex"

// close popup modal once close element is clicked
close.onclick = () => mpopup.style.display = "none"

// window.onclick = function(event) {
//     if (event.target == mpopup) {
//         mpopup.style.display = "none";
//     }
// }

// valve.addEventListener('click', () => {
//   pipeBody.style.fill = colors[Math.floor(Math.random() * colors.length)]
// })

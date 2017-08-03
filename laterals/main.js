

const identity = ['a.5', 'b.5', 'c.5']

const eastside = []
const westside = []

function Pipe(identd){
  this.identd = identd
  this.lateral = `<svg id="${this.identd}"
  	x="0px" y="0px" width="27px" height="110px" viewBox="-1.5 -2.75 27 110"
  	 overflow="visible" enable-background="new -1.5 -2.75 27 110" xml:space="preserve">
  <g>
  	<polygon class="pipe" points="23,104 0,104 0,0 6,0 6,98 17,98 17,0 23,0 "/>
  	<rect class="filling-bot" x="8" y="8" width="6" height="25"/>
  	<rect class="filling-mid" x="9" y="37" width="6" height="25"/>
  	<rect class="filling-top" x="8" y="68" width="6" height="25"/>
  </g>
  </svg>`
}

document.addEventListener('DOMContentLoaded', function() {

  console.log('heck me this time')

  const east = document.getElementById('east')
  const west = document.getElementById('west')

  // const lateralpipe = new Pipe()

  for (var i = 0; i < identity.length; i++) {
      let lateralpipe = new Pipe(identity[i])
      eastside.push(lateralpipe.lateral)
  }

  east.innerHTML = eastside


})

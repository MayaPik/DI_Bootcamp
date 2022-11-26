const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

let players =  {player : "", computer : ""}
let choseBar = document.getElementById('chosing')

let xButton = document.getElementById('x')
xButton.addEventListener('click', function() {
  choseBar.style.display = 'none'
  startGame() 
  return players =  {player : "X", computer : "O"}

})

let oButton = document.getElementById('o')
oButton.addEventListener('click', function() {
  choseBar.style.display = 'none'
  startGame() 
  return players =  {player : "O", computer : "X"}
})

origBoard = Array.from(Array(9).keys());

  let playerCon = []
  let compuerCon = []

  let cells = document.querySelectorAll('.each')
  const eventsFunctions = [...Array(9)];

  function startGame() {
    cells.forEach((cell,index) => {
      cell.innerText = '';
      eventsFunctions[index] = () => play(cell, index);
		  cell.addEventListener('click', eventsFunctions[index], { once: true })
    });

    function play(cell, index) {
      cell.innerText = players.player
      origBoard[index] = "player"
      playerCon.push(index)

      check(playerCon)
      check(compuerCon);

      

      //const randomElement = bestMove(numbersToComputer, i)[0]
      //function bestMove(arrOfNum, humanStep) {
     //}
      let numbersToComputer = origBoard.filter(board => typeof board === 'number');
      if (numbersToComputer.length > 0) {
      const randomElement = numbersToComputer[Math.floor(Math.random() * numbersToComputer.length)];
      cells[randomElement].innerText = players.computer;
      origBoard[randomElement] = "computer"
      cells[randomElement].removeEventListener('click', eventsFunctions[randomElement])
              
      compuerCon.push(randomElement)
      }
      check(playerCon)
      check(compuerCon)
    }
  }

  

  let situation = document.getElementById('situation')
  let restartB = document.getElementById('restart')
  restartB.style.display = 'none'

    function check(arr) {
      winCombos.forEach(option => {
        if (option.every((element) => arr.includes(element))) {
          stopGame()
          if (arr === compuerCon) {
          
              situation.textContent = "You Lose :( "
              restartB.style.display = "flex"
              restartB.style.justifyContent = 'center'
           
          } 
          if (arr === playerCon) {
              situation.textContent = "You Won!!"
              restartB.style.display = 'flex'
              restartB.style.justifyContent = 'center'
          }
          
        } 

        function stopGame() {
          cells.forEach((cell,index) => {
            cell.removeEventListener('click', eventsFunctions[index])
          });   
        }
      })
    }

        restartB.addEventListener("click", restart)

        function restart() {
          window.location.reload();
        }
        


    
	

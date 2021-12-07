let wholecontainer = document.createElement("div")
wholecontainer.className = "wholecontainer"
document.body.appendChild(wholecontainer)

let header = document.createElement("header")
let title = document.createElement("h1")
let playername = document.createElement("h3")

playername.innerHTML = "Player:";
playername.className = "playername";
title.innerHTML = "Tic-Tac-Toe Game";
document.body.appendChild(header);
header.appendChild(title);
header.appendChild(playername);
wholecontainer.appendChild(header)

let formdiv = document.createElement("div")
let inputname = document.createElement("input")
let enterbtn = document.createElement("span")
let optionWrapper = document.createElement("div")
let selectlabel = document.createElement("div")
let optiondiv = document.createElement("div")
let option1 = document.createElement("span")
let option2 = document.createElement("span")

formdiv.className = "formdiv";
inputname.className = "inputname";
optionWrapper.className = "optionwrapper";
selectlabel.className = "selectlabel";
selectlabel.innerHTML = "Select which role do you prefer"
optiondiv.className = "optiondiv"
option1.className = "option";
option2.className = "option";
option1.id = "o";
option2.id = "x";
enterbtn.className = "enterbtn";
inputname.placeholder = "Create Username";
inputname.style.color = "white"
option1.type = "radio";
option2.type = "radio";
option1.setAttribute("name", "radio");
option2.setAttribute("name", "radio");
option1.innerHTML = "O";
option2.innerHTML = "X";
enterbtn.innerHTML = "ENTER GAME"
option1.value = "O";
option2.value = "X";

document.body.appendChild(formdiv)
formdiv.appendChild(inputname)
formdiv.appendChild(optionWrapper)
formdiv.appendChild(enterbtn)
optionWrapper.appendChild(selectlabel)
optionWrapper.appendChild(optiondiv)
optiondiv.appendChild(option1)
optiondiv.appendChild(option2)

let main = document.createElement("main")
let box_wrapper = document.createElement("div")
let floatbox = document.createElement("div")
let box = document.createElement("div")
let reset = document.createElement("span")
let rightarrow = document.createElement("i")
let leftarrow = document.createElement("i")

let oval = localStorage.getItem('Ovalue')
let xval = localStorage.getItem('Xvalue')
let O_TEXT = oval;
let X_TEXT = xval;
let chosenrole = localStorage.getItem('role')
let currentPlayer = chosenrole;
let xbtn = document.getElementById("x")
let obtn = document.getElementById("o")
let option = document.querySelector(".option")

box_wrapper.className = "box_wrapper";
floatbox.className = "floatbox";
reset.className = "reset";
rightarrow.className = "fas fa-arrow-circle-right"
leftarrow.className = "fas fa-arrow-circle-left"
reset.innerHTML = "RESET";
box.className = "box";

document.body.appendChild(main);
wholecontainer.appendChild(leftarrow)
wholecontainer.appendChild(reset)
wholecontainer.appendChild(rightarrow)
main.appendChild(box);

box.appendChild(box_wrapper);
box.appendChild(floatbox);
wholecontainer.appendChild(main)

let span = document.createElement("span")
span.className = "history-span";
span.innerHTML = "GAME HISTORY:";
document.body.appendChild(span);
wholecontainer.appendChild(span)

let historyContainer = document.createElement("section")
let history = document.createElement("div")
historyContainer.className = "history-container";
history.className = "history";
document.body.appendChild(historyContainer);
document.body.appendChild(history);
wholecontainer.appendChild(historyContainer)

let enterclick = document.querySelector(".enterbtn");

document.querySelector('.inputname').addEventListener('keypress', function (e) {
  
  if (e.key === 'Enter' || e.key === 'click') {
    document.querySelector(".wholecontainer").style.zIndex = "2";
    saveRole()
  }
});

function createBoxes(){
  let grid = Array(3);
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid.length; j++){
      let boxes = document.createElement("div");
      boxes.className = "boxes";
      boxes.id = [[i]+[j]];
      box_wrapper.appendChild(boxes);
      }
  }
}
createBoxes()

xbtn.addEventListener("click",() => {
  role= "X"
  O_TEXT = "O";
  X_TEXT = "X";
  localStorage.setItem("role", role)
  localStorage.setItem("Ovalue", O_TEXT)
  localStorage.setItem("Xvalue", X_TEXT)
  highlights1();
})

obtn.addEventListener("click",() =>{
  role = "O"
  O_TEXT = "O";
  X_TEXT = "X";
  localStorage.setItem("role", role)
  localStorage.setItem("Ovalue", O_TEXT)
  localStorage.setItem("Xvalue", X_TEXT)
  highlights2();
})

enterclick.addEventListener("click", () => {
  saveRole();
  window.location.reload();
  let name = localStorage.getItem('name');
  if(name){
    document.querySelector(".wholecontainer").style.zIndex = "2";
    let playerId = document.querySelector(".playername");
    let userName = localStorage.getItem("name")
    playerId.innerHTML = 'Player:' + '&nbsp&nbsp' + userName;
  }
})

function saveRole(){
  
  let userName = document.querySelector('.inputname').value;
  let playerId = document.querySelector(".playername");
  localStorage.setItem('name', userName);
  localStorage.setItem("role", role)
  
  playerId.innerHTML = 'Player:' + '&nbsp&nbsp' + userName;
  
}

function highlights1(){
  xbtn.style.backgroundColor = "Aquamarine"
  obtn.style.backgroundColor = "transparent"
}

function highlights2(){
  xbtn.style.backgroundColor = "transparent"
  obtn.style.backgroundColor = "Aquamarine"
}

function refresh(){
  let name = localStorage.getItem('name');
  window.addEventListener('load', () => {
  if(name){
    document.querySelector(".wholecontainer").style.zIndex = "2";
    let playerId = document.querySelector(".playername");
    let userName = localStorage.getItem("name")
    playerId.innerHTML = 'Player:' + '&nbsp&nbsp' + userName;
  }
});
}
refresh();

let historySpan = document.querySelector(".history-span");
let historyopen = document.querySelector(".history-container");
    
const boxed = Array.from(document.querySelectorAll('.boxes'));
let moves =[];
let array2 = Array(0);
let index = 0;

// GAMEBOARD
let gameboard = new Array(3).fill(null);
  for (let x = 0; x < gameboard.length; x++) {
    gameboard[x] = [null];
    for (let y = 0; y < gameboard.length; y++) {
      gameboard[x][y] = null;
    }
}

let boxes = document.querySelectorAll(".boxes")
playername = document.querySelector('.playername');

function boards() {
  boxed.forEach(boxy => {
    boxy.addEventListener('click', boxClicked, { once: true })

  })
}

function boxClicked(e) {

  id = e.target.id
  let newitem = localStorage.getItem("historyfile")
  saveboard()
  saveMoveHistory()

  if(turn<'1'){}else{createHistoryTab(newitem)}
  
  if (!gameboard[id[0]][id[1]]) {
    gameboard[id[0]][id[1]] = currentPlayer
    e.target.innerHTML = currentPlayer

    if (userHasWon(currentPlayer)) {
      const playername = document.querySelector(".playername")
      playername.innerHTML = `${currentPlayer} wins!!`
      historyopen.classList.toggle("open")
      disableBoxclicked()
      saveboard()
      disablehide()
      createHistoryTab(newitem)
      saveMoveHistory()
      return
    }
    function draw() {

      if (turn === '8' ){ 
        playername.innerHTML = `It's a Draw!!`;
        saveMoveHistory()
        disableBoxclicked()
        disablehide()
        saveboard()
        createHistoryTab(newitem)
        historyopen.classList.toggle("open")
    } 
    }
    draw()
    currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT
  }
}

function saveboard(){ 
  const mapGrid = gameboard;
  array2.push(mapGrid)
  localStorage.setItem("newhistory", mapGrid)
  globalThis.newhistory = localStorage.getItem("newhistory")

  const moves1 = moves.length
  localStorage.setItem("moveslength", moves1)
  globalThis.turn = localStorage.getItem("moveslength");
}
saveboard();

function disableBoxclicked(){
  boxed.forEach(boxy=>{
    boxy.removeEventListener('click', boxClicked);

  });
}

function createHistoryTab(){

  let note = document.createElement("div")
  let box2 = document.createElement("div")
  let floatbox2 = document.createElement("div")
  let box_wrapper2 = document.createElement("div")
  let random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
  
  note.className = "note"
  box2.className = "box2"
  floatbox2.className = "floatbox2"
  box_wrapper2.className = "box_wrapper2"

  note.appendChild(box2)
  box2.appendChild(box_wrapper2)

  for (let i = 0; i < 9; i++) {
    let boxes2 = document.createElement("div")
    boxes2.className = "boxes2"
    boxes2.id = "id" + i
    box2.appendChild(floatbox2)
    box_wrapper2.appendChild(boxes2)
  }

  if (index > random_colors.length - 1)
    index = 0

  note.setAttribute(
    "style",
    `background-color:${random_colors[index++]};`)

  document.querySelector(".history-container").appendChild(note)
  displayMoveHistory()
}


function userHasWon(player) {

  if (gameboard[0][0] === player) {
    if (gameboard[0][1] === player && gameboard[0][2] === player) {
      return true
    }
    if (gameboard[1][0] === player && gameboard[2][0] === player) {
      return true
    }
    if (gameboard[1][1] === player && gameboard[2][2] === player) {
      return true
    }

  }

  if (gameboard[2][2] === player) {
    if (gameboard[0][2] === player && gameboard[1][2] === player) {
      return true
    }
    if (gameboard[2][0] === player && gameboard[2][1] === player) {
      return true
    }
  }

  if (gameboard[1][1] === player) {
    if (gameboard[1][0] === player && gameboard[1][2] === player) {
      return true
    }
    if (gameboard[0][2] === player && gameboard[2][0] === player) {
      return true
    }
    if (gameboard[0][1] === player && gameboard[2][1] === player) {
      return true
    }
  }
}

let floater = document.querySelector(".floatbox")
let prev = document.querySelector(".fa-arrow-circle-left")
let nextbtn = document.querySelector(".fa-arrow-circle-right")
let resetbtn = document.querySelector(".reset");
function updateValue(){
  
}
 prev.addEventListener("click", () => {
  clearMain();
  clearBox();
   previous();
   console.log("prev", moves[index--])
 })

 nextbtn.addEventListener("click", () => {
  clearMain();
  clearBox();
  next();

  console.log("next", moves[index++])
})

resetbtn.addEventListener("click", () => {
  boxed.forEach((box) => {
    box.innerText = "";
  });

  window.location.reload();
  saveboard();
  displayMoveHistory()
  currentPlayer = O_TEXT;
});

boards();

function previous() {
  if(moves.length >= turn && turn-1 >= 0) 
    {
        gameboard = moves[turn-1];
        turn--;

    }

    if(moves.length && turn  === 0){ rightarrow.style.color = "green";
    leftarrow.style.color = "red";}

 displayHistoryPerClick();
  
}

function next(){
  if (turn <= moves.length && turn + 1 !== moves.length) {
    gameboard = moves[turn + 1]
    turn++
   
  }

  if(moves.length === turn +1){ leftarrow.style.color = "green";
  rightarrow.style.color = "red";}
  displayHistoryPerClick()
}

function hidehistorybtn() {
  prev.style.visibility = "hidden"
  nextbtn.style.visibility = "hidden"
}

hidehistorybtn();

function disablehide() {
  floater.style.visibility = "visible"
  prev.style.visibility = "visible"
  nextbtn.style.visibility = "visible"
}

historySpan.addEventListener("click", () => {
  historyopen.classList.toggle("open");
});

function saveMoveHistory()
{
    const newMove = [];
    for (let indexRow = 0; indexRow < gameboard.length; indexRow++) {
        const row = gameboard[indexRow];
        const newRow = [];

        for (let indexCol = 0; indexCol < row.length; indexCol++) {
            const element = row[indexCol];
            newRow.push(element); 
        }
        newMove.push(newRow);
    }
    moves.push(newMove)
}

function displayMoveHistory() 
{
    let gameTab = document.querySelector(".floatbox2")
    let div;

    for (let indexRow = 0; indexRow < gameboard.length; indexRow++) {
        const row = gameboard[indexRow];
        for (let indexCol = 0; indexCol < row.length; indexCol++) {
            const element = row[indexCol];

            div = document.createElement('div');
            div.className = "box3";
            
            if(element==="X"){
              div.innerHTML = "X";
            }else if(element==="O"){
              div.innerHTML = "O";
            }
            gameTab.appendChild(div);   
        }
    }
}


function displayHistoryPerClick() 
{ 
    let mainTab = document.querySelector(".floatbox")
    let div;

    for (let indexRow = 0; indexRow < gameboard.length; indexRow++) {
      const row = gameboard[indexRow];
      for (let indexCol = 0; indexCol < row.length; indexCol++) {
          const element = row[indexCol];

          div = document.createElement('div');
          div.className = "box4";
        
          if(element==="X"){
             div.innerHTML = "X";
           }else if(element==="O"){
            div.innerHTML = "O";
          }

          mainTab.appendChild(div);   
        }
    }

}


function clearMain(){
  boxed.forEach((box) => {
    box.innerText = "";
  });
}

function clearBox(){
  let box = document.querySelector(".floatbox")
  box.innerText = "";
}


function realtimeClock(){

  let rtClock = new Date();
  let hours = rtClock.getHours();
  let mins = rtClock.getMinutes();
  let sec = rtClock.getSeconds();

  const amPm = ( hours < 12 ) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;
  hours = ("0" + hours).slice(-2);
  mins = ("0" + mins).slice(-2);
  sec = ("0" + sec).slice(-2);

  document.getElementById("clock").innerHTML = 
      hours + ":" + mins + ":" + sec + " " + amPm;
  const t = setTimeout(realtimeClock, 500);
}

const todo = document.getElementById("todo");
const notes = document.getElementById("notes");
  
todo.addEventListener("click", () => {
  notes.classList.toggle("open");
});

function error(color){
  document.body.style.backgroundColor = color;
}

var random_margin = ["-5px", "1px", "5px", "3px", "7px"];
var random_colors = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];
var random_degree = ["rotate(2deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-2deg)", "rotate(-3deg)", "rotate(-4deg)"];
var index = 0;

document.querySelector("#add-todo").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "block";
});

document.querySelector("#hide").addEventListener("click", () => {
  document.querySelector("#modal").style.display = "none";
});

document.querySelector("#user_input").addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    const text = document.querySelector("#user_input");
    createStickyNote(text.value);
  }
});

createStickyNote = (text) => {
  let note = document.createElement("div");
  let details = document.createElement("div");
  let noteText = document.createElement("h1");

  note.className = "note";
  details.className = "details";
  noteText.textContent = text;

  details.appendChild(noteText);
  note.appendChild(details);

  if(index > random_colors.length - 1)
    index = 0;

  note.setAttribute(
    "style", 
    `margin:${random_margin[Math.floor(Math.random() * random_margin.length)]};
     background-color:${random_colors[index++]}; 
     transform:${random_degree[Math.floor(Math.random() * random_degree.length)]}`);

  note.addEventListener("dblclick", () => {
    note.remove();
  })

  document.querySelector("#all_notes").appendChild(note);
}

let myQuotes = [
    { quote:"“All we have to decide is what to do with the time that is given us.”", author:"- J.R.R. Tolkein" },
    { quote:"“Stay Hungry. Stay Foolish.”", author:"- Steve Jobs" },
    { quote:"“It matters not what someone is born, but what they grow to be.”", author:"- J.K. Rowling" },
    { quote:"“Simplicity is the ultimate sophistication.”", author:"- Leonardo Da Vinci" },
    { quote:"“Be yourself; everyone else is already taken.”", author:"- Oscar Wilde" },
    { quote:"“Not all those who wander are lost.”", author:"-  J.R.R. Tolkein" },
  ];

  let arr= [Math.floor((Math.random() * myQuotes.length-1))];
  
  document.getElementById("quote").innerHTML=myQuotes[arr].quote;
  document.getElementById("author").innerHTML=myQuotes[arr].author;

  
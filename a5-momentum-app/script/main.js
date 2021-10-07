function animatedForm(){
  const arrows = document.querySelectorAll(".fa-arrow-right");

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      let input = arrow.previousElementSibling;
      let parent = arrow.parentElement;
      let nextForm = parent.nextElementSibling;

      if (input.type ==="text" && validateName(input)){
        nextSlide(parent, nextForm);
      }
    });
  });
}
animatedForm();

function validateName(user){
  if(user.value.length < 3){
    console.log('not enough');
    error('rgb(198,78,87)');
  }else{
    error('rgb(87,189,30)');
    return true;
  }
}

function nextSlide(parent, nextForm){
  parent.classList.add('inactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function save1(){

  let inpName = document.getElementById('inpName').value;
  let greet = document.getElementById("greet");
  let name = document.getElementById("name")
  localStorage.setItem('name', inpName);
  
  greet.innerHTML = 'Hello,' + '&nbsp&nbsp';
  name.innerHTML = inpName + '.';
  
}

function save2(){

  let inpAgenda = document.getElementById('inpAgenda').value;
  let focus = document.getElementById("focus");
  let agenda = document.getElementById("agenda");
  let notes = document.getElementById("all_notes");

  localStorage.setItem('agenda', inpAgenda);

  focus.innerHTML = 'Todays' + '&nbsp&nbsp' +   'Focus, ';
  agenda.innerHTML =  inpAgenda;
  notes.innerHTML = inpAgenda;

}

function refresh(){

  let name = localStorage.getItem('name');
  let agenda = localStorage.getItem('agenda');
  let focus = document.getElementById("focus");
  let greet = document.getElementById("greet");
  let newname = document.getElementById("name")
  let notes = document.getElementById("all_notes");
  let newagenda = document.getElementById("agenda");

  window.addEventListener('load', () => {
    if(name && agenda){
      document.getElementById("bgImg").style.zIndex = "1";
      document.getElementById("rand-quotes").style.zIndex = "1";
      document.getElementById("main-content").style.zIndex = "1";
      document.getElementById("inner-content").style.zIndex = "1";
      document.getElementById("inner").style.zIndex = "1";
      document.getElementById("greet").style.zIndex = "1";
      document.getElementById("agenda").style.zIndex = "1";
      document.getElementById("bottom").style.zIndex = "1";
      
      
      greet.innerHTML = 'Hello,' + '&nbsp&nbsp';
      newname.innerHTML = name + '.';
      focus.innerHTML = 'Todays' + '&nbsp&nbsp' +   'Focus, ';
      newagenda.innerHTML = agenda;
      notes.innerHTML = agenda;
      
    }
  });
}
refresh();

let arrow1 = document.getElementById("right-arrow1")
let arrow2 = document.getElementById("right-arrow2")


arrow1.addEventListener('click', save1)
arrow2.addEventListener('click', save2)



function newNameInput()
{
    this.classList.toggle('hide');
    let newName = nameSpan.textContent;
    nameSpan.innerHTML = "";
    const nameInsert = document.createElement('input');
    nameInsert.setAttribute('class', 'nameInsert');
    nameInsert.addEventListener('keydown', changeName);
    nameInsert.value = newName;
    nameSpan.append(nameInsert);
    nameInsert.focus();
}

function changeName(e)
{
    if(this.value) 
    {
        if(e.key === 'Enter')
        {
            myName = this.value;
            localStorage.setItem('name', myName);
            editNameSpan();
            const editName = document.getElementById("editor")
            editName.classList.toggle('hide');
        }

        if(e.key === 'Escape')
        {
          editNameSpan();
          const editName = document.getElementById("editor")
          editName.classList.toggle('hide');
        }
    }
}

function editNameSpan()
{
    nameSpan.innerHTML = ' ';
    nameSpan.innerHTML =  localStorage.getItem('name');
}

let nameSpan = document.getElementById('name');
let editName = document.querySelector('.fa-edit')
editName.addEventListener('click', newNameInput);


function newTodoInput()
  {
      this.classList.toggle('hide');
      let newTodo = todoSpan.textContent;
      todoSpan.innerHTML = "";
      const todoInsert = document.createElement('input');
      todoInsert.setAttribute('class', 'todoInsert');
      todoInsert.addEventListener('keydown', changeTodo);
      todoInsert.value = newTodo;
      todoSpan.append(todoInsert);
      todoInsert.focus();
  }
  
  function changeTodo(i)
  {
      if(this.value) 
      {
          if(i.key === 'Enter')
          {
              newtodo = this.value;
              localStorage.setItem('agenda', newtodo);
              editTodoSpan();
              const editName = document.getElementById("edits")
              editName.classList.toggle('hide');
          }
  
          if(i.key === 'Escape')
          {
            editTodoSpan();
            const editTodo = document.getElementById("edits")
            editTodo.classList.toggle('hide');
          }
      }
  }
  
  function editTodoSpan()
  {
      todoSpan.innerHTML = '';
      todoSpan.innerHTML = localStorage.getItem('agenda');
  }
  
  let todoSpan = document.getElementById('agenda');
  let editTodo = document.getElementById("edit")
  editTodo.addEventListener('click', newTodoInput);

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
      text.value="";
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
  
    let i= [Math.floor((Math.random() * myQuotes.length))];
    let q = document.getElementById("quote");
    let a = document.getElementById("author");
    
    q.innerHTML =myQuotes[i].quote;
    a.innerHTML=myQuotes[i].author;
  
    



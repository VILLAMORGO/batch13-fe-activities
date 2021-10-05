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

function save(){

  let inpName = document.getElementById('inpName').value;
  let inpAgenda = document.getElementById('inpAgenda').value;
  let greet = document.getElementById("greet");
  let focus = document.getElementById("focus");
  let agenda = document.getElementById("agenda");
  let notes = document.getElementById("all_notes");

  if(localStorage.getItem('name') == null){
    localStorage.setItem('name', '[]');
  }

  if(localStorage.getItem('agenda') == null){
    localStorage.setItem('agenda', '[]');
  }

  let old_name = JSON.parse(localStorage.getItem('name'));
  old_name.push(inpName);
  let old_agenda = JSON.parse(localStorage.getItem('agenda'));
  old_agenda.push(inpAgenda);

  localStorage.setItem('name', JSON.stringify(old_name));
  localStorage.setItem('agenda', JSON.stringify(old_agenda));

  for(let i = 0; i < localStorage.length; i++ ){
    greet.innerHTML = 'Hello,' + '&nbsp&nbsp' + inpName + '.';
    focus.innerHTML = 'Todays' + '&nbsp&nbsp' +   'Focus, ';
    agenda.innerHTML =  inpAgenda;
    notes.innerHTML = inpAgenda;
  };

}


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
    nameSpan.innerHTML = '';
    nameSpan.innerHTML = localStorage.getItem('name');
}

let nameSpan = document.getElementById('greet');
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



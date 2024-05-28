function onKey(event) {
  if(event.key === 'Enter'){
      addTodo();
  }
}

function resetLocalStorage() {
  localStorage.clear();
  alert("Localstorage has been reset!");
}

document.addEventListener('keydown', function(event) {
  return event.altKey && event.code === 'KeyR' ? resetLocalStorage() : null;
})

let points = 0;
let level = 1;

const todoList = JSON.parse(localStorage.getItem('save')) || [{
  name: 'makan',
  dueDate: '2024-06-05',
  time: '19.40',
  completed: false
}];

points = parseInt(localStorage.getItem('points')) || 0;
level = parseInt(localStorage.getItem('levels')) || 1;

renderTodoList();
updatePointsAndLevel();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
      const { name, dueDate, time, completed } = todoObject;
      const checkedAttribute = completed ? 'checked' : '';
      const textDecoration = completed ? 'line-through'  : 'none';

      const html = `
      <div>
          <input type='checkbox' class='checked' data-index="${index}" ${checkedAttribute}>
          <span class="todo-name" data-index="${index}" style="text-decoration: ${textDecoration};">${name}</span>
      </div>
      <div>${dueDate}</div>
      <div>${time}</div>
      <button class="delete-todo-btn js-delete-todo-btn" data-index="${index}">Delete</button>
      <button class="edit-todo-btn js-edit-todo-btn" data-index="${index}" title="Edit">🖊️</button>
      `;

      todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-btn').forEach((deleteBtn) => {
      deleteBtn.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          todoList.splice(index, 1);
          saveToLocalStorage();
          renderTodoList();
      });
  });

  document.querySelectorAll('.js-edit-todo-btn').forEach((editBtn) => {
      editBtn.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          editTask(index);
      });
  });

  document.querySelectorAll('.checked').forEach((checkbox) => {
      checkbox.addEventListener('click', (event) => {
          const index = event.target.getAttribute('data-index');
          const todoName = document.querySelector(`.todo-name[data-index="${index}"]`);
          
          if (event.target.checked) {
              todoList[index].completed = true;
              points += 1;
              todoName.style.textDecoration = 'line-through';
          } else {
              todoList[index].completed = false;
              points -= 1;
              todoName.style.textDecoration = 'none';
          }
          saveToLocalStorage();
          updatePointsAndLevel();
      });
  });
}

function updatePointsAndLevel() {
  document.querySelector('.js-points').textContent = points;
  const newLevel = Math.floor(points / 5) + 1;
  if (newLevel !== level) {
      level = newLevel;
      levelElement = document.querySelectorAll('.js-level');
      levelElement.forEach((levelIncrease) => {
        levelIncrease.textContent = level
      })
  }
}

function editTask(index) {
  const todoObject = todoList[index];
  const newName = prompt("Edit Task Name:", todoObject.name);
  const newDueDate = prompt("Edit Due Date:", todoObject.dueDate);
  const newTime = prompt("Edit Time Set:", todoObject.time);

  if (newName && newDueDate && newTime) {
      todoList[index] = { ...todoObject, name: newName, dueDate: newDueDate, time: newTime };
      saveToLocalStorage();
      renderTodoList();
  }
}

document.querySelector('.js-add-todo-btn').addEventListener('click', () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElem = document.querySelector('.js-date-input');
  const dueDate = dateInputElem.value;

  const timeInputElem = document.querySelector('.js-time-input');
  const time = timeInputElem.value;

  if (name === '') {
      alert('Nothing has filled yet');
  } else {
      todoList.push({
          name,
          dueDate,
          time,
          completed: false
      });

      saveToLocalStorage();
      inputElement.value = ''; // Mereset textInput ketika sudah di add dengan empty string
      dateInputElem.value = ''; // gimana jess?
      timeInputElem.value = '';
      renderTodoList();
  }
}

function saveToLocalStorage() {
  localStorage.setItem('save', JSON.stringify(todoList));
  localStorage.setItem('points', points.toString());
  localStorage.setItem('levels', level.toString())
}

document.querySelectorAll('p').forEach((elem, i) => {
  elem.style.color = 'blue';
});

const Logout = document.querySelector('#logout-btn');
  Logout.addEventListener('click', () => {
    localStorage.clear()
    confirm('You want to Logout?')?  window.location.href = "/Register/register.html" : window.location.href = "home.html"
  })



//
  const bars = document.querySelector(".bar"),
close = document.querySelector(".close"),
menu = document.querySelector(".menu");

bars.addEventListener("click", () => { 
  menu.classList.add("active");
  gsap.from(".menu", {
    opacity: 0,
    duration: .3
  })

  gsap.from(".menu ul", {
    opacity: 0,
    x: -300
  })
});

close.addEventListener("click", () => { 
  menu.classList.remove("active")
});
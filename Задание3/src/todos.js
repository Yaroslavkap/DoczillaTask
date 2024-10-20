// import { fetchData } from "./data";

// const url ='http://localhost:3000/api/todos'

function todoBlock(todo) {
    let date = new Date(todo.date)
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
    const formattedDate = date.toLocaleDateString('ru-RU', options).replace(',', '')
    const html =
     `<div class='todoBlock' id='todo-${todo.id}'>
        <div class ='todoContent'>
            <h2>${todo.name}(${formattedDate})</h2>
            <p>${todo.shortDesc}</p>
        </div>
        <div class = ${todo.status ? "statusOn" : "status" }> + </div>
    </div>`
    return html
}

export function renderTodos({ data, isLoading = false, error ='' }) {
    const todoList = document.getElementById('todoList')
  
    if (isLoading) {
      todoList.textContent = 'Загрузка...'
      return
    }
  
    if (error) {
      todoList.textContent = error
      return
    }
  
    todoList.innerHTML = ''
  
    data.map(todo => {
    //   const todoDiv = document.createElement('div')
    //   todoDiv.classList.add('todo')
  
    //   const todoName = document.createElement('h3')
    //   todoName.textContent = todo.name;
    //   todoDiv.appendChild(todoName)
  
  
    //   todoList.appendChild(todoDiv)
    const html = todoBlock(todo)
    todoList.insertAdjacentHTML('beforeend', html)
    const todoElement = document.getElementById(`todo-${todo.id}`)
        todoElement.addEventListener('click', () => {
            showTodoDescription(todo.fullDesc)
        })
    })
  }



  export function showNotDone(data) {
    let filtredData = data.filter(el => el.status === false)
    let isLoading = false
    let error = ''
    renderTodos({ data: filtredData})
    console.log(filtredData)
  }


  function fullTodo(todo) {
    const html =
     `<div class='todoBlock'>
        <div class ='todoContent'>
            <h2>${todo.name}(${formattedDate})</h2>
            <p>${todo.fullDesc}</p>
        </div>
        <div class = ${todo.status ? "statusOn" : "status" }> + </div>
    </div>`
    return html
  }

  export function renderFullTodo(todo) {
    const $Todo = document.getElementById('todoList')
  }

  export function showTodoDescription(description) {
    const modal = document.getElementById('modal')
    const overlay = document.getElementById('overlay')
    const todoDescription = document.getElementById('todo-description')
    todoDescription.textContent = description;
    modal.style.display = 'block'
    overlay.style.display = 'block'
  }
  

  const overlay = document.getElementById('overlay');
  
  const closeModalBtn = document.getElementById('closeModal');
  closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  });

  // Закрытие окна при клике на overlay
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';

    const searchData = document.getElementById('searchData')
    searchData.style.display = 'none'
  });
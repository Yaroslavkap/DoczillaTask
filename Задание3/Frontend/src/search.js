import { fetchDataFind } from "./data.js"
import { showTodoDescription } from "./todos.js";
const url = 'http://localhost:3000/api/todos'

function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay)
    };
  }

  function todoEl(todo) {
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
     `<div class='todoEl' id='el-${todo.id}'>
            <p>${todo.name}(${formattedDate})</p>
    </div>`
    return html
}

function renderSearchData({ data, isLoading = false, error ='' }) {
  const searchData = document.getElementById('searchData')
  
    if (isLoading) {
      searchData.textContent = 'Загрузка...'
      return
    }
  
    if (error) {
      searchData.textContent = error
      return
    }
  
    searchData.innerHTML = ''

    data.map(todo => {
      const html = todoEl(todo)
      searchData.insertAdjacentHTML('beforeend', html)
      const todoElement = document.getElementById(`el-${todo.id}`)
          todoElement.addEventListener('click', () => {
              showTodoDescription(todo.fullDesc)
              const searchData = document.getElementById('searchData')
              searchData.style.display = 'none'
          })
      })
}

export const handleSearchInput = debounce(async (event) => {
    // renderSearchData
    const query = event.target.value
    if(query !== '') {
      let data = await fetchDataFind(url, query)
      console.log(data)
      renderSearchData(data)
    }
  }, 1000)

  export function showInput() {
    const searchData = document.getElementById('searchData')
    const overlay = document.getElementById('overlay')
    searchData.style.display = 'block'
    overlay.style.display = 'block'
  }
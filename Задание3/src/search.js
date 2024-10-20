import { fetchDataFind } from "./data.js"
const url = 'http://localhost:3000/api/todos'

function debounce(func, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay)
    };
  }

export const handleSearchInput = debounce(async (event) => {
    const query = event.target.value
    let data = await fetchDataFind(url, query)
    console.log(data)
  }, 1000)
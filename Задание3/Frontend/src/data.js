import { renderTodos } from "./todos.js"

export async function fetchData(url) {
  
    renderTodos({ data: [], isLoading: true, error: '' })
    let isLoading = true
    let error = ''
    let data = []

    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Ошибка сети')
      }
      data = await response.json()
    } catch (err) {
      error = 'Произошла ошибка при получении данных: ' + err.message
    } finally {
      isLoading = false
    }
  

    return { data, isLoading, error }
  }

  export async function fetchDataDate(url, start, end) {
  
    renderTodos({ data: [], isLoading: true, error: '' });
    let isLoading = true
    let error = ''
    let data = []

    try {
      const response = await fetch(`${url}/date?from=${start}&to=${end}`)
      if (!response.ok) {
        throw new Error('Ошибка сети')
      }
      data = await response.json()
    } catch (err) {
      error = 'Произошла ошибка при получении данных: ' + err.message
    } finally {
      isLoading = false
    }
  

    return { data, isLoading, error }
  }

  export async function fetchDataFind(url, string) {
  
    
    let isLoading = true
    let error = ''
    let data = []

    try {
      const response = await fetch(`${url}/find?q=${string}`)
      if (!response.ok) {
        throw new Error('Ошибка сети')
      }
      data = await response.json()
    } catch (err) {
      error = 'Произошла ошибка при получении данных: ' + err.message
    } finally {
      isLoading = false
    }
    

    return { data, isLoading, error }
  }
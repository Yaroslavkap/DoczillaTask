import { fetchData, fetchDataDate, fetchDataFind } from "./data.js"
import { getTodayTimestamps, getWeekTimestamps } from "./dates.js"
import { clickNotDone } from "./filters.js"
import { renderTodos } from "./todos.js"
import { handleSearchInput } from "./search.js"
//import { init } from "./todos.js"

// console.log("hhhhh")

const url ='http://localhost:3000/api/todos'
let data = []



async function init() {
  const response = await fetchData(url)
  renderTodos(response)
  data = await response.data
  console.log(data)
  // showNotDone(data)
}


init()
///////////////////////Status////////////////////////
let sortedByStatus = false
let $notDoneBtn = document.getElementById('notDone')
$notDoneBtn.addEventListener('click', () => {
  sortedByStatus = !sortedByStatus
  return clickNotDone(data, !sortedByStatus)
})


////////////////////Time//////////////////
let isToday = false
let isWeek = false

let $todayBtn = document.getElementById('today')
let $weekBtn = document.getElementById('week')

$todayBtn.addEventListener('click', async () =>  {
  isToday = true
  isWeek = false
  sortedByStatus = false
  let $notDoneBtn = document.getElementById('notDone')
  $notDoneBtn.textContent ="Показать невыполненные"
  const { startOfDayTimestamp, endOfDayTimestamp } = getTodayTimestamps()
  const response = await fetchDataDate(url, startOfDayTimestamp, endOfDayTimestamp)
  renderTodos(response)
  data = response.data

})

$weekBtn.addEventListener('click', async () => {
  isToday = false
  isWeek = true
  sortedByStatus = false
  let $notDoneBtn = document.getElementById('notDone')
  $notDoneBtn.textContent ="Показать невыполненные"
  const { startOfWeekTimestamp, endOfWeekTimestamp } = getWeekTimestamps()
  const response = await fetchDataDate(url, startOfWeekTimestamp, endOfWeekTimestamp)
  renderTodos(response)
  data = response.data
})

// async function init2() {
//   const { startOfDayTimestamp, endOfDayTimestamp } = getTodayTimestamps();
//   const response = await fetchDataDate(url, startOfDayTimestamp, endOfDayTimestamp)
//   data = await response.data
//   console.log(startOfDayTimestamp, endOfDayTimestamp)

//   console.log("eee",data)
//   // showNotDone(data)
// }

// init2()

/////////////
const $searchInput = document.getElementById('search')
$searchInput.addEventListener('input', handleSearchInput)



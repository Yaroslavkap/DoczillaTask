import { fetchData, fetchDataDate, fetchDataFind } from "./data.js"
import { getRangeTimestamps, getTodayTimestamps, getWeekTimestamps } from "./dates.js"
import { clickNotDone, clickTimesort } from "./filters.js"
import { renderTodos } from "./todos.js"
import { handleSearchInput, showInput } from "./search.js"
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

//////////////SortByTime///////////////////////
let sortedByTime = false
let $timeSort  = document.getElementById('timeSort')
$timeSort.addEventListener('click', () => {
  sortedByTime = !sortedByTime
  return clickTimesort(data, !sortedByTime)
})


////////////////////Time//////////////////
let isToday = false
let isWeek = false

let $todayBtn = document.getElementById('today')
let $weekBtn = document.getElementById('week')
let $datePickBtn = document.getElementById('datePick')

$todayBtn.addEventListener('click', async () =>  {
  isToday = true
  isWeek = false
  sortedByStatus = false
  let $notDoneBtn = document.getElementById('notDone')
  $notDoneBtn.textContent ="Показать невыполненные"
  let $timeSort  = document.getElementById('timeSort')
  $timeSort.textContent ="Сортировать по времени"
  const { startOfDayTimestamp, endOfDayTimestamp } = getTodayTimestamps()
  const response = await fetchDataDate(url, startOfDayTimestamp, endOfDayTimestamp)
  renderTodos(response)
  data = response.data

})

$datePickBtn.addEventListener('click', async () => {

  const startDate = document.getElementById('startDate').value
  const endDate = document.getElementById('endDate').value
  if(startDate && endDate) {
    sortedByStatus = false
    let $notDoneBtn = document.getElementById('notDone')
    $notDoneBtn.textContent ="Показать невыполненные"
    let $timeSort  = document.getElementById('timeSort')
    $timeSort.textContent ="Сортировать по времени"

    
    const { startOfDay, endOfDay } = getRangeTimestamps(startDate, endDate)
    const response = await fetchDataDate(url, startOfDay, endOfDay)
    renderTodos(response)
    data = response.data
  }
  
})

$weekBtn.addEventListener('click', async () => {
  isToday = false
  isWeek = true
  sortedByStatus = false
  let $notDoneBtn = document.getElementById('notDone')
  $notDoneBtn.textContent ="Показать невыполненные"
  let $timeSort  = document.getElementById('timeSort')
  $timeSort.textContent ="Сортировать по времени"
  const { startOfWeekTimestamp, endOfWeekTimestamp } = getWeekTimestamps()
  const response = await fetchDataDate(url, startOfWeekTimestamp, endOfWeekTimestamp)
  renderTodos(response)
  data = response.data
})


const $startInput = document.getElementById('startDate')
const $endtInput = document.getElementById('endDate')
$startInput.addEventListener("input", (event) => {
  $endtInput.value = event.target.value
})


/////////////Search////////////////
const $searchInput = document.getElementById('search')
$searchInput.addEventListener('input', handleSearchInput)
$searchInput.addEventListener('click', showInput)



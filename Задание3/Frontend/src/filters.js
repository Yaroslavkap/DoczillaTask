import { renderTodos, showByTime, showNotDone } from "./todos.js"

export function clickNotDone(data, status) {
    let $notDoneBtn = document.getElementById('notDone')
    if(status) {
        renderTodos({data})
        $notDoneBtn.textContent ="Показать невыполненные"
    } else {
        showNotDone(data)
        $notDoneBtn.textContent ="Показать все"
    }
}

export function clickTimesort(data, status) {
    let $notDoneBtn = document.getElementById('timeSort')
    if(status) {
        renderTodos({data})
        $notDoneBtn.textContent ="Сортировать по времени"
    } else {
        showByTime(data)
        $notDoneBtn.textContent ="Сброс сортировки"
    }
}

// export function clickDatePick() {
//     const startDate = document.getElementById('startDate').value
//     const endDate = document.getElementById('endDate').value
//     if(startDate && endDate) {

//     }
// }
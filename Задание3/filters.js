import { renderTodos, showNotDone } from "./todos.js"

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
import { addStudent, fetchStudents } from "./data.js"
import { renderStudents, init, makeStudent, resetStud } from "./students.js"
// const data =[]

// async function init() {
//     const response = await fetchStudents()
//     renderStudents(response)
//     console.log(response)
    
//   }
  
  
  init()

let studentEx = {
    first_name: "Артем",
    last_name: "Иванов",
    middle_name: "Иванович",
    birth_date: "2000-01-01",
    group_name: "Группа 5"
}
  ////////////////
const $addBtn = document.getElementById('addBtn')
$addBtn.addEventListener('click', async() => {
    let stud = makeStudent()
    await addStudent(stud)
    init()
    resetStud()
} )



import { deleteStudent, fetchStudents } from "./data.js"

function studentBlock(student) {
    const html =
    `<tr>
        <td>${student.id}</td>
        <td>${student.first_name} ${student.last_name} ${student.middle_name}</td>
        <td>${student.birth_date}</td>
        <td>${student.group_name}</td>
        <td><button class='delBtn' id='del${student.id}'>Удалить</button></td>
    </tr>`

    return html
}

export async function init() {
    const response = await fetchStudents()
    renderStudents(response)
    console.log(response)
    
  }
  

export function renderStudents(data) {
    const studentList = document.getElementById('studentList')
  
  
    studentList.innerHTML = '<tr><td>ID</td><td>ФИО</td><td>Дата рождения</td><td>Группа</td><td></td></tr>'
  
    data.map(student => {
    
    const html = studentBlock(student)
    studentList.insertAdjacentHTML('beforeend', html)
    const delBtn = document.getElementById(`del${student.id}`)
        delBtn.addEventListener('click', async() => {
            // showTodoDescription(todo.fullDesc)
            await deleteStudent(student.id)
            init()
        })
    })
  }

  export function makeStudent() {
    const stud_first_name = document.getElementById("stud_first_name").value
    const stud_last_name = document.getElementById("stud_last_name").value
    const stud_middle_name = document.getElementById("stud_middle_name").value
    const stud_birth_date = document.getElementById("stud_birth_date").value
    const stud_group_name = document.getElementById("stud_group_name").value

    const $err = document.getElementById("stud_err")
    $err.innerHTML = ''
    if(stud_first_name && stud_last_name && stud_middle_name && stud_birth_date && stud_group_name) {
        let stud = {
            first_name: stud_first_name,
            last_name: stud_last_name,
            middle_name: stud_middle_name,
            birth_date: stud_birth_date,
            group_name: stud_group_name

        }
        return stud
    } else {
        $err.innerHTML = 'Заполните все поля'
    }
    
    //console.log(stud_first_name)
  }

  export function resetStud() {
    const stud_first_name = document.getElementById("stud_first_name")
    const stud_last_name = document.getElementById("stud_last_name")
    const stud_middle_name = document.getElementById("stud_middle_name")
    const stud_birth_date = document.getElementById("stud_birth_date")
    const stud_group_name = document.getElementById("stud_group_name")

    stud_first_name.value = ''
    stud_last_name.value = ''
    stud_middle_name.value = ''
    stud_birth_date.value = ''
    stud_group_name.value = ''

  }
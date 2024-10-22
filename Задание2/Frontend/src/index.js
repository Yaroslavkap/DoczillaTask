import { addStudent, fetchStudents } from "./data.js"
import { renderStudents, init, makeStudent, resetStud } from "./students.js"

// if (module.hot) {
//   module.hot.accept();
// }
// const data =[]

// async function init() {
//     const response = await fetchStudents()
//     renderStudents(response)
//     console.log(response)
    
//   }
  
  
  init()

// let studentEx = {
//     first_name: "Артем",
//     last_name: "Иванов",
//     middle_name: "Иванович",
//     birth_date: "2000-01-01",
//     group_name: "Группа 5"
// }
  ////////////////
const $addBtn = document.getElementById('addBtn')

$addBtn.addEventListener('click', async() => {
  $addBtn.disabled = true;
    let stud = makeStudent()
    if (stud) {
      await addStudent(stud)
      init()
    }
    
    resetStud()
    $addBtn.disabled = false;
} )

// if ($addBtn) {
//   $addBtn.removeEventListener('click', previousClickHandler);
// }

// const previousClickHandler = async () => {
//   let stud = makeStudent();
//   if (stud) {
//       await addStudent(stud);
//       init();
//   }
//   resetStud();
// };

// $addBtn.addEventListener('click', previousClickHandler);


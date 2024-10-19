
import { fetchData } from "./data.js"

const url ='http://localhost:3000/api/data'
let data = []

async function init() {
    data = await fetchData(url); // Ждем данные
    console.log(data); // Рендерим, передавая объект с данными, состоянием загрузки и ошибкой
  }

init()
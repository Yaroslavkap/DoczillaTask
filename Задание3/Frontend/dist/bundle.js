/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchData: () => (/* binding */ fetchData),\n/* harmony export */   fetchDataDate: () => (/* binding */ fetchDataDate),\n/* harmony export */   fetchDataFind: () => (/* binding */ fetchDataFind)\n/* harmony export */ });\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\nasync function fetchData(url) {\r\n  \r\n    (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)({ data: [], isLoading: true, error: '' })\r\n    let isLoading = true\r\n    let error = ''\r\n    let data = []\r\n\r\n    try {\r\n      const response = await fetch(url)\r\n      if (!response.ok) {\r\n        throw new Error('Ошибка сети')\r\n      }\r\n      data = await response.json()\r\n    } catch (err) {\r\n      error = 'Произошла ошибка при получении данных: ' + err.message\r\n    } finally {\r\n      isLoading = false\r\n    }\r\n  \r\n\r\n    return { data, isLoading, error }\r\n  }\r\n\r\n  async function fetchDataDate(url, start, end) {\r\n  \r\n    (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)({ data: [], isLoading: true, error: '' });\r\n    let isLoading = true\r\n    let error = ''\r\n    let data = []\r\n\r\n    try {\r\n      const response = await fetch(`${url}/date?from=${start}&to=${end}`)\r\n      if (!response.ok) {\r\n        throw new Error('Ошибка сети')\r\n      }\r\n      data = await response.json()\r\n    } catch (err) {\r\n      error = 'Произошла ошибка при получении данных: ' + err.message\r\n    } finally {\r\n      isLoading = false\r\n    }\r\n  \r\n\r\n    return { data, isLoading, error }\r\n  }\r\n\r\n  async function fetchDataFind(url, string) {\r\n  \r\n    \r\n    let isLoading = true\r\n    let error = ''\r\n    let data = []\r\n\r\n    try {\r\n      const response = await fetch(`${url}/find?q=${string}`)\r\n      if (!response.ok) {\r\n        throw new Error('Ошибка сети')\r\n      }\r\n      data = await response.json()\r\n    } catch (err) {\r\n      error = 'Произошла ошибка при получении данных: ' + err.message\r\n    } finally {\r\n      isLoading = false\r\n    }\r\n    \r\n\r\n    return { data, isLoading, error }\r\n  }\n\n//# sourceURL=webpack://frontend/./src/data.js?");

/***/ }),

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRangeTimestamps: () => (/* binding */ getRangeTimestamps),\n/* harmony export */   getTodayTimestamps: () => (/* binding */ getTodayTimestamps),\n/* harmony export */   getWeekTimestamps: () => (/* binding */ getWeekTimestamps)\n/* harmony export */ });\nfunction getWeekTimestamps() {\r\n    const now = new Date()\r\n    let dayOfWeek = now.getUTCDay()\r\n    dayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek\r\n\r\n    const startOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - (dayOfWeek - 1), 0, 0, 0, 0))\r\n    const startOfWeekTimestamp = startOfWeek.getTime()\r\n  \r\n    const endOfWeek = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + (7 - dayOfWeek), 23, 59, 59, 999))\r\n    const endOfWeekTimestamp = endOfWeek.getTime()\r\n  \r\n    return {\r\n      startOfWeekTimestamp,\r\n      endOfWeekTimestamp\r\n    }\r\n  }\r\n\r\n  function getTodayTimestamps() {\r\n    const now = new Date()\r\n  \r\n    const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0))\r\n    const startOfDayTimestamp = startOfDay.getTime()\r\n  \r\n    const endOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 23, 59, 59, 999))\r\n    const endOfDayTimestamp = endOfDay.getTime()\r\n  \r\n    return {\r\n      startOfDayTimestamp,\r\n      endOfDayTimestamp\r\n    };\r\n  }\r\n\r\n  function getRangeTimestamps(startDate, endDate) {\r\n    const start = new Date(startDate)\r\n    const end = new Date(endDate)\r\n    \r\n    const startOfDay = new Date(Date.UTC(start.getFullYear(), start.getMonth(), start.getDate(), 0, 0, 0, 0)).getTime()\r\n    const endOfDay = new Date(Date.UTC(end.getFullYear(), end.getMonth(), end.getDate(), 23, 59, 59, 999)).getTime()\r\n    \r\n    return {\r\n        startOfDay,\r\n        endOfDay\r\n    }\r\n}\r\n\r\n\r\n  \r\n\r\n  \r\n\r\n  \n\n//# sourceURL=webpack://frontend/./src/dates.js?");

/***/ }),

/***/ "./src/filters.js":
/*!************************!*\
  !*** ./src/filters.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clickNotDone: () => (/* binding */ clickNotDone),\n/* harmony export */   clickTimesort: () => (/* binding */ clickTimesort)\n/* harmony export */ });\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\nfunction clickNotDone(data, status) {\r\n    let $notDoneBtn = document.getElementById('notDone')\r\n    if(status) {\r\n        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)({data})\r\n        $notDoneBtn.textContent =\"Показать невыполненные\"\r\n    } else {\r\n        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.showNotDone)(data)\r\n        $notDoneBtn.textContent =\"Показать все\"\r\n    }\r\n}\r\n\r\nfunction clickTimesort(data, status) {\r\n    let $notDoneBtn = document.getElementById('timeSort')\r\n    if(status) {\r\n        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.renderTodos)({data})\r\n        $notDoneBtn.textContent =\"Сортировать по времени\"\r\n    } else {\r\n        (0,_todos_js__WEBPACK_IMPORTED_MODULE_0__.showByTime)(data)\r\n        $notDoneBtn.textContent =\"Сброс сортировки\"\r\n    }\r\n}\r\n\r\n// export function clickDatePick() {\r\n//     const startDate = document.getElementById('startDate').value\r\n//     const endDate = document.getElementById('endDate').value\r\n//     if(startDate && endDate) {\r\n\r\n//     }\r\n// }\n\n//# sourceURL=webpack://frontend/./src/filters.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _dates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dates.js */ \"./src/dates.js\");\n/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters.js */ \"./src/filters.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.js */ \"./src/search.js\");\n\r\n\r\n\r\n\r\n\r\n// import '../main.css'\r\n//import { init } from \"./todos.js\"\r\n\r\n// console.log(\"hhhhh\")\r\n\r\nconst url ='http://localhost:3000/api/todos'\r\nlet data = []\r\n\r\n\r\n\r\nasync function init() {\r\n  const response = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)(url)\r\n  ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(response)\r\n  data = await response.data\r\n  console.log(data)\r\n  // showNotDone(data)\r\n}\r\n\r\n\r\ninit()\r\n///////////////////////Status////////////////////////\r\nlet sortedByStatus = false\r\nlet $notDoneBtn = document.getElementById('notDone')\r\n$notDoneBtn.addEventListener('click', () => {\r\n  sortedByStatus = !sortedByStatus\r\n  return (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.clickNotDone)(data, !sortedByStatus)\r\n})\r\n\r\n//////////////SortByTime///////////////////////\r\nlet sortedByTime = false\r\nlet $timeSort  = document.getElementById('timeSort')\r\n$timeSort.addEventListener('click', () => {\r\n  sortedByTime = !sortedByTime\r\n  return (0,_filters_js__WEBPACK_IMPORTED_MODULE_2__.clickTimesort)(data, !sortedByTime)\r\n})\r\n\r\n\r\n////////////////////Time//////////////////\r\nlet isToday = false\r\nlet isWeek = false\r\n\r\nlet $todayBtn = document.getElementById('today')\r\nlet $weekBtn = document.getElementById('week')\r\nlet $datePickBtn = document.getElementById('datePick')\r\n\r\n$todayBtn.addEventListener('click', async () =>  {\r\n  isToday = true\r\n  isWeek = false\r\n  sortedByStatus = false\r\n  let $notDoneBtn = document.getElementById('notDone')\r\n  $notDoneBtn.textContent =\"Показать невыполненные\"\r\n  let $timeSort  = document.getElementById('timeSort')\r\n  $timeSort.textContent =\"Сортировать по времени\"\r\n  const { startOfDayTimestamp, endOfDayTimestamp } = (0,_dates_js__WEBPACK_IMPORTED_MODULE_1__.getTodayTimestamps)()\r\n  const response = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDate)(url, startOfDayTimestamp, endOfDayTimestamp)\r\n  ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(response)\r\n  data = response.data\r\n\r\n})\r\n\r\n$datePickBtn.addEventListener('click', async () => {\r\n\r\n  const startDate = document.getElementById('startDate').value\r\n  const endDate = document.getElementById('endDate').value\r\n  if(startDate && endDate) {\r\n    sortedByStatus = false\r\n    let $notDoneBtn = document.getElementById('notDone')\r\n    $notDoneBtn.textContent =\"Показать невыполненные\"\r\n    let $timeSort  = document.getElementById('timeSort')\r\n    $timeSort.textContent =\"Сортировать по времени\"\r\n\r\n    \r\n    const { startOfDay, endOfDay } = (0,_dates_js__WEBPACK_IMPORTED_MODULE_1__.getRangeTimestamps)(startDate, endDate)\r\n    const response = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDate)(url, startOfDay, endOfDay)\r\n    ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(response)\r\n    data = response.data\r\n  }\r\n  \r\n})\r\n\r\n$weekBtn.addEventListener('click', async () => {\r\n  isToday = false\r\n  isWeek = true\r\n  sortedByStatus = false\r\n  let $notDoneBtn = document.getElementById('notDone')\r\n  $notDoneBtn.textContent =\"Показать невыполненные\"\r\n  let $timeSort  = document.getElementById('timeSort')\r\n  $timeSort.textContent =\"Сортировать по времени\"\r\n  const { startOfWeekTimestamp, endOfWeekTimestamp } = (0,_dates_js__WEBPACK_IMPORTED_MODULE_1__.getWeekTimestamps)()\r\n  const response = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataDate)(url, startOfWeekTimestamp, endOfWeekTimestamp)\r\n  ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(response)\r\n  data = response.data\r\n})\r\n\r\n\r\nconst $startInput = document.getElementById('startDate')\r\nconst $endtInput = document.getElementById('endDate')\r\n$startInput.addEventListener(\"input\", (event) => {\r\n  $endtInput.value = event.target.value\r\n})\r\n\r\n\r\n/////////////Search////////////////\r\nconst $searchInput = document.getElementById('search')\r\n$searchInput.addEventListener('input', _search_js__WEBPACK_IMPORTED_MODULE_4__.handleSearchInput)\r\n$searchInput.addEventListener('click', _search_js__WEBPACK_IMPORTED_MODULE_4__.showInput)\r\n\r\n\r\n\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSearchInput: () => (/* binding */ handleSearchInput),\n/* harmony export */   showInput: () => (/* binding */ showInput)\n/* harmony export */ });\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ \"./src/data.js\");\n/* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.js */ \"./src/todos.js\");\n\r\n\r\nconst url = 'http://localhost:3000/api/todos'\r\n\r\nfunction debounce(func, delay) {\r\n    let timeout;\r\n    return function(...args) {\r\n      clearTimeout(timeout);\r\n      timeout = setTimeout(() => func.apply(this, args), delay)\r\n    };\r\n  }\r\n\r\n  function todoEl(todo) {\r\n    let date = new Date(todo.date)\r\n    const options = {\r\n        day: 'numeric',\r\n        month: 'long',\r\n        year: 'numeric',\r\n        hour: '2-digit',\r\n        minute: '2-digit'\r\n      }\r\n    const formattedDate = date.toLocaleDateString('ru-RU', options).replace(',', '')\r\n    const html =\r\n     `<div class='todoEl' id='el-${todo.id}'>\r\n            <p>${todo.name}(${formattedDate})</p>\r\n    </div>`\r\n    return html\r\n}\r\n\r\nfunction renderSearchData({ data, isLoading = false, error ='' }) {\r\n  const searchData = document.getElementById('searchData')\r\n  \r\n    if (isLoading) {\r\n      searchData.textContent = 'Загрузка...'\r\n      return\r\n    }\r\n  \r\n    if (error) {\r\n      searchData.textContent = error\r\n      return\r\n    }\r\n  \r\n    searchData.innerHTML = ''\r\n\r\n    data.map(todo => {\r\n      const html = todoEl(todo)\r\n      searchData.insertAdjacentHTML('beforeend', html)\r\n      const todoElement = document.getElementById(`el-${todo.id}`)\r\n          todoElement.addEventListener('click', () => {\r\n              ;(0,_todos_js__WEBPACK_IMPORTED_MODULE_1__.showTodoDescription)(todo.fullDesc)\r\n              const searchData = document.getElementById('searchData')\r\n              searchData.style.display = 'none'\r\n          })\r\n      })\r\n}\r\n\r\nconst handleSearchInput = debounce(async (event) => {\r\n    // renderSearchData\r\n    const query = event.target.value\r\n    if(query !== '') {\r\n      let data = await (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.fetchDataFind)(url, query)\r\n      console.log(data)\r\n      renderSearchData(data)\r\n    }\r\n  }, 1000)\r\n\r\n  function showInput() {\r\n    const searchData = document.getElementById('searchData')\r\n    const overlay = document.getElementById('overlay')\r\n    searchData.style.display = 'block'\r\n    overlay.style.display = 'block'\r\n  }\n\n//# sourceURL=webpack://frontend/./src/search.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderFullTodo: () => (/* binding */ renderFullTodo),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos),\n/* harmony export */   showByTime: () => (/* binding */ showByTime),\n/* harmony export */   showNotDone: () => (/* binding */ showNotDone),\n/* harmony export */   showTodoDescription: () => (/* binding */ showTodoDescription)\n/* harmony export */ });\n// import { fetchData } from \"./data\";\r\n\r\n// const url ='http://localhost:3000/api/todos'\r\n\r\nfunction todoBlock(todo) {\r\n    let date = new Date(todo.date)\r\n    const options = {\r\n        day: 'numeric',\r\n        month: 'long',\r\n        year: 'numeric',\r\n        hour: '2-digit',\r\n        minute: '2-digit'\r\n      }\r\n    const formattedDate = date.toLocaleDateString('ru-RU', options).replace(',', '')\r\n    const html =\r\n     `<div class='todoBlock' id='todo-${todo.id}'>\r\n        <div class ='todoContent'>\r\n            <h2>${todo.name}(${formattedDate})</h2>\r\n            <p>${todo.shortDesc}</p>\r\n        </div>\r\n        <div class = ${todo.status ? \"statusOn\" : \"status\" }> + </div>\r\n    </div>`\r\n    return html\r\n}\r\n\r\nfunction renderTodos({ data, isLoading = false, error ='' }) {\r\n    const todoList = document.getElementById('todoList')\r\n  \r\n    if (isLoading) {\r\n      todoList.textContent = 'Загрузка...'\r\n      return\r\n    }\r\n  \r\n    if (error) {\r\n      todoList.textContent = error\r\n      return\r\n    }\r\n  \r\n    todoList.innerHTML = ''\r\n  \r\n    data.map(todo => {\r\n    //   const todoDiv = document.createElement('div')\r\n    //   todoDiv.classList.add('todo')\r\n  \r\n    //   const todoName = document.createElement('h3')\r\n    //   todoName.textContent = todo.name;\r\n    //   todoDiv.appendChild(todoName)\r\n  \r\n  \r\n    //   todoList.appendChild(todoDiv)\r\n    const html = todoBlock(todo)\r\n    todoList.insertAdjacentHTML('beforeend', html)\r\n    const todoElement = document.getElementById(`todo-${todo.id}`)\r\n        todoElement.addEventListener('click', () => {\r\n            showTodoDescription(todo.fullDesc)\r\n        })\r\n    })\r\n  }\r\n\r\n\r\n\r\n  function showNotDone(data) {\r\n    let filtredData = data.filter(el => el.status === false)\r\n    // let isLoading = false\r\n    // let error = ''\r\n    renderTodos({ data: filtredData})\r\n    console.log(filtredData)\r\n  }\r\n\r\n  function showByTime(data) {\r\n    let filtredData = [...data].sort((a, b) => {\r\n      const timeA = new Date(a.date).getTime()\r\n      const timeB = new Date(b.date).getTime()\r\n      return timeA - timeB\r\n    })\r\n    \r\n    renderTodos({ data: filtredData})\r\n    console.log(filtredData)\r\n  }\r\n\r\n\r\n  function fullTodo(todo) {\r\n    const html =\r\n     `<div class='todoBlock'>\r\n        <div class ='todoContent'>\r\n            <h2>${todo.name}(${formattedDate})</h2>\r\n            <p>${todo.fullDesc}</p>\r\n        </div>\r\n        <div class = ${todo.status ? \"statusOn\" : \"status\" }> + </div>\r\n    </div>`\r\n    return html\r\n  }\r\n\r\n  function renderFullTodo(todo) {\r\n    const $Todo = document.getElementById('todoList')\r\n  }\r\n\r\n  function showTodoDescription(description) {\r\n    const modal = document.getElementById('modal')\r\n    const overlay = document.getElementById('overlay')\r\n    const todoDescription = document.getElementById('todo-description')\r\n    todoDescription.textContent = description;\r\n    modal.style.display = 'block'\r\n    overlay.style.display = 'block'\r\n  }\r\n  \r\n\r\n  const overlay = document.getElementById('overlay');\r\n  \r\n  const closeModalBtn = document.getElementById('closeModal');\r\n  closeModalBtn.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    overlay.style.display = 'none';\r\n  });\r\n\r\n  // Закрытие окна при клике на overlay\r\n  overlay.addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    overlay.style.display = 'none';\r\n\r\n    const searchData = document.getElementById('searchData')\r\n    searchData.style.display = 'none'\r\n  });\n\n//# sourceURL=webpack://frontend/./src/todos.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
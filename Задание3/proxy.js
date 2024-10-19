// Импортируем встроенные модули Node.js
const http = require('http');
//const fetch = require('node-fetch'); // встроенный fetch для версии Node 18+

// Указываем порт для сервера
const port = 3000;

const url ='https://todo.doczilla.pro/api/todos'

// Создаем сервер
const server = http.createServer(async (req, res) => {
  // Настраиваем заголовки для CORS
  res.setHeader('Access-Control-Allow-Origin', '*'); // Разрешаем запросы с любого источника
  res.setHeader('Access-Control-Allow-Methods', 'GET'); // Разрешаем только GET-запросы
  res.setHeader('Content-Type', 'application/json'); // Устанавливаем тип контента как JSON

  // Проверяем, что запрос идет на правильный путь
  if (req.url === '/api/data' && req.method === 'GET') {
    try {
      // Делаем запрос на сторонний API
      const response = await fetch(url);

      // Проверяем успешен ли запрос
      if (!response.ok) {
        throw new Error('Ошибка при получении данных от внешнего API');
      }

      // Читаем и преобразуем ответ в JSON
      const data = await response.json();

      // Отправляем данные обратно на фронтенд
      res.writeHead(200); // Успешный статус
      res.end(JSON.stringify(data)); // Отправляем данные в виде JSON

    } catch (error) {
      // В случае ошибки отправляем сообщение об ошибке
      res.writeHead(500); // Ошибка на стороне сервера
      res.end(JSON.stringify({ message: 'Ошибка сервера: ' + error.message }));
    }
  } else {
    // Если запрос на неизвестный маршрут, возвращаем 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Маршрут не найден');
  }
});

// Запускаем сервер на указанном порту
server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});

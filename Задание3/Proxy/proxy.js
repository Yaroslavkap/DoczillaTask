const http = require('http')


const port = 3000

const url ='https://todo.doczilla.pro/'

// Создаем сервер
const server = http.createServer(async (req, res) => {
 
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Content-Type', 'application/json')

  if (req.url.includes('/api/todos') && req.method === 'GET') {
    try {

      const response = await fetch(url + req.url)

      if (!response.ok) {
        throw new Error('Ошибка при получении данных от внешнего API')
      }

      const data = await response.json()


      res.writeHead(200)
      res.end(JSON.stringify(data))

    } catch (error) {
      res.writeHead(500); // Ошибка на стороне сервера
      res.end(JSON.stringify({ message: 'Ошибка сервера: ' + error.message }))
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Маршрут не найден')
  }
})

server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`)
})

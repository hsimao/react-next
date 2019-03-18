const next = require('next')
const http = require('http')
const url = require('url')
const path = require('path')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // 解析請求URL 獲得 pathanme
      const parsedUrl = url.parse(req.url, true)
      const { pathname } = parsedUrl

      // 如果是 service-worker 發出請求，則將其作為靜態文件提供
      if (pathname === '/service-worker.js') {
        const filePath = path.join('__dirname', '.next', pathname)
        app.serveStatic(req, res, filePath)

        // 如果不是 service-worker 就交由 next 處理
      } else {
        handle(req, res, parsedUrl)
      }
    })
    .listen(port, () => {
      console.log(`Listening on PORT ${port}`)
    })
})

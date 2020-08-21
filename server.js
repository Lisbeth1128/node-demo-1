if (path === '/') {
    Response.statusCode = 200
    Response.setHeader('Content-Type', 'text/html;charset=utf-8')
    Response.write(`
      <link rel="stylesheet" href="./style.css">
      <h1>你好</h1>
    `)
    Response.end()
} else if(path === '/style.css') {
    Response.statusCode = 200
    Response.setHeader('Content-Type', 'text/css;charset=utf-8')
    Response.write(`h1{color: red;}`)
    Response.end()
} else {
    Response.statusCode = 404
    Response.setHeader('Content-Type', 'text/html;charset=utf-8')
    Response.write(`您访问的页面不存在`)
    Response.end()
}
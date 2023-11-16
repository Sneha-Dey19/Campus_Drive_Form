app.get('/', (req, res) => {
  let code= "<h1>Programming Language</h1><ul><li>JAVA</li><li>Java Script</li><ul>"
  res.send(code);
})
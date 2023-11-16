// // server.js
// const express = require('express');
// const app = express();
// const PORT = 3000;

// const path = require('path');

// const routes = require('./route');
// app.use(express.json());
// app.set("view", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

// app.use('/',routes)

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express')
const path = require('path')
const app = express()
const port = 8080
const fileUpload = require("express-fileupload")
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))
app.use(fileUpload({parseNested:true}))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
require("./route")(app)

app.use(express.static(path.join(__dirname,'public')))
// app.use('/',route)
app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
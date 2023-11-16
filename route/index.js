// const controller = require("../controller")
// module.exports = (app)=>{
//     app.get('/',controller.HomeController.home)
// }
const controller = require('../controllers')

module.exports = (app)=>{
    app.get('/',controller.HomeController.home)
    // app.use('/',require('./home'))
    app.get('/calculator', controller.resultController.calculator)
    app.post('/result', controller.resultController.result)
}

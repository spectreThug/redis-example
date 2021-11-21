
module.exports = function (app) {
    var requestHandler = require("../controllers/appControllers")
    app.get("/:country",requestHandler.GET)
}
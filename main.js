const express = require('express');
const app = express();
//passing express app to app dir
require("./app/routes/appRoutes")(app)
//init redis server
require("./core/redis_server")

app.listen(3000,function () {
console.log('listening on port 3000')
})



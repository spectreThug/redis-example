//packages
const redis = require("redis");
const client = new redis.createClient();

//redis event listeners

//connect , ready , error , end

client.on("connect", () => console.log("redis client is successfully connected"));

client.on("ready", () => console.log("redis client is ready !"));

client.on("error", (error) => console.error(error));

client.on("end", () => console.log("redis client disconnected from the server"));

//exporting client
module.exports = client;
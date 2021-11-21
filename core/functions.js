const redis = require('redis');
const { promisify } = require("util");
const client = require("./redis_server");

//convert set & get to async methods
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);
module.exports = {
set(key,value){
return new Promise((resolve,reject) => {
    SET_ASYNC(key,value).then(response => {
    resolve(response)
    })
})
},
get(key){
return new Promise((resolve , reject) => {
    GET_ASYNC(key).then(data => {
    resolve(data)
    })
})
},

}
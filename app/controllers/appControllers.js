const {set, get} = require("../../core/functions")
const axios = require("axios").default;
const config = require("../../config.json")
exports.GET = async function (req, res) {
try {
    const { country } = req.params;
    let cache = await get(country)
    if(cache != null) return res.status(200).send(`<h1>${country} cases is:  ${cache}</h1>`);
    let apiResponse = await axios.get(`${config.API_URL}/${country}`)
    if(apiResponse.status == 200) {
    let cases = apiResponse.data.cases;
    let redisRes = await set(country,cases)
    if(redisRes != "OK") return res.status(500).send("internal server error"); 
    return res.status(200).send(`<h1>${country} cases is:  ${cases}</h1>`);
    }

} catch (error) {
    return res.status(400).send("Country not found or doesn't have any cases");
}



}

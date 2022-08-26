
const express = require("express")
const app = express.Router();

const fs = require("fs")

app.get("/fortnite/api/cloudstorage/system", (req, res) => {
    res.setHeader('content-type', 'application/json').json([]).status(200)
})
app.get("/fortnite/api/cloudstorage/system/config", (req, res) => {
    res.setHeader('content-type', 'application/json').json([]).status(200);
})
app.put("/fortnite/api/cloudstorage/user/:accountId/:filename", (req, res) => {
    res.status(204).send()
})
app.get("/fortnite/api/storefront/v2/keychain", (req, res) => {
    res.json(JSON.parse(fs.readFileSync(`./json/keychain.json`, 'utf8'))).status(200);
})
module.exports = app
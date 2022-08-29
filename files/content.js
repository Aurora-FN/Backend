const express = require("express")
const app = express.Router();

const fs = require("fs")

app.get(["/content/api/pages/fortnite-game", "/content/app/pages/"], (req, res) => {
    res.json(JSON.parse(fs.readFileSync(`./json/content.json`, 'utf8')))
})
app.get('/content/*', function (req, res) {
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});

module.exports = app
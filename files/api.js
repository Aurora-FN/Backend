
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
app.all('/fortnite/api/game/v2/tryPlayOnPlatform/account/*', (req, res) => {
    res.setHeader('Content-Type', 'text/plain').send(true).end();
})
app.get("/fortnite/api/game/v2/enabled_features", (req, res) => {
    res.json([])
})
app.get("/fortnite/api/v2/versioncheck/*", (req, res) => {
    res.json({
        "type": "NO_UPDATE"
    })
})
app.post("/fortnite/api/game/v2/grant_access/*", (req, res) => {
    res.json({}).status(204).end();
})
app.get("/launcher/api/public/distributionpoints/", (req, res) => {
    res.json({
        "distributions": [
            "https://epicgames-download1.akamaized.net/",
            "https://download.epicgames.com/",
            "https://download2.epicgames.com/",
            "https://download3.epicgames.com/",
            "https://download4.epicgames.com/",
            "https://fastly-download.epicgames.com/"
        ]
    });
})
app.get("/account/api/epicdomains/ssodomains", (req, res) => {
    res.json([
        "unrealengine.com",
        "unrealtournament.com",
        "fortnite.com",
        "epicgames.com"
    ])
})
app.get("/api/v1/events/Fortnite/download/*", async (req, res) => {
    res.json({})
})
module.exports = app

const express = require("express")
const app = express.Router();
const path = require("path")

const fs = require("fs")

app.get("/fortnite/api/cloudstorage/system", (req, res) => {
    res.setHeader('content-type', 'application/json').json([
        {
            "uniqueFilename": "DefaultEngine.ini",
            "filename": "DefaultEngine.ini",
            "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
            "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
            "length": fs.readFileSync("./cloudstorage/DefaultEngine.ini").length,
            "contentType": "text/plain",
            "uploaded": "9999-9999-9999",
            "storageType": "S3",
            "doNotCache": false
        },
        {
            "uniqueFilename": "DefaultGame.ini",
            "filename": "DefaultGame.ini",
            "hash": "603E6907398C7E74E25C0AE8EC3A03FFAC7C9BB4",
            "hash256": "973124FFC4A03E66D6A4458E587D5D6146F71FC57F359C8D516E0B12A50AB0D9",
            "length": fs.readFileSync("./cloudstorage/DefaultGame.ini").length,
            "contentType": "text/plain",
            "uploaded": "9999-9999-9999",
            "storageType": "S3",
            "doNotCache": false
        }
    ]).status(200)
})
app.get("/fortnite/api/cloudstorage/system/config", (req, res) => {
    res.setHeader('content-type', 'application/json').json([]).status(200);
})
app.get("/fortnite/api/cloudstorage/user/:accountId", (req, res) => res.json([]))

app.get("/fortnite/api/cloudstorage/user/:accountId/:filename", (req, res) => res.status(204).send())

app.put("/fortnite/api/cloudstorage/user/:accountId/:filename", (req, res) => res.status(204).send())

app.get("/fortnite/api/cloudstorage/system/:file", (req, res) => {
    const file = req.params.file;
    try {
        res.sendFile(path.join(__dirname, `../cloudstorage/${file}`));
        res.status(200);
    } catch (err) {
        console.log(err);
        res.status(200);
    }
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
app.all("/datarouter/api/v1/public/data", (req, res) => res.status(204).end())
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
app.all('/catalog/api/shared/bulk/offers', async (req, res) => {
    res.json(JSON.parse(fs.readFileSync(`./json/bulk_offers.json`, 'utf8')));
    res.status(200);
})
app.get("/api/v1/events/Fortnite/download/*", async (req, res) => res.json({}))
app.get("/fortnite/api/game/v2/world/info", (req, res) => res.json({}))
app.get("/fortnite/api/game/v2/twitch/*", (req, res) => res.json([]))
app.get("/eulatracking/api/shared/agreements/fn", (req, res) => res.json({}))
app.all("/fortnite/api/matchmaking/session/findPlayer/*", (req, res) => {
    res.json().status(200).end();
})
app.all("/fortnite/api/receipts/v1/account/*/receipts", (req, res) => res.json({}))
app.all("/payment/v1/purchaseToken",  (req, res) => {
    res.send("<body>Errors</body>")
})
module.exports = app
const express = require("express")
const app = express.Router();

app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end()
})

app.get("/lightswitch/api/service/bulk/status", async (req, res) => {
    res.json(
        [{
            "serviceInstanceId": "fortnite",
            "status": "UP",
            "message": "servers up.",
            "maintenanceUri": null,
            "overrideCatalogIds": [
                "a7f138b2e51945ffbfdacc1af0541053"
            ],
            "allowedActions": [
                "PLAY",
                "DOWNLOAD"
            ],
            "banned": false,
            "launcherInfoDTO": {
                "appName": "Fortnite",
                "catalogItemId": "4fe75bbc5a674f4f9b356b5c90567da5",
                "namespace": "fn"
            }
        }]
    )
})

app.get('*', function (req, res) {
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});
module.exports = app
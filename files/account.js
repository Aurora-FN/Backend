const crypto = require("crypto")

const express = require("express")
const app = express.Router();

app.get("/account/api/public/account/:accountId", (req, res) => {
    res.json({
        "id": req.params.accountId,
        "displayName": req.params.accountId,
        "name": req.params.accountId,
        "email": req.params.email,
        "failedLoginAttempts": 0,
        "lastLogin": new Date().toISOString(),
        "numberOfDisplayNameChanges": 0,
        "ageGroup": "UNKNOWN",
        "headless": false,
        "country": "US",
        "lastName": "User",
        "preferredLanguage": "en",
        "canUpdateDisplayName": false,
        "tfaEnabled": false,
        "emailVerified": true,
        "minorVerified": false,
        "minorExpected": false,
        "minorStatus": "UNKNOWN"
    })
})
app.delete("/account/api/oauth/sessions/kill/*", (req, res) => res.status(204).end())
app.get("/account/api/oauth/verify", (req, res) => {
    console.log(req.body)
    res.json({
        "token": "aurorav3",
        "session_id": "3c3662bcb661d6de679c636744c66b62",
        "token_type": "bearer",
        "client_id": "aurorav3",
        "internal_client": true,
        "client_service": "fortnite",
        "account_id": "aurorav3",
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "auth_method": "exchange_code",
        "display_name": req.body.username,
        "app": "fortnite",
        "in_app_id": "aurorav3",
        "device_id": "aurorav3"
    })
    res.status(204).end()
})
app.post("/account/api/oauth/token", async (req, res, next) => {
    const grantType = req.body.grant_type
    var displayName;
    var accountId;

    if (grantType == "password") {
        try {
            // find account stuff blah 
        } catch (err) {
            console.log("OAUTH ERROR: " + err);
            return res.status(400).json({
                "errorCode": "errors.com.epicgames.account_token.not_found",
                "message": "The Account Isnt Found on our data base."
            })
        }
    }
    if (grantType == "client_credentials") {
        displayName = undefined
        accountId = undefined
    }
    if (grantType == "exchange_code") {
        displayName = req.body.exchange_code;
        accountId = req.body.exchange_code
    }

    res.json({
        access_token: crypto.randomBytes(16).toString("hex"),
        expires_in: 28800,
        expires_at: "9999-12-31T23:59:59.999Z",
        token_type: "bearer",
        account_id: accountId,
        client_id: "ec684b8c687f479fadea3cb2ad83f5c6",
        internal_client: true,
        client_service: "fortnite",
        displayName: displayName,
        app: "fortnite",
        in_app_id: accountId,
        device_id: "5dcab5dbe86a7344b061ba57cdb33c4f"
    });
})
app.get('/account/*', function(req, res){
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});
module.exports = app
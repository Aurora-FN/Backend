const crypto = require("crypto")
const bcrypt = require("bcrypt")

const express = require("express")
const app = express.Router();

const user = require("../modules/user")

app.get("/account/api/public/account/:accountId", async (req, res) => {
    var Account = await user.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();
    if (Account == null) {
        res.json(
            "errors.com.epicgames.common.account.invalid_accountId", 1011,
            "It appears that your Account ID header may be invalid or not present, please verify that you are sending the correct headers.",
            "com.epicgames.account.public", "prod", []
        )
    }
    res.json({
        "id": Account.id,
        "displayName": Account.displayName,
        "name": Account.displayName,
        "email": Account.email,
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
app.get("/account/api/public/account", async (req, res) => {
    var UsernameCheck = await user.findOne({ id: req.query.accountId }).lean();
    console.log(UsernameCheck)
    if (UsernameCheck) {
        res.json(
            [{
                "id": UsernameCheck.id,
                "displayName": UsernameCheck.displayName,
                "externalAuths": {}
            },]
        )
    } else {
        res.json(
            [{
                "id": "none",
                "displayName": "nono",
                "externalAuths": {}
            },]
        )
    }
})
app.get("/account/api/public/account/displayName/:displayName", async (req, res) => {
    var UsernameCheck = await user.findOne({ displayName: req.params.displayName, caseSensitive: false }).lean();

    if (UsernameCheck) {
        res.json({
            id: UsernameCheck.id,
            displayName: UsernameCheck.displayName,

        })
    }
    else {
        return res.json(
            "errors.com.epicgames.account.account_not_found", 18007,
            `Sorry, we couldn't find an account for ${req.params.displayName}`,
            "com.epicgames.account.public", "prod"
        )
    }
})
app.get("/account/api/public/account/email/:email", async (req, res) => {
    var UsernameCheck = await user.findOne({ email: req.params.email, caseSensitive: false }).lean();

    if (UsernameCheck) {
        res.json({
            id: UsernameCheck.id,
            displayName: UsernameCheck.displayName,

        })
    }
    else {
        return res.json(
            "errors.com.epicgames.account.account_not_found", 18007,
            `Sorry, we couldn't find an account for ${req.params.email}`,
            "com.epicgames.account.public", "prod"
        )
    }
})
app.delete("/account/api/oauth/sessions/kill/*", (req, res) => res.status(204).end())
app.delete("/account/api/oauth/sessions/kill", (req, res) => res.status(204).end())
app.get("/account/api/public/account/:accountId/externalAuths", (req, res) => res.json({}))
app.get("/account/api/oauth/verify", (req, res) => {
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.displayName)
    res.json({
        "token": "aurorav3",
        "session_id": "3c3662bcb661d6de679c636744c66b62",
        "token_type": "bearer",
        "client_id": "aurorav3",
        "internal_client": true,
        "client_service": "fortnite",
        "account_id": req.aurorav3,
        "expires_in": 28800,
        "expires_at": "9999-12-02T01:12:01.100Z",
        "auth_method": "exchange_code",
        "display_name": req.aurorav3,
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
            //console.log(req.body.password)
            var UsernameCheck = await user.findOne({ email: req.body.username, caseSensitive: true }).lean();

            if (bcrypt.compareSync(req.body.password, UsernameCheck.password)) {
                displayName = UsernameCheck.displayName
                accountId = UsernameCheck.id
            } else {
                return res.status(400).json(
                    "errors.com.epicgames.common.oauth.invalid_client", 1011,
                    "It appears that your Authorization header may be invalid or not present, please verify that you are sending the correct headers.",
                    "com.epicgames.account.public", "prod", []
                )
            }
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
    console.log(displayName)
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
app.all("/account/api/oauth/exchange", (req, res) => {
    res.json({})
})
app.get('/account/*', function (req, res) {
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});
module.exports = app
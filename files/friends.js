const express = require("express")
const app = express.Router();

const user = require("../modules/user")
const friends = require("../modules/friends")

app.get("/friends/api/public/friends/:accountId", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();
    console.log(Account)
    const displayName = []
    if (Account) {
        var FriendsIG = Account.accepted
        console.log(FriendsIG)
        if (FriendsIG.length === 0) {
            displayName.push({ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })
            return res.json(displayName)
        } else {
            FriendsIG.forEach(function (meme) {
                console.log(meme)
                displayName.push({ "accountId": meme.displayName, "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })

            })
            return res.json(displayName)
        }
    } else {
        displayName.push({ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })
        return res.json(displayName)
    }
})

app.get("/friends/api/v1/:accountId/summary", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();
    const displayName = []
    if (Account) {
        var FriendsIG = Account.accepted
        var FriendsIncoming = Account.incoming
        var FriendsOutgoing = Account.outgoing
        console.log(FriendsIG)
        if (FriendsIG.length === 0 && FriendsIncoming.length === 0) {
            res.json({
                "friends": [],
                "incoming": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
                "outgoing": [],
                "suggested": [],
                "blocklist": [],
                "settings": {
                    "acceptInvites": Account.acceptInvites || "private"
                }
            })
        } else {
            FriendsIG.forEach(function (meme) {
                displayName.push({ "accountId": meme.displayName, "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })
            })
            res.json({
                "friends": displayName,
                "incoming": [],
                "outgoing": [],
                "suggested": [],
                "blocklist": [],
                "settings": {
                    "acceptInvites": Account.acceptInvites || "private"
                }
            })
        }
    } else {
        res.json({
            "friends": [{"accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString()}],
            "incoming": [],
            "outgoing": [],
            "suggested": [],
            "blocklist": [],
            "settings": {
                "acceptInvites": "public"
            }
        })
    }
})
app.get("/friends/api/v1/:accountId/friends", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();
    const displayName = []
    if (Account) {
        var FriendsIG = Account.accepted
        var FriendsIncoming = Account.incoming
        var FriendsOutgoing = Account.outgoing
        console.log(FriendsIG)
        if (FriendsIG.length === 0 && FriendsIncoming.length === 0) {
            res.json({
                "friends": [],
                "incoming": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
                "outgoing": [],
                "suggested": [],
                "blocklist": [],
                "settings": {
                    "acceptInvites": Account.acceptInvites || "private"
                }
            })
        } else {
            FriendsIG.forEach(function (meme) {
                displayName.push({ "accountId": meme.displayName, "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })
            })
            res.json({
                "friends": displayName,
                "incoming": [],
                "outgoing": [],
                "suggested": [],
                "blocklist": [],
                "settings": {
                    "acceptInvites": Account.acceptInvites || "private"
                }
            })
        }
    } else {
        res.json({
            "friends": [{"accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString()}],
            "incoming": [],
            "outgoing": [],
            "suggested": [],
            "blocklist": [],
            "settings": {
                "acceptInvites": "public"
            }
        })
    }
})


app.get("/friends/api/v1/:accountId/settings", async (req, res) => {
    res.json({})
})

app.get("/friends/api/v1/:accountId/blocklist", async (req, res) => {
    res.json([])
})

app.get("/friends/api/public/list/fortnite/:accountId/recentPlayers", async (req, res) => {
    res.json([])
})

app.get("/friends/api/public/blocklist/:accountId", async (req, res) => {
    res.json({
        "blockedUsers": [] // need to had real blocked users here!
    })
})

module.exports = app
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
        // if (FriendsIG.length === 0 && FriendsIncoming.length === 0) {
        /*  res.json({
              "friends": [],
              "incoming": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
              "outgoing": [],
              "suggested": [],
              "blocklist": [],
              "settings": {
                  "acceptInvites": Account.acceptInvites || "private"
              }
          })*/
        //} else {
        //  FriendsIG.forEach(function (meme) {
        //   displayName.push({ "accountId": meme.displayName, "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() })
        // })
        res.json({
            friends: Account.accepted.map(x => {
                return {
                    accountId: x.accountId,
                    groups: [],
                    mutual: 0,
                    alias: "",
                    note: "",
                    favorite: false,
                    created: x.createdAt
                }
            }),
            incoming: Account.incoming.map(x => {
                return {
                    accountId: x.accountId,
                    favorite: false
                }
            }),
            outgoing: Account.outgoing.map(x => {
                return {
                    accountId: x.accountId,
                    favorite: false
                }
            }),
            suggested: [],
            blocklist: [],
            settings: {
                "acceptInvites": Account.acceptInvites || "private"
            }
        })
        //  }
    } else {
        res.json({
            "friends": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
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
app.all("/friends/api/v1/:accountId/outgoing", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();

    if (Account) {
        return res.json(Account.outgoing.map(friends => {
            return {
                accountId: friends.accountId,
                groups: [],
                mutual: 0,
                alias: "",
                note: "",
                favorite: false,
                created: friends.createdAt || "9999-99-99"
            }
        }))
    } else {
        return res.json("errors.com.epicgames.account.account_not_found", 18007,
            `Sorry, we couldn't find an account for ${req.params.accountId}`,
            "friends", "prod")
    }
})
app.all("/friends/api/v1/:accountId/incoming", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();

    if (Account) {
        return res.json(Account.incoming.map(friends => {
            return {
                accountId: friends.accountId,
                groups: [],
                mutual: 0,
                alias: "",
                note: "",
                favorite: false,
                created: friends.createdAt || "9999-99-99"
            }
        }))
    } else {
        return res.json("errors.com.epicgames.account.account_not_found", 18007,
            `Sorry, we couldn't find an account for ${req.params.accountId}`,
            "friends", "prod")
    }
})
app.get("/friends/api/v1/:accountId/friends", async (req, res) => {
    var Account = await friends.findOne({ id: req.params.accountId, caseSensitive: true }).lean();
    const displayName = []
    if (Account) {
        var FriendsIG = Account.accepted
        var FriendsIncoming = Account.incoming
        var FriendsOutgoing = Account.outgoing
        console.log(FriendsIG)
        //  if (FriendsIG.length === 0 && FriendsIncoming.length === 0) {
        //    res.json({
        //        "friends": [],
        // //         "incoming": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
        //            "outgoing": [],
        //            "suggested": [],
        //             "blocklist": [],
        //             "settings": {
        //                 "acceptInvites": Account.acceptInvites || "private"
        //              }
        //          })
        //      } else {
        /*    FriendsIG.forEach(function (meme) {
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
            })*/
        res.json(Account.accepted.map(friends => {
            return {
                accountId: friends.id,
                groups: [],
                mutual: 0,
                alias: "",
                note: "",
                favorite: false,
                created: friends.createdAt
            }
        }))
        //  }
    } else {
        res.json({
            "friends": [{ "accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString() }],
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

app.all("/friends/api/public/friends/:accountId/:friendId", async (req, res) => {
    var Account = await friends.findOne({ id: req.params.accountId }).lean();
    console.log(Account)
    if (Account) {
        var Friends = await friends.findOne({ id: req.params.friendId }).lean();
        console.log(Friends)
        if (Friends) {
            console.log(Account.incoming)
            const incoming = Account.incoming
            const accepted = Account.accepted
            console.log(incoming.includes(req.params.friendId))
            console.log(accepted.includes(req.params.friendId))
            if (Account.accepted.find(x => x.accountId == req.params.friendId)) {
                return res.status(409).json(
                    "errors.com.epicgames.friends.friend_request_accepted", 14014,
                    `friend request between ${req.params.accountId} and ${req.params.friendId} already exists.`,
                    "friends", "prod", [req.params.friendId]
                )
            }
            else if (Account.incoming.find(x => x.accountId == req.params.friendId)) {
                return res.status(409).json(
                    "errors.com.epicgames.friends.friend_request_already_sent", 14014,
                    `friend request has already been sent to ${req.params.friendId}`,
                    "friends", "prod", [req.params.friendId]
                )
            }else{
                var CurrentFriends = Account.incoming;
                CurrentFriends.push({ accountId: Friends.id, groups: [], mutual: 0, alias: "", note: "", favorite: false, created: Friends.createdAt })
                await friends.updateOne({ id: req.params.accountId }, { $set: { incoming: CurrentFriends } })
    
                var NewFriends = Friends.outgoing;
                NewFriends.push({ accountId: Account.id, groups: [], mutual: 0, alias: "", note: "", favorite: false, created: Account.createdAt })
                await friends.updateOne({ id: req.params.friendId }, { $set: { outgoing: NewFriends } })
    
                return res.status(201).json(
                    "errors.com.epicgames.account.request_sent", 18007,
                    `Friend Request Has Been Send To ${Friends.displayName}`,
                    "friends", "prod"
                )
            }
        } else {
            res.json("errors.com.epicgames.account.account_not_found", 18007,
                `Sorry, we couldn't find an account for ${req.params.friendId}`,
                "friends", "prod")
        }
    } else {
        res.json("errors.com.epicgames.account.account_not_found", 18007,
            `Sorry, we couldn't find an account for ${req.params.accountId}`,
            "friends", "prod")
    }
})
module.exports = app
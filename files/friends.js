const express = require("express")
const app = express.Router();

const user = require("../modules/user")
const friends = require("../modules/friends")

app.get("/friends/api/public/friends/:accountId", async (req, res) => {
    var Account = await friends.findOne({ id: new RegExp(`^${req.params.accountId}$`, 'i') }).lean();
    console.log(Account)
    const displayName = []
    if(Account){
        var FriendsIG = Account.accepted
        console.log(FriendsIG)
        if(FriendsIG.length === 0){
            displayName.push({"accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString()})
            return res.json(displayName)
        }else{
            FriendsIG.forEach(function (meme) {
                console.log(meme)
                displayName.push({"accountId":meme.displayName, "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString()})
                
            })
            return res.json(displayName)
        }
    }else{
        displayName.push({"accountId": "mrgotnofriends", "groups": [], "mutual": 0, "alias": "", "note": "", "favorite": false, "created": new Date().toISOString()})
        return res.json(displayName)
    }
})

module.exports = app
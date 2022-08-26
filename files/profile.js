const express = require("express")
const app = express.Router();

const fs = require("fs")

app.all("/fortnite/api/game/v2/profile/:accountId/*/:command", async (req, res) => {
    const profileID = req.query.profileId;
    const accountId = req.params.accountId
    const command = req.params.command
    const rvn = req.query.rvn;
    const profile = require("../service/profile")

    try {
        if(command == "QueryProfile" && profileID == "athena"){
            const athenaData = await profile.grabUserAccount(accountId, profileID)

            res.json(athenaData)
            res.status(200)
            res.end()
        }else{
            var retJSON = {
                profileRevision: rvn + 1,
                profileId: profileID,
                profileChangesBaseRevision: 1,
                profileChanges: [],
                profileCommandRevision: 1,
                serverTime: new Date(),
                responseVersion: 1
            }
            res.json(retJSON)
        }
    } catch (err) {
        console.log(err)
        var retJSON = {
            profileRevision: rvn + 1,
            profileId: profileID,
            profileChangesBaseRevision: 1,
            profileChanges: [],
            profileCommandRevision: 1,
            serverTime: new Date(),
            responseVersion: 1
        }
        res.json(retJSON)
    }
})

module.exports = app
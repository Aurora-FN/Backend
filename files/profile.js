const express = require("express")
const app = express.Router();

const fs = require("fs")

const account = require("../modules/account")

app.all("/fortnite/api/game/v2/profile/:accountId/client/SetCosmeticLockerSlot", async (req, res) => {
    var category = req.body.category;
    var ItemToSlot = req.body.itemToSlot;
    var AccountTemp = await account.findOne({ id: req.params.accountId }).lean().catch(error => next(e))
    await account.updateOne({ id: req.params.accountId }, { [`profilerevision`]: AccountTemp.profilerevision + 1 })
    if (category == "ItemWrap" || category == "Dance") {
        console.log(category)
        if (ItemToSlot == "") {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `` })
        } else {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}.${req.body.slotIndex}`]: `${req.body.itemToSlot.split(":")[0]}:${req.body.itemToSlot.split(":")[1]}` })
        }
    } else {
        if (ItemToSlot == "") {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `` })
        } else {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `${ItemToSlot.split(":")[0]}:${ItemToSlot.split(":")[1].toLowerCase()}` })
        }
    }
    var rvn = req.query.rvn;
    var AccountNew = await account.findOne({ id: req.params.accountId }).lean().catch(error => next(e))
    console.log(rvn)
    res.json({
        "profileId": "athena",
        "profileChangesBaseRevision": AccountNew.profilerevision,
        "profileChanges": [{
            "changeType": "statModified",
            "name": `favorite_${category.toString().toLowerCase()}`,
            "value": req.body.itemToSlot
        }],
        "profileCommandRevision": AccountNew.profilerevision,
        "serverTime": new Date(),
        "responseVersion": 1
    });
    res.end();
})

app.all("/fortnite/api/game/v2/profile/:accountId/client/EquipBattleRoyaleCustomization", async (req, res) => {
    var category = req.body.slotName;
    var rvn = req.query.rvn;
    var AccountTemp = await account.findOne({ id: req.params.accountId }).lean().catch(error => next(e))
    var ItemToSlot = req.body.itemToSlot;
    await account.updateOne({ id: req.params.accountId }, { [`profilerevision`]: AccountTemp.profilerevision + 1 })
    if (category == "ItemWrap" || category == "Dance") {
        console.log(category)
        if (ItemToSlot == "") {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `` })
        } else {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}.${req.body.indexWithinSlot}`]: `${ItemToSlot.split(":")[0]}:${ItemToSlot.split(":")[1]}` })
        }
    } else {
        if (ItemToSlot == "") {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `` })
        } else {
            await account.updateOne({ id: req.params.accountId }, { [`${category.toString().toLowerCase()}`]: `${ItemToSlot.split(":")[0]}:${ItemToSlot.split(":")[1].toLowerCase()}` })
        }
    }
    var AccountNew = await account.findOne({ id: req.params.accountId }).lean().catch(error => next(e))
    var rvn = req.query.rvn;
    console.log(rvn)
    res.json({
        "profileRevision": AccountNew.profilerevision,
        "profileId": "athena",
        "profileChangesBaseRevision": AccountNew.profilerevision,
        "profileChanges": [{
            "changeType": "statModified",
            "name": `favorite_${category.toLowerCase()}`,
            "value": req.body.itemToSlot
        }],
        "profileCommandRevision": AccountNew.profilerevision,
        "serverTime": new Date(),
        "responseVersion": 2
    });
    res.end();
})

app.all("/fortnite/api/game/v2/profile/:accountId/*/:command", async (req, res) => {
    const profileID = req.query.profileId;
    const accountId = req.params.accountId
    const command = req.params.command
    const rvn = req.query.rvn;
    const profile = require("../service/profile")

    try {
        if (command == "QueryProfile" && profileID == "athena" || "common_core" || "common_public") {
            const athenaData = await profile.grabUserAccount(accountId, profileID)

            res.json(athenaData)
            res.status(200)
            res.end()
        } else {
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
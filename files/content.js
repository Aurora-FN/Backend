const express = require("express")
const app = express.Router();

const fs = require("fs")
const path = require("path")
app.get(["/content/api/pages/fortnite-game", "/content/app/pages/"], (req, res) => {
    const config = JSON.parse(fs.readFileSync(path.join(__dirname,`../json/content.json`), 'utf8'))
    console.log(config)
    res.json({
        "jcr:isCheckedOut": true,
        _title: "Fortnite Game",
        "jcr:baseVersion": "a7ca237317f1e7883b3279-c38f-4aa7-a325-e099e4bf71e5",
        _activeDate: "2017-08-30T03:20:48.050Z",
        lastModified: new Date(),
        _locale: "en-US",
        battleroyalenews: {
            news: {
                platform_messages: [],
                _type: 'Battle Royale News',
                messages: [
                    {
                        image: config.image,
                        hidden: false,
                        _type: 'CommonUI Simple Message Base',
                        adspace: config.adspace,
                        title: config.title,
                        body: config.body,
                        spotlight: false
                    },
                    {
                        image: config.image2,
                        hidden: false,
                        _type: 'CommonUI Simple Message Base',
                        adspace: config.adspace2,
                        title: config.title2,
                        body: config.body2,
                        spotlight: false
                    }
                ]
            },
            _title: 'battleroyalenews',
            header: '',
            style: 'SpecialEvent',
            _activeDate: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            _locale: 'en-US'
        },
        battleroyalenewsv2: {
            news: {
                motds: [
                    {
                        entryType: "Text",
                        image: config.image,
                        tileImage: config.tileImage,
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Aurora",
                        _type: "CommonUI Simple Message MOTD",
                        title: config.title,
                        body: config.body,
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `AuroraNews`,
                        spotlight: false
                    },
                    {
                        entryType: "Text",
                        image: config.image2,
                        tileImage: config.tileImage2,
                        hidden: false,
                        videoMute: false,
                        tabTitleOverride: "Aurora",
                        _type: "CommonUI Simple Message MOTD",
                        title: config.title2,
                        body: config.body2,
                        videoLoop: false,
                        videoStreamingEnabled: false,
                        sortingPriority: 0,
                        id: `AuroraNews_2`,
                        spotlight: false
                    }
                ]
            }
        },
        emergencynotice: {
            news: {
                platform_messages: [],
                _type: 'Battle Royale News',
                messages: [
                    {
                        hidden: false,
                        _type: 'CommonUI Simple Message Base',
                        subgame: 'br',
                        title: config.alert,
                        body: config.alertmessage,
                        spotlight: true
                    }
                ]
            },
            _title: 'emergencynotice',
            _activeDate: new Date().toISOString(),
            lastModified: new Date().toISOString(),
            _locale: 'en-US'
        },
        emergencynoticev2: {
            news: {
                platform_messages: [],
                _type: "Battle Royale News",
                messages: [
                    {
                        hidden: false,
                        _type: "CommonUI Simple Message Base",
                        subgame: "br",
                        title: config.alert,
                        body: config.alertmessage,
                        spotlight: true
                    }
                ]
            },
            _title: "emergencynotice",
            _activeDate: new Date(),
            lastModified: new Date(),
            _locale: "en-US"
        },
    })
})
app.get('/content/*', function (req, res) {
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});

module.exports = app
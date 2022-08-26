const express = require("express")
const app = express.Router();

app.get("/waitingroom/api/waitingroom", (req, res) => {
    res.status(204).end()
})

app.get('*', function(req, res){
    res.status(404).json({
        "errorCode": "errors.com.epicgames.page.not_found",
        "message": "That Url Isnt On Our Api"
    })
});
module.exports = app
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server });

wss.on('listening', ws => {
    console.log(`XMPP started listening`)
})

wss.on("connection", ws => {
    console.log("New XMPP Connection")
    ws.on("close", async (lol) => {
        console.log("Lost XMPP Connection")
    })
})

wss.on("error", (err) => {
    console.log("Xmpp failed")
    console.log(err)
})

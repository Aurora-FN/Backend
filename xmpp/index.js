const WebSocket = require('ws');

const wss = new WebSocket.Server({ server });

global.Clients = [];

wss.on('listening', ws => {
    console.log(`XMPP listening`)
})

wss.on("connection", ws => {
    console.log("New XMPP Connection")
    ws.on("close", async (lol) => {
        console.log("Lost XMPP Connection")
    })

    ws.on('message', (msg) => {
        console.log(msg)
    })
})

wss.on("error", (err) => {
    console.log("Xmpp failed")
    console.log(err)
})

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 214 });

global.Clients = [];

wss.on('listening', ws => {
    console.log(`XMPP listening with port: 214`)
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

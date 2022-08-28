const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 80 },() => console.log("✅ Xmpp"));

wss.on("error", (err) => {
    console.log("🚫 Xmpp");
    console.log(err)
})

wss.on("connection", ws => {
    ws.on("close", async (xmpp) => {
        console.log("🚫 Xmpp Connection Disconected")
    })
})